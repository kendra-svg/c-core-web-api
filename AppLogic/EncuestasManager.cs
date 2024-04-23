using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class EncuestasManager
    {
        //crear
        public string CreateEncuesta(Encuestas enc)
        {
            EncuestasCrud crud = new EncuestasCrud();
            crud.Create(enc);
            return "ok";
        }
        //ById
        public Encuestas GetEncuestasById(int idEncuestas)
        {
            EncuestasCrud crud = new EncuestasCrud();
            return crud.RetrieveById<Encuestas>(idEncuestas); ;
        }

        //GetAll
        public List<Encuestas> GetAllEncuestas()
        {
            EncuestasCrud crud = new EncuestasCrud();
            return crud.RetrieveAll<Encuestas>();
        }
    }
}