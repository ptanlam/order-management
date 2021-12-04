using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerOrderManagement.Entities;
using CustomerOrderManagement.Models;

namespace CustomerOrderManagement.Repositories
{
    public interface IOrderRepository
    {
        Task<List<Order>> GetAllAsync();
        Task<Order> GetByIdAsync(int id);
        Task<Order> AddAsync(OrderForCreationDto dto);
        Task DeleteAsync(Order order);
    }
}
