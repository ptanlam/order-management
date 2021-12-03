using System;
namespace CustomerOrderManagement.Models
{
  public class Order
  {
    public Order(int id, string customerName, double price, int numberOfItems)
    {
      Id = id;
      CustomerName = customerName;
      Price = price;
      NumberOfItems = numberOfItems;
    }

    public int Id { get; }
    public string CustomerName { get; }
    public double Price { get; }
    public int NumberOfItems { get; }
  }
}
