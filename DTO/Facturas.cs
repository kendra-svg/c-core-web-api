using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Facturas : BaseClass
    {
        public DateTime fecha_pago { set; get; }
        public string estado {  set; get; }
        //public int registro_citas_id_citas {  set; get; }
        //public int monto_final monto_final {  set; get; }
    }
}
