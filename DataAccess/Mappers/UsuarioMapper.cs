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
    public class UsuarioMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {


            UsuarioBase user = new UsuarioBase();

            user.Id = int.Parse(row["id_usuario"].ToString());
            user.Nombre = row["nombres"].ToString();
            user.Apellidos = row["apellidos"].ToString();
            user.Correo = row["correos"].ToString();
            user.Telefono = row["telefonos"].ToString();
            user.Sexo = row["sexos"].ToString();
            user.FechaNacimiento = DateTime.Parse(row["fechas_nacimiento"].ToString());
            user.Edad = int.Parse(row["edades"].ToString());
            user.Direccion = row["direcciones"].ToString();
            user.Foto = row["fotos"].ToString();
            user.Morosidad = int.Parse(row["MOROSIDADES"].ToString());
            user.Contrasenna = row["contrasennas"].ToString();
            user.Ubicaciones = row["Ubicaciones"].ToString();
            user.Identificacion = row["indentificaciones"].ToString();

            return user;
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
            operation.ProcedureName = "SP_INSERT_usuarios";

            UsuarioBase user = (UsuarioBase)dto;

            operation.AddIntegerParam("idusuario", user.Id);
            operation.AddVarCharParam("nombres", user.Nombre);
            operation.AddVarCharParam("apellidos", user.Apellidos);
            operation.AddVarCharParam("telefonos", user.Telefono);
            operation.AddVarCharParam("correos", user.Correo);
            operation.AddVarCharParam("sexos", user .Sexo);
            operation.AddDatetimeParam("fechasnacimiento", user.FechaNacimiento);
            operation.AddIntegerParam("edades", user.Edad);
            operation.AddVarCharParam("direcciones", user.Direccion);
            operation.AddVarCharParam("fotos", user.Foto);
            operation.AddVarCharParam("contrasenna", user.Contrasenna);
            operation.AddVarCharParam("indentificaciones", user.Identificacion);
            operation.AddVarCharParam("ubicaciones", user.Ubicaciones);
            operation.AddIntegerParam("morosidades", user.Morosidad);
            //operation.AddVarCharParam("expedientesid", app.Expedientes);

            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_USERS";
            return operation;
        }

        public SqlOperation GetRetrieveByCredentialsStatement(string correo, string contrasenna)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_VERIFICAR_USUARIO";
            operation.AddVarCharParam("@Correo", correo);
            operation.AddVarCharParam("@Contrasenna", contrasenna);
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
