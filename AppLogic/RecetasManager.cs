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
    public class RecetasManager
    {
        //----crear
        public string CreateReceta(Receta rec)
        {
            RecetaCrud crud = new RecetaCrud();
            crud.Create(rec);
            return "ok";

        }
        //-----ID
        public Receta GetRecetaById(int idReceta)
        {
            RecetaCrud crud = new RecetaCrud();
            return crud.RetrieveById<Receta>(idReceta); ;
        }
        //-----update
        public string UpdateRecetaById(Receta rec)
        {
            RecetaCrud crud = new RecetaCrud();
            Receta recetaExistente = crud.RetrieveById<Receta>(rec.Id);

            if (rec.FechaEmision != DateTime.MinValue)
                recetaExistente.FechaEmision = rec.FechaEmision;
            if (!string.IsNullOrWhiteSpace(rec.DosisRecomendada))
                recetaExistente.DosisRecomendada = rec.DosisRecomendada;
            if (!string.IsNullOrWhiteSpace(rec.RecomendacionAdicional))
                recetaExistente.RecomendacionAdicional = rec.RecomendacionAdicional;
            if (!string.IsNullOrWhiteSpace(rec.Foto))
                recetaExistente.Foto = rec.Foto;
            if (!string.IsNullOrWhiteSpace(rec.NombreMedicamento))
                recetaExistente.NombreMedicamento = rec.NombreMedicamento;

            crud.Update(recetaExistente); // Aquí deberías pasar la receta existente actualizada
            return "ok";
        }


        //-----GET all
        public List<Receta> GetAllRecetas()
        {
            RecetaCrud crud = new RecetaCrud();
            return crud.RetrieveAll<Receta>();
        }

    }
}
