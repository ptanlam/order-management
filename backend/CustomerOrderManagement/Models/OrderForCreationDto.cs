namespace CustomerOrderManagement.Models
{
    public class OrderForCreationDto
    {
        public string CustomerName { get; set; }
        public double Price { get; set; }
        public int NumberOfItems { get; set; }
    }
}
