﻿using AppLogic;
using DataAccess.Crud;
using DTO;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [EnableCors("Demo_Policy")]
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class UsuarioController : ControllerBase
    {
        [HttpPost]
        public string CreateUsuario(UsuarioBase app)
        {
            UsuariosManager manager = new UsuariosManager();
            return manager.CreateUsuario(app);
        }
        [HttpGet]
        public List<UsuarioBase> GetUsuarios()
        {
            UsuariosManager pm = new UsuariosManager();
            return pm.GetAllUsuarios();
        }
    }
}
