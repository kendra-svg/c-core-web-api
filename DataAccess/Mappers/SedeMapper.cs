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
    public class SedeMapper : ICrudStatements
    {
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_sedes";

            Sede app = (Sede)dto;

            operation.AddIntegerParam("idsedes", app.Id);
            operation.AddVarCharParam("nombresedes", app.Nombre);
            operation.AddVarCharParam("descripciones", app.Descripcion);
            operation.AddDatetimeParam("fecha_creacion", app.FechaCreacion);
            operation.AddVarCharParam("ubicaciones", app.Ubicacion);
            operation.AddVarCharParam("provincias", app.Provincia);
            operation.AddVarCharParam("cantones", app.Canton);
            operation.AddVarCharParam("distritos", app.Distrito);
            operation.AddVarCharParam("direcciones", app.Direccion);
            operation.AddVarCharParam("fotos", app.Foto);
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
    }
}
