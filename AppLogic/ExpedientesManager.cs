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
        public string CreateExpediente(Expediente exp)
        {
            ExpedienteCrud crud = new ExpedienteCrud();
            crud.Create(exp);
            return "ok";
        }
    }
}
