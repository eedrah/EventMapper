using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EventMapper.Models;

namespace EventMapper.Tests.Controllers
{
    public interface IEventFinder
    {
        IEnumerable<EventItem> Search(string searchTerm);
    }
}