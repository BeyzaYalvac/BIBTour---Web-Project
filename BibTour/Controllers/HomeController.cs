using BibTour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using static System.Collections.Specialized.BitVector32;

namespace BibTour.Controllers
{
    public class HomeController : Controller
    {
        DbUser db = new DbUser();
        public ActionResult Index()
        {
            return View();

        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }
        public ActionResult ContactUs()
        {
            
            
            return View();
        }
        public ActionResult CampaignHotels()
        {
            return View();
        }
        public ActionResult HoneymoonHotels()
        {
            return View();
        }
        public ActionResult WinterHotels()
        {
            return View();
        }
        public ActionResult CruiseTours()
        {
            return View();
        }
        public ActionResult CultureTours()
        {
            return View();
        }public ActionResult FlavorTours()
        {
            return View();
        }

        public ActionResult Purchase()
        {
            return View();
        }

        public ActionResult FaqPage()
        {
            return View();
        }

        public ActionResult AboutUs()
        {
            return View();
        }
       


    }
}