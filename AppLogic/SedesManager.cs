using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class SedesManager
    {
        public string CreateSede(Sede app)
        {
            SedeCrud crud = new SedeCrud();
            crud.Create(app);
            return "ok";
        }
    }
}
