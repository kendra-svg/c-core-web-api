using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Sede
    {
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public Ubicacion Ubicacion { get; set; }
        public Canton Canton { get; set; }
        public Provincia Provincia { get; set; }
        public Distrito Distrito { get; set; }
        public string Direccion { get; set; }
        public byte[] Foto { get; set; }
        public int IdSede { get; set; }

        public string IdUbicacion { get; set; } //Vendria a ser el ubicaciones_id_coordenadas del diagrama de la base de datos
        public string IdCanton { get; set; } //Vendria a ser el cantones_id_cantones del diagrama de la base de datos
        public string IdProvincia { get; set; } //Vendria a ser el provincias_id_provincias del diagrama de la base de datos
        public string IdDistrito { get; set; } //Vendria a ser el distritos_id_distritos del diagrama de la base de datos

    }
}
