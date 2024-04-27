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
            return crud.RetrieveAllUsers<UsuarioBase>();

        }

        public List<UsuarioBase> GetAllFuncionarios()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllFuncionarios<UsuarioBase>();
        }

        public List<UsuarioBase> GetAllDoctors()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllDoctors<UsuarioBase>();
        }

        public List<UsuarioBase> GetAllEnfermeros()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllEnfermeros<UsuarioBase>();
        }

        public List<UsuarioBase> GetAllSecretarios()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllSecretarios<UsuarioBase>();
        }

        public List<UsuarioBase> GetAllPacientes()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllPacientes<UsuarioBase>();
        }

        public List<UsuarioBase> GetAllAdministradores()
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveAllAdministradores<UsuarioBase>();
        }

        public List<UsuarioBase> GetUserCredentials(string correo, string contrasenna)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveCredentials<UsuarioBase>(correo, contrasenna);
        }

        public List<UsuarioBase> GetUserByCorreo(string correo)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveByCorreo<UsuarioBase>(correo);
        }

        public List<UsuarioBase> GetOTPByEmail(string correo)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveOTPByEmail<UsuarioBase>(correo);
        }

        public List<UsuarioBase> GetUserByOtpAndEmail (string correo, int otp)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveByOtpAndEmail<UsuarioBase>(correo, otp);

        }

        public List<UsuarioBase> GetUserBySedeId(int id_sede)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveUserBySedeId<UsuarioBase>(id_sede);
        }

        public List<UsuarioBase> GetUserByUserId(int id_usuario)
        {
            UsuarioCrud crud = new UsuarioCrud();
            return crud.RetrieveUserByUserId<UsuarioBase>(id_usuario);
        }

        public void UpdateVerification(string correo)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdateVerification(correo);
        }

        public void UpdateOtpAndTimestamp(string correo)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdateOtpAndTimestamp(correo);
        }

        public void UpdatePassword(string correo, string nuevaClave)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdatePassword(correo, nuevaClave);
        }

        public void UpdateRol(string correo, string nuevoRol) { 
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdateRol(correo, nuevoRol);
        }


    }
}
