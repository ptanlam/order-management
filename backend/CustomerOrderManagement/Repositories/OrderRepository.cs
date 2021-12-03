using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerOrderManagement.Models;
using Microsoft.EntityFrameworkCore;

namespace CustomerOrderManagement.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly DbContext _context;

        public OrderRepository(DbContext context)
        {
            _context = context ??
                throw new ArgumentNullException(nameof(context));
        }

        public async Task<List<Order>> GetAll()
        {
            return await _context.Set<Order>()
                .AsQueryable()
                .ToListAsync();
        }
    }
}
