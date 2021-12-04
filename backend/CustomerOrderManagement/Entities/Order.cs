namespace CustomerOrderManagement.Entities
{
    public class Order
    {
        private Order() { }

        public Order(string customerName, double price,
            int numberOfItems)
        {
            CustomerName = customerName;
            Price = price;
            NumberOfItems = numberOfItems;
        }

        public int Id { get; private set; }
        public string CustomerName { get; private set; }
        public double Price { get; private set; }
        public int NumberOfItems { get; private set; }
    }
}
