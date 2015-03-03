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
                    Latitude = -41.272922,
                    Longitude = 174.785915,
                    Title = "My event!",
                    Description = "My event description at the stadium",
                    Start = new DateTime(2015, 2, 28, 12, 12, 12),
                    End = new DateTime(2015, 2, 28, 12, 12, 12),
                    Link = new Uri("http://google.com"),
                    Price = 12.99m
                },

                new EventItem()
                {
                    Latitude = -41.327594,
                    Longitude = 174.807598,
                    Title = "My event number two!",
                    Description = "A description for event number two at the airport",
                    Start = new DateTime(2015, 2, 28, 12, 12, 12),
                    End = new DateTime(2015, 2, 28, 12, 12, 12),
                    Link = new Uri("http://twitter.com"),
                    Price = 12.99m
                },

                new EventItem()
                {
                    Latitude = -41.300366,
                    Longitude = 174.78032,
                    Title = "My event number three!",
                    Description = "Watching the cricket with Rohith at the Basin",
                    Start = new DateTime(2015, 2, 28, 12, 12, 12),
                    End = new DateTime(2015, 2, 28, 12, 12, 12),
                    Link = new Uri("http://twitter.com"),
                    Price = 12.99m
                }
            };
        }
    }
}