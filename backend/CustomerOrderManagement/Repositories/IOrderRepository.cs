using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerOrderManagement.Models;

namespace CustomerOrderManagement.Repositories
{
    public interface IOrderRepository
    {
        Task<List<Order>> GetAll();
    }
}
