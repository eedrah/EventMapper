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
            throw new System.NotImplementedException();
        }
    }
}