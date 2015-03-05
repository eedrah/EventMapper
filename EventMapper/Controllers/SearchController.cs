using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventMapper.Models;
using EventMapper.Models.Interfaces;

namespace EventMapper.Controllers
{
    public class SearchController : ApiController
    {
        private readonly IEventFinder _eventFinder;

        public SearchController() {
            _eventFinder = new EventFinder();
        }

        public SearchController(IEventFinder eventFinder) {
            _eventFinder = eventFinder;
        }

        public IEnumerable<EventItem> Get(string searchTerm) {
            return _eventFinder.Search(searchTerm);
        }
    }
}
