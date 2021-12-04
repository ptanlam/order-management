using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using CustomerOrderManagement.Entities;
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

        public async Task<Order> AddAsync(OrderForCreationDto dto)
        {
            var order = (await _context.Set<Order>()
                .AddAsync(new Order(dto.CustomerName, dto.Price,
                dto.NumberOfItems)))
                .Entity;

            await _context.SaveChangesAsync();
            return order;
        }

        public async Task DeleteAsync(Order order)
        {
            _context.Set<Order>().Remove(order);
            await _context.SaveChangesAsync();
        }

        public async Task<List<Order>> GetAllAsync()
        {
            return await _context.Set<Order>()
                .AsQueryable()
                .ToListAsync();
        }

        public async Task<Order> GetByIdAsync(int id)
        {
            return await _context.Set<Order>()
                .FirstOrDefaultAsync(o => o.Id == id);
        }
    }
}
