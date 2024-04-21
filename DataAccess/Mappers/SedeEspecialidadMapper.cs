using DataAccess.Crud;
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
    public class SedeEspecialidadMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
    {
        SedeEspecialidad sedeespe = new SedeEspecialidad();
        sedeespe.Id = int.Parse(row["sede_especialidad"].ToString());
        sedeespe.IdSede = int.Parse(row["sedes_id_sedes"].ToString());
        sedeespe.IdUsuario = int.Parse(row["especialidades_id_especialidades"].ToString());
        sedeespe.IdEspecialidad = int.Parse(row["usuarios_id_usuario"].ToString());

        return sedeespe;
    }

    public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
    {
        List<BaseClass> results = new List<BaseClass>();
        foreach (var row in rowList)
        {
            var sedeespe = BuildObject(row);
            results.Add(sedeespe);
        }
        return results;
    }

    public SqlOperation GetCreateStatement(BaseClass dto)
    {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_ESPECIALIDADES_INTO_SEDES";

            SedeEspecialidad app = (SedeEspecialidad)dto;

            operation.AddIntegerParam("id_sede_especialidad", app.Id);
            operation.AddIntegerParam("id_sedes", app.IdSede);
            operation.AddIntegerParam("id_especialidad", app.IdEspecialidad);
            operation.AddIntegerParam("id_usuario", app.IdUsuario);
           
            return operation;
        }

    public SqlOperation GetDeleteStatement(BaseClass dto)
    {
        throw new NotImplementedException();
    }

    public SqlOperation GetRetrieveAllStatement()
    {
        SqlOperation operation = new SqlOperation();
        operation.ProcedureName = "SP_GET_SEDEESPECIALIDAD";
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
