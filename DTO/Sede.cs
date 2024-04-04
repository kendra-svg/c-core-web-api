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

        public string Ubicacion { get; set; }

        public string Canton { get; set; }

        public string Provincia { get; set; }

        public string Distrito { get; set; }

        public string Direccion { get; set; }

        public byte[] Foto { get; set; }

        public int IdSede { get; set; }

        public string IdUbicacion { get; set; } //Vendria a ser el ubicaciones_id_coordenadas del diagrama de la base de datos
    }
}
