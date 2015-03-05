using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace EventMapper.Controllers
{
    public class HomeController : Controller
    {
#if DEBUG
        public ActionResult Jasmine() {
            return View();
        }
#endif
        public ActionResult Index()
        {
            return View();
        }
    }
}
