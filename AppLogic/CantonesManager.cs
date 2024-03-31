using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class CantonesManager
    {
        public string CreateCanton(Canton app)
        {
            CantonesCrud crud = new CantonesCrud();
            crud.Create(app);
            return "Ok";
        }
    }
}
