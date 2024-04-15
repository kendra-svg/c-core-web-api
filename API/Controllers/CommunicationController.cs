using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AppLogic;
using Microsoft.AspNetCore.Cors;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class CommunicationController : ControllerBase
    {
        [HttpPost]
        public async Task<string> SendEmail(string emailAddresss)
        {
            AdminEmail ae = new AdminEmail();
            await ae.SendEmail(emailAddresss);
            return "Ok";
        }
    }
    
}
