using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class LaboratoriosManager
    {
        public string CreateLaboratorio(Laboratorio lab)
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            crud.Create(lab);
            return "ok";

        }

        public List<Laboratorio> GetAllLaboratorios()
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            return crud.RetrieveAll<Laboratorio>();
        }
    }
}
