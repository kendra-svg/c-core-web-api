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
    public class UsuarioMapper : IObjectMapper , ICrudStatements
    {
        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_usuarios";

            UsuarioBase app = (UsuarioBase)dto;

            operation.AddIntegerParam("idusuario", app.Id);
            operation.AddVarCharParam("nombres", app.Nombre);
            operation.AddVarCharParam("apellidos", app.Apellidos);
            operation.AddVarCharParam("telefonos", app.Telefono);
            operation.AddVarCharParam("correos", app.Correo);
            operation.AddVarCharParam("sexos", app.Sexo);
            operation.AddDatetimeParam("fechasnacimiento", app.FechaNacimiento);
            operation.AddIntegerParam("edades", app.Edad);
            operation.AddVarCharParam("direcciones", app.Direccion);
            operation.AddVarCharParam("fotos", app.Foto);
            operation.AddVarCharParam("contrasenna", app.Contrasenna);
            operation.AddVarCharParam("identificaciones", app.Identificacion);
            operation.AddVarCharParam("ubicaciones", app.Ubicaciones);
            operation.AddIntegerParam("morosidades", app.Morosidad);
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
        //public BaseClass BuildObject(Dictionary<string, object> row)
        //{
        //    UsuarioBase pat = new UsuarioBase();
        //    pat.Id = int.Parse(row["id_usuario"].ToString());
        //    pat.Identificacion = row["indentificaciones"].ToString();
        //    pat.Nombre = row["nombres"].ToString();
        //    pat.Apellidos = row["apellidos"].ToString();
        //    pat.Telefono = row["telefonos"].ToString();
        //    pat.Correo = row["correos"].ToString();
        //    pat.Sexo = row["sexos"].ToString();
        //    pat.FechaNacimiento = DateTime.Parse(["fechas_nacimiento"].ToString());
        //    pat.Edad = int.Parse(row["edades"].ToString());
        //    pat.Direccion = row["direcciones"].ToString();
        //    pat.Foto = row["fotos"].ToString();
        //    pat.Contrasenna = row["contrasennas"].ToString();
        //    pat.Morosidad = int.Parse(row["MOROSIDADES"].ToString());
        //    pat.Ubicaciones = row["contrasennas"].ToString();
        //    // pat.Expedientes = int.Parse(row["expediente_id_expedientes"].ToString());
        //    return pat;
        //}
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            
           
            UsuarioBase app = new UsuarioBase();

            app.Id = int.Parse(row["id_usuario"].ToString());
            app.Nombre = row["nombres"].ToString();
            app.Apellidos = row["apellidos"].ToString();
            app.Correo = row["correos"].ToString();
            app.Telefono = row["telefonos"].ToString();
            app.Sexo = row["sexos"].ToString();
            app.FechaNacimiento = DateTime.Parse(row["fechas_nacimiento"].ToString());
            app.Edad = int.Parse(row["edades"].ToString());
            app.Direccion = row["direcciones"].ToString();
            app.Foto = row["foto"].ToString();
            app.Morosidad = int.Parse(row["MOROSIDADES"].ToString());
            app.Contrasenna = row["contrasennas"].ToString();
            app.Ubicaciones = row["Ubicaciones"].ToString();
            app.Identificacion = row["indentificaciones"].ToString();
            
            return app;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> listRows)
        {
            var lsResult = new List<BaseClass>();
            
            foreach(var objRow in listRows) 
            {
                var object_row = BuildObject(objRow);
                lsResult.Add(object_row);
            }
            return lsResult;
                   
        }
    }
}
