using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;
using System.Web.Security;
using CompareAttribute = System.ComponentModel.DataAnnotations.CompareAttribute;

namespace BibTour.Models
{

    public class LoginDTO
    {
       
        [Key]
        [Required(ErrorMessage = "Username is requiered")]
        public int UserId { get; set; }
       
        [Required(ErrorMessage = "The Email adress is required")]
        [EmailAddress(ErrorMessage = "Invalid Email Adress")]

        public string Email {  get; set; }
        [Required(ErrorMessage ="Password is required")]
        [DataType(DataType.Password)]
        public string Password {  get; set; }

        [Compare("Password", ErrorMessage = "Please confirm your password.")]
        [DataType(DataType.Password)]
        public string  ConfirmPassword{ get; set; }



        [Required(ErrorMessage = "Name is required")]
        public string Name { get; set; }






    }
}