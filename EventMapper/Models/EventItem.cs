using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace EventMapper.Models {
    public class EventItem {
        public double Latitude { get; set; }
        public double Longitude { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime Start { get; set; }
        public DateTime End { get; set; }
        public decimal Price { get; set; }
        public Uri Link { get; set; }
    }
}