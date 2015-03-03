using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using RestSharp.Deserializers;

namespace EventMapper.Models {
    public class EventItem {
        [XmlElement("name")] public string Title { get; set; }
        [XmlElement("description")] public string Description { get; set; }
        //[XmlElement("datetime_start")] public DateTime Start { get; set; }
        //[XmlElement("datetime_end")] public DateTime End { get; set; }
        //public decimal Price { get; set; }
        //[XmlElement("url")] public Uri Link { get; set; }
        [XmlElement("location_summary")] public string LocationSummary { get; set; }
        //[XmlElement("is_free")] public bool IsFree { get; set; }

        [XmlElement("point")]
        public Point Point { get; set; }

        //public double Latitude { get { return Point.lat; } }
        //public double Longitude { get { return Point.lng; } }
    }

    public class Point
    {
        public double lat { get; set; }
        public double lng { get; set; }
    }

    [XmlRoot("events")]
    public class Events
    {
        [XmlAttribute("count")]
        public string Counting { get; set; }

        [XmlElement("event")]
        public EventItem[] EventItems { get; set; }
    }
}