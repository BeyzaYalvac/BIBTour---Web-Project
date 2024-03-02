using BibTour.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Data.SqlClient;
using BibTour.Models;
using System.Web.UI.WebControls;
using System.Web.Security;

namespace BibTour.Controllers
{

   

    public class UserController : Controller
    {
       DbUser db=new DbUser();
        [HttpGet]
         public ActionResult LogIn()
        {
            return View();
        }

        public ActionResult Register()
        {
            return View();
        }


        [HttpPost]
        public ActionResult LogIn(LoginDTO user)
        {
            var usr = db.loginDTOs.SingleOrDefault(u => u.Email == user.Email && u.Password == user.Password);
            if (usr != null)
            {
                Session["UserId"] = usr.UserId.ToString();
                Session["Email"] = usr.Email.ToString();
                return RedirectToAction("Successful");
            }
            else
            {
                ModelState.AddModelError("", "Username or Password is wrong");
                return View();
            }
        }



        public ActionResult Logout()
        {
            FormsAuthentication.SignOut();
            return RedirectToAction("Index");
        }

        public ActionResult LoggedIn()
        {
            if (Session["Email"]!=null)
            {
                return View();
            }
            else
            {
                return RedirectToAction("LogIn");
            }
        }
      
        public ActionResult purchase()
        {
            return View();
        }

        public ActionResult Successfull()
        {
            return View();
        }


        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Register(LoginDTO userAcc)
        {
            if (ModelState.IsValid)
            {
                using (DbUser db = new DbUser())
                {
                    // Ensure the password and confirmation match before saving to the database
                    if (userAcc.Password == userAcc.ConfirmPassword)
                    {
                        db.loginDTOs.Add(userAcc);
                        db.SaveChanges();
                        ModelState.Clear();
                        ViewBag.Message = userAcc.Name + " Successfully Registered";
                        return RedirectToAction("LogIn");
                    }
                    else
                    {
                        ModelState.AddModelError("", "Password and confirmation do not match.");
                    }
                }
            }
            return View("LogIn");
        }



    }
}