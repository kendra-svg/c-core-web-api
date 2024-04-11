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
    public class ExpedienteMapper : IObjectMapper, ICrudStatements
    {
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_expedientes";

            Expediente app = (Expediente)dto;

            operation.AddIntegerParam("idexpediente", app.Id);
            operation.AddVarCharParam("historialesclinicos", app.AntecedentesPersonales);
            operation.AddVarCharParam("historialesclinicos", app.TratamietosFarmacologicos);
            operation.AddVarCharParam("historialesclinicos", app.AntecedentesFamiliades);
            operation.AddVarCharParam("historialesclinicos", app.EnfermedadesCronicas);
            operation.AddVarCharParam("historialesclinicos", app.MalosHabitos);
            operation.AddVarCharParam("historialesclinicos", app.RiesgosCardiovasculares);
            operation.AddVarCharParam("historialesclinicos", app.Diabetes);
            operation.AddVarCharParam("historialesclinicos", app.EnfermedadesCongenitas);
            operation.AddVarCharParam("historialesclinicos", app.AntecedentesCancer);
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

        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            throw new NotImplementedException();
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            throw new NotImplementedException();
        }

    }
}
