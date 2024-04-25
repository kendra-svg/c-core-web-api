﻿using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class SedeEspeManager
    {
        public string CreateSedeEspe(SedeEspecialidad sedeEspe)
        {
            SedeEspecialidCrud se = new SedeEspecialidCrud();
            se.Create(sedeEspe);
            return "ok";
        }
        public List<SedeEspecialidad> GetAllSedes()
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            return crud.RetrieveAll<SedeEspecialidad>();
        }
        public SedeEspecialidad GetSedeEspecialidad(int id)
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            return crud.RetrieveById<SedeEspecialidad>(id);
        }
        public List<SedeEspecialidad> GetAllSedesEspecNormal()
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            return crud.RetrieveAllSedesEspec<SedeEspecialidad>();
        }
        public List<SedeEspecialidad> GetEspecialidadesBySedeId(int id_sede)
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            return crud.RetrieveEspecialidadBySedeId<SedeEspecialidad>(id_sede);
        }

        public void DeleteSedeEspec(int id)
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            crud.DeleteBySedeEspecId(id);
        }

        public void DeleteUserFromSedeEspecialidad(int id)
        {
            SedeEspecialidCrud crud = new SedeEspecialidCrud();
            crud.DeleteUserFromSedeEspecialidad(id);
        }
    }
}
