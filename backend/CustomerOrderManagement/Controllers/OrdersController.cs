using System;
using System.Threading.Tasks;
using CustomerOrderManagement.Models;
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
                throw new ArgumentNullException(nameof(orderRepository));
        }

        [HttpGet]
        public async Task<ActionResult> GetOrders()
        {
            var orderList = await _orderRepository.GetAllAsync();
            return Ok(orderList);
        }

        [HttpGet("{Id:int}", Name = "GetOrder")]
        public async Task<ActionResult> GetOrder(int id)
        {
            var order = await _orderRepository.GetByIdAsync(id);
            if (order == null) return NotFound();
            return Ok(order);
        }

        [HttpPost]
        public async Task<ActionResult> Add([FromBody] OrderForCreationDto dto)
        {
            var order = await _orderRepository.AddAsync(dto);
            return CreatedAtRoute("GetOrder", new { order.Id }, order);
        }

        [HttpDelete("{Id:int}")]
        public async Task<ActionResult> Delete(int id)
        {
            var order = await _orderRepository.GetByIdAsync(id);
            if (order == null) return NotFound();
            await _orderRepository.DeleteAsync(order);
            return NoContent();
        }
    }
}
