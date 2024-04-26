using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class ExpedienteReceta : BaseClass
    {
        public ExpedienteReceta() 
        { 
            this.ExpedienteList = new List<Expediente>();
            this.RecetaList = new List<Receta>();
            this.usuarioBases = new List<UsuarioBase>();
        }
        public int idExpediente {  get; set; }
        public int idReceta {  set; get; }
        public List<Expediente> ExpedienteList { get; set; }
        public List<UsuarioBase> usuarioBases { get; set; }
        public List<Receta> RecetaList { get; set;}
    }
}
