using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Globalization;
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
            user.Estado = int.Parse(row["estado"].ToString());
            user.Rol = row["roles"].ToString();
            user.Contrasenna = row["contrasennas"].ToString();
            user.Ubicaciones = row["Ubicaciones"].ToString();
            user.Identificacion = row["indentificaciones"].ToString();
            user.OTP = int.Parse(row["otp"].ToString());
            user.Verificacion = row["verificacion"].ToString();
            //user.Timeout = DateTime.Parse(row["timeout"].ToString());
            user.Timeout = DateTime.Parse(row["timeout"].ToString());/* == "" ? DateTime.MinValue : DateTime.Parse(row["timeout"].ToString())*/




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
            operation.AddVarCharParam("identificaciones", user.Identificacion);
            operation.AddVarCharParam("ubicaciones", user.Ubicaciones);
            operation.AddVarCharParam("roles", user.Rol);
            operation.AddIntegerParam("estado", user.Estado);
            operation.AddIntegerParam("otp", user.OTP);
            operation.AddVarCharParam("verificacion", user.Verificacion);
            operation.AddDatetimeParam("timeout", user.Timeout);
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
            operation.ProcedureName = "SP_GET_PPATIENTS";
            return operation;
        }

        public SqlOperation GetRetrieveAllUsers()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_USERS";
            return operation;
        }

        public SqlOperation GetRetrieveAllFuncionarios()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_FUNCIONARIOS";
            return operation;
        }

        public SqlOperation GetRetrieveCredentials(string correo, string contrasenna)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_VERIFICAR_USUARIO";
            operation.AddVarCharParam("Correo", correo);
            operation.AddVarCharParam("Contrasenna", contrasenna);
            return operation;
        }


        public SqlOperation GetRetrieveByCorreo(string correo)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_USER_BY_CORREO";
            operation.AddVarCharParam("Correo", correo);
            return operation;
        } 
        
        public SqlOperation GetRetrieveOTPByEmail(string correo)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_OTP_BY_USER_EMAIL";
            operation.AddVarCharParam("Correo", correo);
            return operation;
        }

        public SqlOperation GetRetrieveUserByOtpAndEmail (string correo, int otp)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_USER_BY_OTP_AND_EMAIL";
            operation.AddVarCharParam("Correo", correo);
            operation.AddIntegerParam("OTP", otp);
            return operation;
        }

        public SqlOperation GetRetrieveUsersBySedeId(int id_sede)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_USERS_BY_SEDE_ID";
            operation.AddIntegerParam("id_sede", id_sede);
            return operation;
        }

        public SqlOperation GetRetrieveUserByUserId(int id_usuario)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_USER_BY_ID";
            operation.AddIntegerParam("idusuario", id_usuario);
            return operation;
        }

        public SqlOperation GetRetrieveAllDoctors ()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_DOCTORS";
            return operation;
        }

        public SqlOperation GetRetrieveAllEnfermeros()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_ENFERMEROS";
            return operation;
        }

        public SqlOperation GetRetrieveAllSecretarios()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_SECRETARIOS";
            return operation;
        }

        public SqlOperation GetRetrieveAllPacientes()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_PACIENTES";
            return operation;
        }

        public SqlOperation GetRetrieveAllAdministradores()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_ADMINISTRADORES";
            return operation;
        }


        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetUpdateOtpAndTimestamp(string correo)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_PUT_OTP_TIMESTAMP";
            operation.AddVarCharParam("Correo", correo);

            return operation;
        }

        public SqlOperation GetUpdateAccountVerification(string correo)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_UPDATE_USER_ACCOUNT_VERIFICATION";
            operation.AddVarCharParam("Correo", correo);
            return operation;
        }

        public SqlOperation GetUpdateUserPassword(string correo, string nuevaClave)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_PUT_PASSWORD";
            operation.AddVarCharParam("Correo", correo);
            operation.AddVarCharParam("nuevaClave", nuevaClave);
            return operation;
        }

        public SqlOperation GetUpdateUserRol(string correo, string nuevoRol)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_UPDATE_ROL";
            operation.AddVarCharParam("Correo", correo);
            operation.AddVarCharParam("nuevoRol", nuevoRol);
            return operation;
        }

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }


        
    }
}
