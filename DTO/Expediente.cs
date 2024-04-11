using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Expediente : BaseClass
    {
        public string AntecedentesPersonales { set; get; }
        public string TratamietosFarmacologicos { set; get; }
        public string AntecedentesFamiliades { set; get; }
        public string EnfermedadesCronicas { set; get; }
        public string MalosHabitos { set; get; }
        public string RiesgosCardiovasculares { set; get; }
        public string Diabetes { set; get; }
        public string EnfermedadesCongenitas { set; get; }
        public string AntecedentesCancer { set; get; }
        //public int registro_citas_id_citas { set; get; }
        //public int usuarios_id_usuario { set; get; }
        //public int recetas_id_receta { set; get; }
    }
}