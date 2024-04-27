using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class ExpedienteRecetaManager
    {
        public string CreateSede(ExpedienteReceta app)
        {
            ExpedienteRecetaCrud crud = new ExpedienteRecetaCrud();
            crud.Create(app);
            return "ok";
        }
        public List<ExpedienteReceta> GetAllexpediente()
        {
            ExpedienteRecetaCrud crud = new ExpedienteRecetaCrud();
            return crud.RetrieveAll<ExpedienteReceta>();
        }
    }
}
