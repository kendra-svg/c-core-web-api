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
        public List<Sede> GetSedeByIDI(int id)
        {
            SedeCrud crud = new SedeCrud();
            return crud.RetrieveByIdI<Sede>(id);

        }
        public void UpdateSede(int id, string nombre, string descripcion, DateTime date, string direccion, string provincia, string canton, string distrito, string ubicaciones)
        {
            SedeCrud crud = new SedeCrud();
            crud.UpdateSede(id, nombre, descripcion, date, direccion, provincia,canton, distrito, ubicaciones);
        }
    }
}
