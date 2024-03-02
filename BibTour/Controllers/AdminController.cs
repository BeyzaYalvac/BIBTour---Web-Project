using BibTour.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BibTour.Controllers
{
    public class AdminController : Controller
    {
        DbUser db = new DbUser();


        // GET: Admin
        public ActionResult Index()
        {
            var users = db.loginDTOs.ToList();

            return View(users);
        }

      
        public ActionResult Delete(int id)
        {
            try
            {
                var userToDelete = db.loginDTOs.FirstOrDefault(u => u.UserId == id);
                if (userToDelete != null)
                {
                    db.loginDTOs.Remove(userToDelete);
                    db.SaveChanges(); // Save changes after removal
                }
                else
                {
                    // Handle the case where the user with the specified id is not found
                    return HttpNotFound();
                }

                // After successful deletion, redirect the user to the index page
                return RedirectToAction("Index");
            }
            catch (Exception ex)
            {
                // Log or handle the exception
                return Content("Error deleting user: " + ex.Message);
            }
        }

    }


}