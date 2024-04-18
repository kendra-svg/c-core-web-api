using DataAccess.Crud;
using DTO;
using DTO.External;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class SedesManager
    {
        public string CreateSede(Sede app)
        {
            SedeCrud crud = new SedeCrud();
            crud.Create(app);
            return "ok";
        }
        public List<Sede> GetAllSedes()
        {
            SedeCrud crud = new SedeCrud();
            return crud.RetrieveAll<Sede>();
        }
        public List<Sede> GetSedeById(int id)
        {
            SedeCrud crud =new SedeCrud(); 
            return crud.RetrieveByIdI<Sede>(id);
        }
        private void CompleteSedes(Sede sede)
        {
            ConectorCentral conector = new ConectorCentral(); 
            SedesInfo info = conector.GetSedesData(sede.Id);
            var listSedes = conector.GetSedesInfos();
            sede.Nombre = info.nombre;
            sede.FechaCreacion = info.FechaCreacion;
            sede.Ubicacion = info.ubicacion;
            sede.Canton = info.canton;
            sede.Provincia = info.provincia;
            sede.Distrito = info.distrito;
            sede.Direccion = info.direccion;
        }

        
    }
}
