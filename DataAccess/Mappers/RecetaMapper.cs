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
    //listo
    public class RecetaMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Receta rec = new Receta();
            rec.Id = int.Parse(row["id_receta"].ToString());
            rec.FechaEmision = DateTime.Parse(row["fecha_emision"].ToString());
            rec.DosisRecomendada = row["dosis_recomendada"].ToString();
            rec.RecomendacionAdicional = row["recomendaciones_adicionales"].ToString();
            rec.Foto = row["receta_foto"].ToString();
            rec.NombreMedicamento = row["nombre_medicamento"].ToString();
            return rec;
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
        //create
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_RECETAS";

            Receta rec = (Receta)dto;
            //lo rojo tiene que coincidir con los @ parametros de la BD. Lo blanco son los atributos del DTO de recetas
            operation.AddIntegerParam("id_receta", rec.Id);
            operation.AddDatetimeParam("fecha_emision", rec.FechaEmision);
            operation.AddVarCharParam("dosis_recomendada", rec.DosisRecomendada);
            operation.AddVarCharParam("recomendaciones_adicionales", rec.RecomendacionAdicional);
            operation.AddVarCharParam("receta_foto", rec.Foto);
            operation.AddVarCharParam("nombre_medicamento", rec.NombreMedicamento);

            return operation;
        }
        //Get all
        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_RECETAS";
            return operation;
        }
        //ById
        public SqlOperation GetRetrieveById(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_RECETA_BY_ID";
            operation.AddIntegerParam("idreceta", id);
            return operation;
        }

        //Update
        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_UPDATE_RECETAS"; // Asegúrate de que esto no sea "SP_GET_ALL_RECETAS"

            Receta rec = (Receta)dto;
            operation.AddIntegerParam("id_receta", rec.Id);
            operation.AddDatetimeParam("fecha_emision", rec.FechaEmision);
            operation.AddVarCharParam("dosis_recomendada", rec.DosisRecomendada);
            operation.AddVarCharParam("recomendaciones_adicionales", rec.RecomendacionAdicional);
            operation.AddVarCharParam("receta_foto", rec.Foto);
            operation.AddVarCharParam("nombre_medicamento", rec.NombreMedicamento);

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
    }
}
