using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class ExpedientesManager
    {
        public Expediente GetExpedienteById(int idExp)
        {
            ExpedienteCrud crud = new ExpedienteCrud();
        
            return crud.RetrieveById<Expediente>(idExp); ;
        }
        public List<Expediente> GetAllexpediente()
        {
            ExpedienteCrud crud = new ExpedienteCrud();
            return crud.RetrieveAll<Expediente>();
        }

        public string UpdateExpediente(Expediente expChanges)
        {
            ExpedienteCrud crud = new ExpedienteCrud();
           #region
            //Expediente previousExp = crud.RetrieveById<Expediente>(expChanges.Id);
            //Expediente newExp = new Expediente();
            //if (expChanges.AntecedentesPersonales == null || expChanges.AntecedentesPersonales == "string" || expChanges.AntecedentesPersonales == "")
            //{
            //    newExp.AntecedentesPersonales = previousExp.AntecedentesPersonales;
            //}
            //else
            //{
            //    newExp.AntecedentesPersonales = expChanges.AntecedentesPersonales;
            //}



            //if (expChanges.TratamietosFarmacologicos == null || expChanges.TratamietosFarmacologicos == "string" || expChanges.TratamietosFarmacologicos == "")
            //{
            //    newExp.TratamietosFarmacologicos = previousExp.TratamietosFarmacologicos;
            //}
            //else
            //{
            //    newExp.TratamietosFarmacologicos = expChanges.TratamietosFarmacologicos;
            //}


            //if (expChanges.AntecedentesFamiliades == null || expChanges.AntecedentesFamiliades == "string" || expChanges.AntecedentesFamiliades == "")
            //{
            //    newExp.AntecedentesFamiliades = previousExp.AntecedentesFamiliades;
            //}
            //else
            //{
            //    newExp.AntecedentesFamiliades = expChanges.AntecedentesFamiliades;
            //}

            //if (expChanges.EnfermedadesCronicas == null || expChanges.EnfermedadesCronicas == "string" || expChanges.EnfermedadesCronicas == "")
            //{
            //    newExp.EnfermedadesCronicas = previousExp.EnfermedadesCronicas;
            //}
            //else
            //{
            //    newExp.EnfermedadesCronicas = expChanges.EnfermedadesCronicas;
            //}


            //if (expChanges.MalosHabitos == null || expChanges.MalosHabitos == "string" || expChanges.MalosHabitos == "")
            //{
            //    newExp.MalosHabitos = previousExp.MalosHabitos;
            //}
            //else
            //{
            //    newExp.MalosHabitos = expChanges.MalosHabitos;
            //}

            //if (expChanges.RiesgosCardiovasculares == null || expChanges.RiesgosCardiovasculares == "string" || expChanges.RiesgosCardiovasculares == "")
            //{
            //    newExp.RiesgosCardiovasculares = previousExp.RiesgosCardiovasculares;
            //}
            //else
            //{
            //    newExp.RiesgosCardiovasculares = expChanges.RiesgosCardiovasculares;
            //}




            //if (expChanges.Diabetes == null || expChanges.Diabetes == "string" || expChanges.Diabetes == "")
            //{
            //    newExp.Diabetes = previousExp.Diabetes;
            //}
            //else
            //{
            //    newExp.Diabetes = expChanges.Diabetes;
            //}

            //if (expChanges.EnfermedadesCongenitas == null || expChanges.EnfermedadesCongenitas == "string" || expChanges.EnfermedadesCongenitas == "")
            //{
            //    newExp.EnfermedadesCongenitas = previousExp.EnfermedadesCongenitas;
            //}
            //else
            //{
            //    newExp.EnfermedadesCongenitas = expChanges.EnfermedadesCongenitas;
            //}
            //if (expChanges.AntecedentesCancer == null || expChanges.AntecedentesCancer == "string" || expChanges.AntecedentesCancer == "")
            //{
            //    newExp.AntecedentesCancer = previousExp.AntecedentesCancer;
            //}
            //else
            //{
            //    newExp.AntecedentesCancer = expChanges.AntecedentesCancer;
            //}
            #endregion







            crud.Update(expChanges);
            return "ok";
        }
    }
}
