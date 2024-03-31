using DataAccess.Crud;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class UsuariosManager
    {
        public string CreateUsuario(UsuarioBase app)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.Create(app);
            return "Ok";
        }
    }
}
