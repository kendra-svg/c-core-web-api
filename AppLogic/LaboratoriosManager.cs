using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class LaboratoriosManager
    {
        public string CreateLaboratorio(Laboratorio lab, int idUsurios)
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            crud.CreateLab(lab, idUsurios);
            return "ok";

        }

        public List<Laboratorio> GetAllLabs()
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            return crud.RetrieveAll<Laboratorio>();
        }
        
        public List<Laboratorio> GetLabByUserId(int id)
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            return crud.RetrieveAllByUserId<Laboratorio>(id);
        }

       
        public string DeleteLabById(int labId)
        {
            LaboratorioCrud crud = new LaboratorioCrud();
            crud.DeleteLabById(labId);
            return "ok";
        }



    }
}
