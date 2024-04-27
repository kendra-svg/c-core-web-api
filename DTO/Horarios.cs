using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Horarios : BaseClass
    {

        public DateTime fecha {  get; set; }    
        public DateTime hora { get; set; }
        public string estado { get; set; }  

    }
}
