using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventMapper.Models.Interfaces
{
    public interface IEventFinder
    {
        IEnumerable<EventItem> Search(string searchTerm, int count);
    }
}