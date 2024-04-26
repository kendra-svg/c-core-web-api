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
    internal class EspecialidadMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Especialidad espec = new Especialidad();
            espec.Id = int.Parse(row["id_especialidades"].ToString());
            espec.Nombre = row["nombre"].ToString();
            espec.Costo = int.Parse (row["costo"].ToString());
            espec.IVA = int.Parse (row["IVA"].ToString());
            //espec.IdSede = int.Parse(row["id_sede"].ToString());

            return espec;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var espec = BuildObject(row);
                results.Add(espec);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_ESPECIALIDAD";

            Especialidad espec = (Especialidad)dto;

            operation.AddIntegerParam("ID_ESPECIALIDAD", espec.Id);
            operation.AddVarCharParam("NOMBRE", espec.Nombre);
            operation.AddIntegerParam("COSTO", espec.Costo);
            operation.AddIntegerParam("IVA", espec.IVA);

            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_ESPECIALIDAD";
            return operation;

        }

        public SqlOperation GetRetrieveById(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ESPECIALIDAD_BY_ID";

           

            operation.AddIntegerParam("idespecialidad", id);
            return operation;
        }

        public SqlOperation GetEspecById (int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ESPEC_BY_ID";

            operation.AddIntegerParam("idespec", id);
            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        } 



        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_UPDATE_ESPECIALIDAD";

            Especialidad espec = (Especialidad)dto;

            operation.AddIntegerParam("ID_ESPECIALIDAD", espec.Id);
            operation.AddVarCharParam("NOMBRE", espec.Nombre);
            operation.AddIntegerParam("COSTO", espec.Costo);
            operation.AddIntegerParam("IVA", espec.IVA);

            return operation;
        }
        public SqlOperation UpdateEspecialidad(int id, int costo, int iva)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_UPDATE_ESPECIALIDAD";
            operation.AddIntegerParam("ID_ESPECIALIDAD", id);
            operation.AddIntegerParam("COSTO", costo);
            operation.AddIntegerParam("IVA", iva);
            return operation;
        }
    }
}
