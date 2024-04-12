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
        public string CreateUsuario(UsuarioBase user)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.Create(user);
            return "Ok";
        }
        public List<UsuarioBase> GetAllUsuarios()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAll<UsuarioBase>();

        }

        public List<UsuarioBase> GetUserCredentials(string correo, string contrasenna)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveCredentials<UsuarioBase>(correo, contrasenna);
        }
    }
}
