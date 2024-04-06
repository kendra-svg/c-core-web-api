﻿using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using WEB_UI.Models;
using DTO; 

namespace WEB_UI.Controllers
{
    public class SecretarioController : Controller
    {
        public IActionResult LandingSecretario()
        {
            return View();
        }

        public IActionResult Crear()
        {
            return View();
        }

        public IActionResult ListaCitas()
        {
            return View();
        }
        public IActionResult AsignacionCitas()
        {
            return View();
        }

        public IActionResult DetallesCitas()
        {
            return View();
        }

        public IActionResult PagosFacturas()
        {
            return View();
        }
        public IActionResult Sedes()
        {
            return View();
        }
        public IActionResult ExamenPersonal()
        {
            return View();
        }
        public IActionResult ExamenGeneral()
        {
            return View();
        }
        public IActionResult BuscadorExpedientes()
        {
            return View();
        }
        public IActionResult MisRecetas()
        {
            return View();
        }
        public IActionResult MisFacturas()
        {
            return View();
        }
        public IActionResult Medicos()
        {
            return View();
        }


        //PARA LA PARTE DE MI SALUD DE SECRETARIO
        public IActionResult CitasPersonales()
        {
            return View("~/Views/Secretario/MiSalud/CitasPersonales.cshtml");
        }
        public IActionResult CrearCitasPersonales()
        {
            return View("~/Views/Secretario/MiSalud/CrearCitasPersonales.cshtml");
        }
        public IActionResult DatosPersonales()
        {
            return View("~/Views/Secretario/MiSalud/DatosPersonales.cshtml");
        }
        public IActionResult ExpedientePersonal()
        {
            return View("~/Views/Secretario/MiSalud/ExpedientePersonal.cshtml");
        }
        public IActionResult EncuestaServicio()
        {
            return View("~/Views/Secretario/MiSalud/EncuestaServicio.cshtml");
        }

        //Facturacion
        public IActionResult Facturacion()
        {
            return View();
        }

        // POST: /Facturacion/GenerarFactura
        [HttpPost]
        public IActionResult GenerarFactura(FormCollection form)
        {
            // Obtener los valores del formulario
            string fecha = form["fecha"];
            string nombre = form["nombre"];
            string identificacion = form["identificacion"];
            string especialidad = form["especialidad"];
            string laboratorio = form["laboratorio"];
            string medico = form["medico"];
            string precio = form["precio"];
            string impuesto = form["impuesto"];

            // Realizar cálculos, por ejemplo, calcular el IVA y el monto final
            decimal precioConsulta = decimal.Parse(precio);
            decimal impuestoServicio = decimal.Parse(impuesto);
            decimal iva = precioConsulta * 0.16m; // Suponiendo un 16% de IVA
            decimal montoFinal = precioConsulta + impuestoServicio + iva;

            // Aquí podrías realizar cualquier otra lógica necesaria, como almacenar en una base de datos, etc.

            // Devolver la vista con los datos calculados
            ViewBag.Fecha = fecha;
            ViewBag.Nombre = nombre;
            ViewBag.Identificacion = identificacion;
            ViewBag.Especialidad = especialidad;
            ViewBag.Laboratorio = laboratorio;
            ViewBag.Medico = medico;
            ViewBag.PrecioConsulta = precioConsulta;
            ViewBag.ImpuestoServicio = impuestoServicio;
            ViewBag.IVA = iva;
            ViewBag.MontoFinal = montoFinal;

            return View("FacturaGenerada");
        }
        //Ver pacientes
        public IActionResult VerPacientes()
        {
            return View();
        }
    }
}

