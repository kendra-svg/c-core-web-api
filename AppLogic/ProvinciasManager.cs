using DataAccess.Crud;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace AppLogic
{
    public class ProvinciasManager
    {
        public string CreateProvincias(BaseClass app)
        {
            ProvinciasCrud crud = new ProvinciasCrud();
            crud.Create(app);
            return "Ok";
        }
    }
}
