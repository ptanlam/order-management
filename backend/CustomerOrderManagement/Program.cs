using System.Reflection;
using CustomerOrderManagement.Data;
using CustomerOrderManagement.Repositories;
using Microsoft.AspNetCore.Hosting;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Ninject;
using Ninject.Web.AspNetCore;
using Ninject.Web.AspNetCore.Hosting;
using Ninject.Web.Common.SelfHost;

namespace CustomerOrderManagement
{
    public class Program
    {
        public static void Main(string[] args)
        {
            var hostConfiguration = new AspNetCoreHostConfiguration()
                    .UseStartup<Startup>()
                    .UseKestrel()
                    .BlockOnStart();

            var host = new NinjectSelfHostBootstrapper(CreateKernel,
                hostConfiguration);

            host.Start();
        }

        public static IKernel CreateKernel()
        {
            var settings = new NinjectSettings
            {
                LoadExtensions = false
            };

            var kernel = new AspNetCoreKernel(settings);

            kernel.Load(typeof(AspNetCoreHostConfiguration).Assembly);
            kernel.Load(Assembly.GetExecutingAssembly());

            var configuration = new ConfigurationBuilder()
                  .AddEnvironmentVariables()
                  .AddJsonFile("appsettings.json")
                  .Build();

            kernel.Bind<DbContext>().To<ApplicationDbContext>()
                .InSingletonScope()
                .WithConstructorArgument("options",
                new DbContextOptionsBuilder<ApplicationDbContext>()
                    .UseSqlServer(configuration.GetConnectionString("DefaultConnection"))
                    .Options);

            kernel.Bind<IOrderRepository>().To<OrderRepository>()
                .InThreadScope();

            return kernel;
        }
    }
}
