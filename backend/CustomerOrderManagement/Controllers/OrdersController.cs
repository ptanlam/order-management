using System.Threading.Tasks;
using CustomerOrderManagement.Repositories;
using Microsoft.AspNetCore.Mvc;

namespace CustomerOrderManagement.Controllers
{
    [ApiController]
    [Route("orders")]
    public class OrdersController : ControllerBase
    {
        private readonly IOrderRepository _orderRepository;

        public OrdersController(IOrderRepository orderRepository)
        {
            _orderRepository = orderRepository ??
                throw new System.ArgumentNullException(nameof(orderRepository));
        }

        [HttpGet]
        public async Task<ActionResult> GetOrders()
        {
            //var orderList = new List<Order>()
            //{
            //    new Order(1, "Cristiano Ronaldo", 12_000_000, 3),
            //    new Order(2, "Lionel Messi", 23_000_000, 4),
            //    new Order(3, "Fernando Torres", 45_000_000, 5),
            //    new Order(4, "Thierry Henry", 40_000_000, 6),
            //    new Order(5, "NeymarJR", 5_000_000, 3),
            //    new Order(6, "Ibrahimovic", 15_000_000, 4),
            //};

            var orderList = await _orderRepository.GetAll();
            return Ok(orderList);
        }
    }
}
