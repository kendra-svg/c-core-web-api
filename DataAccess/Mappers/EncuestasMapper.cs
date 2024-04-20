//using DataAccess.DAO;
//using DataAccess.Mappers.Interfaces;
//using DTO;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace DataAccess.Mappers
//{
//    public class EncuestasMapper : IObjectMapper, ICrudStatements
//    {
//        public BaseClass BuildObject(Dictionary<string, object> row)
//        {
//            Encuestas enc = new Encuestas();
//            enc.Id = int.Parse(row["id_encuesta"].ToString());
//            enc.InteresGenuino = DateTime.Parse(row["fecha_emision"].ToString());
//            enc.Experiencia = row["dosis_recomendada"].ToString();
//            enc.AmabilidadCortesia = row["recomendaciones_adicionales"].ToString();
//            enc.ComentariosAdicionales = row["receta_foto"].ToString();

//            return enc;
//        }



//    }
//}
