using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AppLogic;
using DTO;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class FacturaController : ControllerBase
    {
        [HttpPost]
        public string CreateFactura(Facturas factura)
        {
            FacturaManager manager = new FacturaManager();
            return manager.CreateFactura(factura);
        }

        [HttpGet]
        public List<Facturas> GetFacturasByUserId(int id_usuario)
        {
            FacturaManager manager = new FacturaManager();
            return manager.GetFacturasByUserId(id_usuario);
        }

        [HttpGet]
        public API_Response GetFacturasByUserIdA(int id_usuario)
        {
            API_Response response = new API_Response();
            try
            {
                FacturaManager fm = new FacturaManager();
                response.Data = fm.GetFacturasByUserId(id_usuario);
                response.Result = "OK";
            }
            catch (Exception ex)
            {
                response.Result = "ERROR";
                response.Message = ex.Message;
            }
            return response;
        }

        [HttpGet]
        public List<Facturas> GetAllFacturas()
        {
            FacturaManager manager = new FacturaManager();
            return manager.GetAllFacturas();
        }

        [HttpGet]
        public List<Facturas> GetDoctorAndSpecialtyByFacturaId(int id_factura)
        {
            FacturaManager manager = new FacturaManager();
            return manager.GetDoctorAndSpecialtyByFacturaId(id_factura);
        }


    }
}
