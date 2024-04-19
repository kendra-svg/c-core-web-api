﻿using DataAccess.Crud;
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
        public string CreateReceta(Receta rec)
        {
            RecetaCrud crud = new RecetaCrud();
            crud.Create(rec);
            return "ok";

        }

        public string UpdateRecipeById(Receta rec)
        {
            RecetaCrud crud = new RecetaCrud();
            crud.Update(rec);
            return "ok";

        }


        public List<Receta> GetAllRecetas()
        {
            RecetaCrud crud = new RecetaCrud();
            return crud.RetrieveAll<Receta>();
        }
    }
}
