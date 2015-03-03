using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventMapper.Models.Interfaces;

namespace EventMapper.Models
{
    public class EventFinder : IEventFinder
    {
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
    }
}