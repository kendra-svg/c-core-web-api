using Microsoft.AspNetCore.Mvc;
using WEB_UI.Models;
using System;
using System.Collections.Generic;
using System.Security.Policy;

namespace WEB_UI.Controllers
{
    
    public class AdministradorController : Controller
    {
        public IActionResult LandingAdministrador()
        {
            return View();
        }
        public IActionResult AsignacionCitas()
        {
            return View();
        }
        public IActionResult BuscadorExpedientes()
        {
            return View();
        }
        public IActionResult ResultadosEncuestas()
        {
            return View();
        }
        public IActionResult DefinicionPrecioEImpuestos()
        {
            return View();
        }
        public IActionResult ListaSedes()
        {
            return View();
        }
        public IActionResult CrearSedes()
        {
            return View();
        }
        public IActionResult DetallesSedes()
        {
            return View();
        }
        public IActionResult DetallesCitas()
        {
            return View();
        }
        public IActionResult ExamenGeneral()
        {
            return View();
        }
        public IActionResult RecetasPacientes()
        {
            return View();
        }
        public IActionResult CrearRecetas()
        {
            return View();
        }
       
       
        public IActionResult Medicos()
        {
            return View();
        }
        public IActionResult ListaCitas()
        {
            return View();
        }
        public IActionResult VerPacientes()
        {
            return View();
        }
        public IActionResult VerUsuarios()
        {
            return View();
        }

        //DE AQUI PARA ABAJO ES PARA LA PARTE DE MI SALUD DEL ADMIN
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Administrador/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Administrador/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Administrador/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Administrador/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Administrador/MiSalud/EncuestaServicio.cshtml");
        }
        public IActionResult ExamenPersonal()
        {
            return View("~/Views/Administrador/MiSalud/ExamenPersonal.cshtml");
        }
        public IActionResult DiagnosticoPersonal()
        {
            return View("~/Views/Administrador/MiSalud/DiagnosticoPersonal.cshtml");
        }
        public IActionResult MisRecetas()
        {
            return View("~/Views/Administrador/MiSalud/MisRecetas.cshtml");
        }


        public IActionResult MisFacturas()
        {
            return View("~/Views/Administrador/MiSalud/MisFacturas.cshtml");
        }
        //usuarios
        public IActionResult Usuarios()
        {
            // Aquí se debería llamar al método para obtener la lista de usuarios
            var usuarios = ObtenerUsuarios();
            return View(usuarios);
        }

        // Método para obtener la lista de usuarios (simulado)
        private List<usuarios> ObtenerUsuarios()
        {
            // Aquí podrías tener la lógica para obtener la lista de usuarios desde tu base de datos u otra fuente de datos
            // Por simplicidad, aquí se simula una lista estática de usuarios
            return new List<usuarios>
            {
                new usuarios { Id = 1, Nombres = "Juan", Apellidos = "Pérez", Telefono = "123456789", Correo = "juan@example.com", Sexo = "Masculino", FechaNacimiento = new DateTime(1990, 1, 1), Edad = 30, NombreSede = "Sede1", Doctor = null, Enfermero = null, Paciente = null, Secretario = null },
                new usuarios { Id = 2, Nombres = "María", Apellidos = "Gómez", Telefono = "987654321", Correo = "maria@example.com", Sexo = "Femenino", FechaNacimiento = new DateTime(1995, 5, 10), Edad = 25, NombreSede = "Sede2", Doctor = null, Enfermero = null, Paciente = null, Secretario = null }
            };
        }

        //Notificaciones - Solicitudes de profesionales
        public IActionResult NotificacionesSolicitudes()
        {
            return View();
        }

        //Reportes Financieros
        public IActionResult ReportesFinancieros()
        {
            return View();
        }

        public IActionResult ConfiguracionAlertas()
        {
            return View();
        }

        //Diagnostico
        public IActionResult Diagnostico()
        {
            return View();
        }

        public IActionResult ListaUsuarios()
        {
            return View();
        }
    }
}