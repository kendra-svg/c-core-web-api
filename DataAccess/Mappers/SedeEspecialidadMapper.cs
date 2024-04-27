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
            sedeespe.IdUsuario = int.Parse(row["usuarios_id_usuario"].ToString());
            sedeespe.IdEspecialidad = int.Parse(row["especialidades_id_especialidades"].ToString());

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

            operation.ProcedureName = "INSERT_sede_especialidad";

            SedeEspecialidad app = (SedeEspecialidad)dto;

            operation.AddIntegerParam("idsedeespe", app.Id);
            operation.AddIntegerParam("id_sedes", app.IdSede);
            operation.AddIntegerParam("id_usuarios", app.IdUsuario);
            operation.AddIntegerParam("id_especialidades", app.IdEspecialidad);
           
            return operation;
        }

        public SqlOperation GetInsertEspecialidadesYFuncionariosIntoSedes(int id, int idSede, int idEspecialidad, int idUsuario)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_ESPECIALIDADES_INTO_SEDES";
            operation.AddIntegerParam("id_sede_especialidad", id);
            operation.AddIntegerParam("id_sede", idSede);
            operation.AddIntegerParam("id_especialidad", idEspecialidad);
            operation.AddIntegerParam("id_usuario", idUsuario);
            return operation;
        }


        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetDeleteUserFromSedeEspecialidad(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_DELETE_USER_FROM_SEDE_ESPECIALIDAD";
            operation.AddIntegerParam("id", id);
            return operation;
        }

        public SqlOperation DeleteBySedeEspecId(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_DELETE_SedeEspecialidad_BY_ID";
            operation.AddIntegerParam("Id", id);
            return operation;
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_SEDEESPECIALIDAD";
            return operation;
        }

        public SqlOperation GetRetrieveByIdStatementu(int id)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_Sede_By_ID_usua_espe_sede";

            operation.AddIntegerParam("id", id);

            return operation;
        }
        public SqlOperation GetRetrieveAllSedeEspecNormal()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_SEDEESPECIALIDAD";
            return operation;
        }
        public SqlOperation GetRetrieveEspecialidadesBySedeId(int id_sede)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ESPECIALIDADES_BY_SEDE_ID";
            operation.AddIntegerParam("id_sede", id_sede);
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
        public SqlOperation GetRetrieveBySedeIdAndEspecialidadId(int idSede, int idEspecialidad)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_SEDEESPEC_BY_SEDE_ID_AND_ESPECIALIDAD_ID";
            operation.AddIntegerParam("id_sede", idSede);
            operation.AddIntegerParam("id_especialidad", idEspecialidad);
            return operation;
        }
        public SqlOperation GetRetrieveBySedeIdAndEspecialidadIdAndUsuarioId(int idSede, int idEspecialidad, int idUsuario)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_SEDEESPEC_BY_SEDE_ID_AND_ESPECIALIDAD_ID_AND_USUARIO_ID";
            operation.AddIntegerParam("id_sede", idSede);
            operation.AddIntegerParam("id_especialidad", idEspecialidad);
            operation.AddIntegerParam("id_usuario", idUsuario);
            return operation;
        }



    }
}
