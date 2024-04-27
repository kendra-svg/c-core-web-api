using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Crud;
using DTO;

namespace AppLogic
{
    public class FacturaManager
    {
        public string CreateFactura(Facturas factura)
        {
            FacturaCrud fc = new FacturaCrud();
            fc.Create(factura);
            return "ok";
        }

        public List<Facturas> GetFacturasByUserId(int id_usuario)
        {
            FacturaCrud fc = new FacturaCrud();
            return fc.RetrieveFacturasByUserId<Facturas>(id_usuario);
        }

        public List<Facturas> GetAllFacturas()
        {
            FacturaCrud fc = new FacturaCrud();
            return fc.RetrieveAllFacturas<Facturas>();
        }

        public List<Facturas> GetDoctorAndSpecialtyByFacturaId(int id_factura)
        {
            FacturaCrud fc = new FacturaCrud();
            return fc.RetrieveDoctorAndSpecialtyByFacturaId<Facturas>(id_factura);
        }
    }
}
