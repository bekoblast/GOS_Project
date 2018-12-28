using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(G_Inventory.Startup))]
namespace G_Inventory
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
