using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class CuposManager
    {

        public string Create(Cupos c, int idEspecialidad, int idSede)
        {
            CupoCrud crud = new CupoCrud();
            crud.Create(c,idEspecialidad,idSede);
            return "ok";

        }

        public List<Cupos> GetAll()
        {
            CupoCrud crud = new CupoCrud();
            
            return crud.RetrieveAll<Cupos>();
        }

        public string Update(Cupos c)
        {
            CupoCrud crud = new CupoCrud();
            crud.Update(c);
            return "ok";
        }
        public string Delete(Cupos c)
        {
            CupoCrud crud = new CupoCrud();
            crud.Delete(c);
            return "ok";
        }
        public Cupos GetCupoById(int id)
        {
            CupoCrud crud = new CupoCrud();

            return crud.RetrieveById<Cupos> (id);
        }



    }
}
