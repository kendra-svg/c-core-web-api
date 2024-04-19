using DataAccess.Crud;
using DataAccess.Mappers;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class EspecialidadesManager
    {
        public string CreateEspecialidad(Especialidad espec)
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            crud.Create(espec);
            return "ok";

        }
        public string UpdateEspecialidadById(Especialidad espec)
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            crud.Update(espec);
            return "ok";

        }

        public List<Especialidad> GetAllEspecialidades()
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            return crud.RetrieveAll<Especialidad>();
        }

        //public List<Especialidad> GetEspecialidadById(int id)
        //{
        //    EspecialidadCrud crud = new EspecialidadCrud();
        //    return crud.RetrieveById<Especialidad>();
        //}

        public List<Sede> GetEspecialidadById()
        {
            throw new NotImplementedException();
        }
    }

}

