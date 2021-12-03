using System.Collections.Generic;
using CustomerOrderManagement.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling MVC for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace CustomerOrderManagement.Controllers
{
  [ApiController]
  [Route("orders")]
  public class OrdersController : ControllerBase
  {
    [HttpGet]
    public IActionResult GetOrders()
    {
      var orderList = new List<Order>()
      {
        new Order(1, "Cristiano Ronaldo", 12_000_000, 3),
        new Order(2, "Lionel Messi", 23_000_000, 4),
        new Order(3, "Fernando Torres", 45_000_000, 5)
      };

      return Ok(orderList);
    }
  }
}
