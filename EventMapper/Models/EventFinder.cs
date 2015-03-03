using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventMapper.Controllers;
using EventMapper.Models.Interfaces;
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
            return new List<EventItem>
            {
                new EventItem()
                {
                    Latitude = -41.1475787,
                    Longitude = 175.540889,
                    Title = "My event!",
                    Description = "My description...." + MakeEventFinderRequest(),
                    Start = new DateTime(2015, 2, 28, 12, 12, 12),
                    End = new DateTime(2015, 2, 28, 12, 12, 12),
                    Link = new Uri("http://google.com"),
                    Price = 12.99m
                }
            };
        }

        private IEnumerable<EventItem> MakeEventFinderRequest()
        {
            RestRequest request = new RestRequest(ApiResource, Method.GET);
            request.RequestFormat = DataFormat.Xml;
            //request.AddQueryParameter("q", "my search string");  // Can use AND OR, NOT and ()
            request.AddQueryParameter("row", "20");
            //request.AddQueryParameter("offset", "20");
            request.AddQueryParameter("order", "date");
            //request.AddQueryParameter("free", "1");
            //request.AddQueryParameter("point", "-36.84846,174.763332");
            //request.AddQueryParameter("radius", "4.5"); // 4.5km from the point
            //request.AddQueryParameter("price_max", "20");
            //request.AddQueryParameter("price_min", "20");
            //request.AddQueryParameter("start_date", "YYYY-MM-DD HH:mm:ss");
            //request.AddQueryParameter("end_date", "YYYY-MM-DD HH:mm:ss");

            request.AddQueryParameter("fields", 
                "event: (point, name, datetime_end, datetime_start, description, location_summary, url, is_free)"
                );
            
            IRestResponse<List<EventItem>> response = EventFinderClient.Execute<List<EventItem>>(request);
            return response.Data;
        }
    }
}