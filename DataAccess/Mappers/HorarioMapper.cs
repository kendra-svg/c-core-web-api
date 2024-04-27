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
    public class HorarioMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Horarios horario = new Horarios();
            horario.Id = int.Parse(row["id_horario"].ToString());
            horario.fecha = DateTime.Parse(row["fecha"].ToString());
            horario.hora = DateTime.Parse(row["hora"].ToString());
            horario.estado = (row["estado"].ToString());
            return horario;
        }


       public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var horario = BuildObject(row);
                results.Add(horario);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
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

        public SqlOperation GetRetrieveByUserId(int id)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_HORARIO_BY_USER_ID";

            operation.AddIntegerParam("id_usuario", id);

            return operation;
        }
    }
}
