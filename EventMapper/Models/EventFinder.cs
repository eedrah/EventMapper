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
            EventFinderClient.Authenticator = new SimpleAuthenticator("username", "workingtitlewhatshappening", "password", "7xff9nnttb94");
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
                    Description = "My description....",
                    Start = new DateTime(2015, 2, 28, 12, 12, 12),
                    End = new DateTime(2015, 2, 28, 12, 12, 12),
                    Link = new Uri("http://google.com"),
                    Price = 12.99m
                }
            };
        }

        private string MakeEventFinderRequest()
        {
            RestRequest request = new RestRequest(ApiResource, Method.GET);            
            request.AddQueryParameter("row", "10")
        }
    }
}