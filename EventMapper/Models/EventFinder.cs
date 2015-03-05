using System;
using System.Collections;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using System.Xml.Serialization;
using EventMapper.Controllers;
using EventMapper.Models.Interfaces;
using Microsoft.Ajax.Utilities;
using RestSharp;

namespace EventMapper.Models
{
    public class EventFinder : IEventFinder
    {
        private const string ApiDomain = "http://api.eventfinder.co.nz";
        private const string ApiResource = "v2/events.xml";
        private static readonly RestClient EventFinderClient = new RestClient(ApiDomain);

        public EventFinder()
        {
            EventFinderClient.Authenticator = new HttpBasicAuthenticator("workingtitlewhatshappening", "7xff9nnttb94");
        }

        public IEnumerable<EventItem> Search(string searchTerm)
        {
            List<EventItem> eventsList = new List<EventItem>();
            int offset = 0;
            int totalEvents = 1;  // Assume at least one item exists
            while (offset < totalEvents)
            {
                Events results = GetEvents(offset, searchTerm);
                offset += 20;
                totalEvents = results.Count;
                eventsList.AddRange(results.EventItems);
            }
            return eventsList;
        }

        public Events GetEvents(int offset, string searchTerm)
        {
            string xml = MakeEventFinderRequest(offset);
            var serializer = new XmlSerializer(typeof(Events));
            return (Events)serializer.Deserialize(new StringReader(xml));
        }

        private string MakeEventFinderRequest(int offset)
        {
            int count = offset;
            string todayDateTime = DateTime.Now.ToString("O");
            string endDateTime = DateTime.Now.AddDays(7).ToString("O");
            string offSet = count.ToString();

            RestRequest request = new RestRequest(ApiResource, Method.GET);
            request.RequestFormat = DataFormat.Xml;
            //request.AddQueryParameter("q", "my search string");  // Can use AND OR, NOT and ()
            request.AddQueryParameter("rows", "20");
            request.AddQueryParameter("offset", offSet);
            request.AddQueryParameter("order", "distance_date");
            //request.AddQueryParameter("free", "1");
            request.AddQueryParameter("point", "-41.2829074,174.7842057"); //Pipitea
            request.AddQueryParameter("radius", "20"); // 4.5km from the point
            //request.AddQueryParameter("price_max", "20");
            //request.AddQueryParameter("price_min", "20");
            request.AddQueryParameter("start_date", todayDateTime);
            request.AddQueryParameter("end_date", endDateTime);

            request.AddQueryParameter("fields",
                "event:(point,name,datetime_end,datetime_start,datetime_summary,description,location_summary,url,is_free)"
                );

            IRestResponse response = EventFinderClient.Execute(request);

            return response.Content;
        }
    }
}