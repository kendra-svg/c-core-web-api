using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Expediente : BaseClass
    {
        public Expediente() 
        {
            this.Cita = new List<Cita>();
            this.usuario = new List<UsuarioBase>();
            this.recetas = new List<Receta>();
        }
        public string AntecedentesPersonales { set; get; }
        public string TratamietosFarmacologicos { set; get; }
        public string AntecedentesFamiliades { set; get; }
        public string EnfermedadesCronicas { set; get; }
        public string MalosHabitos { set; get; }
        public string RiesgosCardiovasculares { set; get; }
        public string Diabetes { set; get; }
        public string EnfermedadesCongenitas { set; get; }
        public string AntecedentesCancer { set; get; }
        public List<Cita> Cita { set; get; }
        public List<UsuarioBase> usuario {  set; get; }
        public List<Receta> recetas { set; get; }
    }
}