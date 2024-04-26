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
        
        public Especialidad GetEspecialidadById(int idEspecialidad)
        {
            EspecialidadCrud crud = new EspecialidadCrud();

            return crud.RetrieveById<Especialidad>(idEspecialidad); ;

        }
        public string UpdateEspecialidadById(Especialidad espec)
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            Especialidad especialidadExistente = crud.RetrieveById<Especialidad>(espec.Id);
            Especialidad especialidadActualizada = new Especialidad();

            especialidadActualizada.Id = espec.Id;
            //BASADO EN QUE EL SWAGGER SE CAE SI ALGUN INT VIENE COMPLETAMENTE VACIO  
            // SERIA NECESARIO IMPLEMENTAR EN EL FRONT EN CASO DE QUE COSTO O IVA VENGA VACIO EN EL JS CAMBIARLO POR UN CERO POR AQUELLO Y ASI NO SE CAERIA
            if (espec.IVA == 0)
            {
                especialidadActualizada.IVA = especialidadExistente.IVA;
            }
            else
            {
                especialidadActualizada.IVA = espec.IVA;
            }
            if (espec.Costo == 0)
            {
                especialidadActualizada.Costo = especialidadExistente.Costo;
            }
            else
            {
                especialidadActualizada.Costo = espec.Costo;
            }
            if (espec.Nombre == "" || espec.Nombre == null || espec.Nombre == "string")


            {
                especialidadActualizada.Nombre = especialidadExistente.Nombre;
            }
            else
            {
                especialidadActualizada.Nombre = espec.Nombre;
            }

            crud.Update(especialidadActualizada);
            return "ok";
        }


        public List<Especialidad> GetAllEspecialidades()
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            return crud.RetrieveAll<Especialidad>();
        }

        public List<Sede> GetEspecialidadById()
        {
            throw new NotImplementedException();
        }

        public List<Especialidad> GetEspecById(int id)
        {
            EspecialidadCrud crud = new EspecialidadCrud();
            return crud.RetrieveEspecById<Especialidad>(id);
        }
        public void UpdateEspe(int id, int costo, int iva)
        {
            EspecialidadCrud crud=new EspecialidadCrud();
            crud.UpdateEspe(id, costo, iva);
        }
    }

}

