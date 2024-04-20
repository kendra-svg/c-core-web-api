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
    public class LaboratorioMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Laboratorio lab = new Laboratorio();
            lab.Id = int.Parse(row["id_laboratorio"].ToString());

            lab.NombreExamen = row["nombre_examen"].ToString();
            lab.Comentario = row["comentarios"].ToString();
            lab.Foto = row["foto"].ToString();
            lab.Fecha = DateTime.Parse(row["fecha"].ToString());

            
            return lab;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var lab = BuildObject(row);
                results.Add(lab);
            }
            return results;
        }
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetCreateStatementLab(BaseClass dto,int idUsuario)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_laboratorio";

            Laboratorio lab = (Laboratorio)dto;

            operation.AddIntegerParam("idlaboratorio", lab.Id);
            operation.AddVarCharParam("nombreexamen", lab.NombreExamen);
            operation.AddVarCharParam("comentarios", lab.Comentario);
            operation.AddVarCharParam("foto", lab.Foto);
            operation.AddDatetimeParam("fecha", lab.Fecha);


            operation.AddIntegerParam("idusuario", idUsuario);
            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_LABORATORIOS";
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
        
        public SqlOperation GetRetrieveByUserId(int id)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_LAB_BY_USER_ID";

            operation.AddIntegerParam("id_usuario", id);

            return operation;
        }

        public SqlOperation DeleteByLabId(int labId)
        {
            SqlOperation operation = new SqlOperation();

            //Deberia de  modificarse  el SP  y tiene que eliminarse primero el que existe dentro registro_citas 

            operation.ProcedureName = "SP_DELETE_LAB_BY_ID";

            operation.AddIntegerParam("id_lab", labId);

            return operation;
        }

    }
}
