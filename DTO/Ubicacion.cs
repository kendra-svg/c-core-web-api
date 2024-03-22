using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Ubicacion
    {
        public string Coordenadas { get; set; }
        public string Id { get; set; } //Vendria a ser el id_coordenadas del diagrama de la base de datos

        public int IdSedes { get; set; } //Vendria a ser el sedes_id_sedes del diagrama de la base de datos
    }
}
