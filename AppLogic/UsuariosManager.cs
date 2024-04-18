﻿using DataAccess.Crud;
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

        public void UpdateVerification(string correo)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdateVerification(correo);
        }

        public void UpdateOtpAndTimestamp(string correo, int otp)
        {
            UsuarioCrud crud = new UsuarioCrud();
            crud.UpdateOtpAndTimestamp(correo, otp);
        }
    }
}
