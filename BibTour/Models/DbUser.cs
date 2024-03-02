using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace BibTour.Models
{
    public class DbUser:DbContext
    {
  
        public DbSet<LoginDTO> loginDTOs { get; set; }
        
    }
}