using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mappers
{
    public class EncuestasMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Encuestas enc = new Encuestas();
            enc.Id = int.Parse(row["id_encuesta"].ToString());
            enc.InteresGenuino = row["interes_genuino"].ToString();
            enc.Experiencia = row["experiencia"].ToString();
            enc.AmabilidadCortesia = row["amabilidad_cortesia"].ToString();
            enc.ComentariosAdicionales = row["comentarios_adicionales"].ToString();
            return enc;
        }
        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var rec = BuildObject(row);
                results.Add(rec);
            }
            return results;
        }
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_ENCUESTAS";

            Encuestas rec = (Encuestas)dto;
            //lo rojo tiene que coincidir con los @ parametros de la BD. Lo blanco son los atributos del DTO de recetas
            operation.AddIntegerParam("id_encuesta", rec.Id);
            //FK
            operation.AddVarCharParam("interes_genuino", rec.InteresGenuino);
            operation.AddVarCharParam("experiencia", rec.Experiencia);
            operation.AddVarCharParam("amabilidad_cortesia", rec.AmabilidadCortesia);
            operation.AddVarCharParam("comentarios_adicionales", rec.ComentariosAdicionales);

            return operation;
        }
        //Get all
        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ENCUESTAS";
            return operation;
        }
        //ById
        public SqlOperation GetRetrieveById(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ENCUESTAS_BY_ID";
            operation.AddIntegerParam("id_encuesta", id);
            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }
    }
}
