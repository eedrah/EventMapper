using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EventMapper.Models;

namespace EventMapper.Controllers
{
    public class SearchController : ApiController
    {
        public IEnumerable<EventItem> Get(string searchTerm) {
            return null;
        }
    }
}
