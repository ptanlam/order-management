using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using Microsoft.OpenApi.Models;
using Ninject.Web.AspNetCore;
using Ninject.Web.AspNetCore.Hosting;

namespace CustomerOrderManagement
{
    public class Startup : AspNetCoreStartupBase
    {
        public Startup(IConfiguration configuration,
            IServiceProviderFactory<NinjectServiceProviderBuilder> providerFactory)
            : base(providerFactory)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        public override void ConfigureServices(IServiceCollection services)
        {
            base.ConfigureServices(services);
            
            services.AddCors(opt =>
            {
                opt.AddDefaultPolicy(p =>
                {
                    p.WithOrigins(Configuration["AllowedOrigins"].Split(','));
                    p.AllowAnyHeader();
                    p.AllowAnyMethod();
                });
            });

            services.AddControllers();
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new OpenApiInfo {
                    Title = "CustomerOrderManagement",
                    Version = "v1"
                });
            });
        }

        public override void Configure(IApplicationBuilder app)
        {
            var env = app.ApplicationServices
                .GetRequiredService<IWebHostEnvironment>();

            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint(
                    "/swagger/v1/swagger.json",
                    "CustomerOrderManagement v1"));
            }

            app.UseHttpsRedirection();

            app.UseRouting();

            app.UseCors();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
            });
        }
    }
}
