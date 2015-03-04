using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;
using RestSharp.Deserializers;

namespace EventMapper.Models {
    public class EventItem
    {
        private string _title;
        [XmlElement("name")] public string Title
        {
            get { return _title; } 

            set {_title = TrimString(value); }
        }

        [XmlElement("description")] public string Description { get; set; }
        [XmlElement("datetime_start")] public string Start { get; set; }
        [XmlElement("datetime_end")] public string End { get; set; }
        //public decimal Price { get; set; }
        [XmlElement("url")] public string Link { get; set; }
        [XmlElement("location_summary")] public string LocationSummary { get; set; }
        //[XmlElement("is_free")] public bool IsFree { get; set; }

        [XmlElement("point")]
        public Point Point { get; set; }

        //public double Latitude { get { return Point.lat; } }
        //public double Longitude { get { return Point.lng; } }

        public string TrimString(string s)
        {
            if (s.Contains("<!"))
            {
               s = s.Remove(0, 9);
            }
            return s;
        }
    
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