using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Text;
using System.Web.Mvc;
using G_Inventory.Models;

namespace G_Inventory.Controllers
{
    public class InventoryController : Controller
    {
        private GOSEntities db = new GOSEntities();
        public ActionResult Index()
        {
            var products = db.Products.Include("Category");
            var categories = db.Categories;
            ViewBag.productList  = products;
            ViewBag.categoryList = categories;
            return View();
        }
        //==============================================================
        public ActionResult Fetch()
        {
            
            var products = db.Products.Include("Category");
            StringBuilder html = new StringBuilder();
            return Content(html.ToString());
        }
        //==============================================================
        [HttpPost]
        public void AddProduct(Product product)
        {
            db.Products.Add(product);
            db.SaveChanges();
            //return View();
        }
        //==============================================================
    }
}