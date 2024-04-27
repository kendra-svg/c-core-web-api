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
    public class CitaMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Cita cita = new Cita();
            cita.Id= int.Parse(row["id_citas"].ToString());
            cita.FechasProgramadas = DateTime.Parse(row["fechas_programadas"].ToString());
            cita.Diagnostico = (row["dignosticos"].ToString());
            cita.NotasEnfermeria= (row["notas_enfermeria"].ToString());
            cita.NotasMedicas= (row["notas_medicas"].ToString());
            cita.Estado = (row["estado"].ToString());
            cita.IdUsuario= int.Parse(row["usuarios_id_usuario"].ToString());
            cita.IdSedeEspecialidad= int.Parse(row["sede_especialidad_sede_especialidad"].ToString());
            //cita.Hora= DateTime.Parse(row["hora"].ToString());
            return cita;
            
            

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
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_CITA";

            Cita cita = (Cita)dto;
            operation.AddIntegerParam("id_cita", cita.Id);
            operation.AddDatetimeParam("fecha", cita.FechasProgramadas);

            operation.AddVarCharParam("diagnostico", cita.Diagnostico);
            operation.AddVarCharParam("notas_enfermeria", cita.NotasEnfermeria);
            operation.AddVarCharParam("notas_medicas", cita.NotasMedicas);
            operation.AddVarCharParam("estado", cita.Estado);
            operation.AddIntegerParam("id_usuario", cita.IdUsuario);
            operation.AddIntegerParam("id_sede_especialidad", cita.IdSedeEspecialidad);
            //operation.AddDatetimeParam("hora", cita.Hora);

            return operation;
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

        public SqlOperation RetrieveAllByUserId(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_CITAS_BY_USER_ID";
            operation.AddIntegerParam("id_user", id);
            return operation;
        }
    }
}
