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
    public class ExpedienteRecetaMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            ExpedienteReceta expedienteReceta = new ExpedienteReceta();
            expedienteReceta.Id = int.Parse(row["id_recetas_expedient"].ToString());
            expedienteReceta.RecetaList = new List<Receta>{
            new Receta{
                NombreMedicamento = row["recetas"].ToString(),
                RecomendacionAdicional = row["rec"].ToString()
            }
            };
            expedienteReceta.usuarioBases = new List<UsuarioBase>{
            new UsuarioBase { Nombre = row["usuarios"].ToString() }
            };
            return expedienteReceta;
        }


        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var e = BuildObject(row);
                results.Add(e);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_expediente_receta";

            ExpedienteReceta app = (ExpedienteReceta)dto;

            operation.AddIntegerParam("id_expediente_receta", app.Id);
            operation.AddIntegerParam("id_expediente", app.idExpediente);
            operation.AddIntegerParam("id_receta", app.idReceta);

            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_Get_all_Expediente_Receta";
            return operation;
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
