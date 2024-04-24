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
    internal class CupoMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Cupos cup= new Cupos();
            cup.Id= int.Parse(row["id_cupos_especialidades"].ToString());
            cup.Cantidad = int.Parse(row["cantidad"].ToString());
            cup.Cronometro = int.Parse(row["cronometro"].ToString());
            cup.nombreSede = row["nombre_sede"].ToString();
            cup.nombreEspecialidad = row["nombre_especialidad"].ToString();
            return cup;
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
        public SqlOperation GetCreateStatement(BaseClass dto,int idEspecialidad, int idSede)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_CUPO_POR_ESPECIALIDAD";

            Cupos cup = (Cupos)dto;

            operation.AddIntegerParam("id_cupo", cup.Id);
            operation.AddIntegerParam("cronometro", cup.Cronometro);
            operation.AddIntegerParam("cantidad", cup.Cantidad);
            operation.AddIntegerParam("id_especialidad", idEspecialidad);
            operation.AddIntegerParam("id_sede", idSede);

            return operation;
        }


       public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_DELETE_CUPO_POR_ESPECIALIDAD";

            Cupos cup = (Cupos)dto;

            operation.AddIntegerParam("id_cupo", cup.Id);
            operation.AddIntegerParam("cronometro", cup.Cronometro);
            operation.AddIntegerParam("cantidad", cup.Cantidad);


            return operation;

        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_ALL_CUPOS_ESPECIALIDAD";

            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(int id)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_ALL_CUPOS_ESPECIALIDAD_BY_ID";
            operation.AddIntegerParam("id_cupo",id);

            return operation;

        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }

       

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_UPDATE_CUPO_POR_ESPECIALIDAD";

            Cupos cup = (Cupos)dto;

            operation.AddIntegerParam("id_cupo", cup.Id);
            operation.AddIntegerParam("cantidad", cup.Cantidad);


            return operation;

        }

        
    }
}
