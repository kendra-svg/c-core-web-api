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
        public Sede GetSedeById(int id)
        {
            var result = this.GetAllSedes().Where(x => x.Id == id).ToList();
            if (result.Count > 0)
            {
                this.CompleteSedes(result[0]);
                return result[0];
            }
            else
                return null;
        }
        private void CompleteSedes(Sede sede)
        {
            ConectorCentral conector = new ConectorCentral();

            SedesInfo info = conector.GetSedesDetails(sede.Id);

            var listSedes = conector.GetSedesInfos();

            List<string> especialidad = conector.GetSpecialties();
            List<string> combi = conector.GetcombiSpeSedeUser();
            List<string> user = conector.GetUsers();

            sede.Nombre = info.nombre;
            sede.Descripcion = info.descripcion;
            sede.FechaCreacion = info.FechaCreacion;
            sede.Ubicacion = info.ubicacion;
            sede.Canton = info.canton;
            sede.Provincia = info.provincia;
            sede.Distrito = info.distrito;
            sede.Direccion = info.direccion;
            sede.Foto = info.foto;
        }

    }
}
