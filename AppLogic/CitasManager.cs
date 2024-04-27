using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class CitasManager
    {

        public string CreateCita(Cita cita)
        {
            CitaCrud crud = new CitaCrud();
            crud.Create(cita);
            return "ok";
        }
        public List<Cita> RetrieveAllByUserId(int id)
        {
            CitaCrud crud = new CitaCrud();

            return crud.RetrieveAllByUserId<Cita>(id); ;
        }
    }
}
