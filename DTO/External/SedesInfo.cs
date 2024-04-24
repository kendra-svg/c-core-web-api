using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.Marshalling;
using System.Text;
using System.Threading.Tasks;
using System.Xml;

namespace DTO.External
{
    public class SedesInfo
    {
        public SedesInfo() {
            UniqueId = 0;
        }
        public int UniqueId { get; set; }
        public string nombre { get; set; }
        public string descripcion { get; set; }
        public DateTime FechaCreacion { get; set; }
        public string ubicacion { get; set; }
        public string canton {  get; set; }
        public string provincia { get; set;}
        public string distrito { get; set; }
        public string  direccion { get; set; }
        public string foto { get; set; }
    }

}
