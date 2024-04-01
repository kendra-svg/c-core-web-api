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
    public class UsuarioMapper : ICrudStatements
    {
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = " SP_INSERT_usuarios";
            UsuarioBase app = (UsuarioBase)dto;
            operation.AddVarCharParam("nombres", app.Nombre);
            operation.AddVarCharParam("apellidos", app.Apellidos);
            operation.AddVarCharParam("telefonos", app.Telefono);
            operation.AddVarCharParam("correos", app.Correo);
            operation.AddVarCharParam("sexos", app.Sexo);
            operation.AddDatetimeParam("fehcasnacimiento", app.FechaNacimiento);
            operation.AddIntegerParam("edades", app.Edad);
            operation.AddVarCharParam("direcciones", app.Direccion);
            //operation.AddVarCharParam("fotos", app.Foto);
            operation.AddVarCharParam("contrasenna", app.Contrasenna);
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
