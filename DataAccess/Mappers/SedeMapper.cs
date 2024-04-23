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
    public class SedeMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Sede sedes = new Sede();
            sedes.Id = int.Parse(row["id_sedes"].ToString());
            sedes.Nombre = row["nombres_sedes"].ToString();
            sedes.Descripcion = row["descripciones"].ToString();
            sedes.FechaCreacion = DateTime.Parse(row["fechas_creacion"].ToString());
            sedes.Direccion = row["direcciones"].ToString();
            sedes.Provincia = row["provincias"].ToString();
            sedes.Canton = row["cantones"].ToString();
            sedes.Distrito = row["distritos"].ToString();
            sedes.Foto = row["fotos"].ToString();
            sedes.Ubicacion = row["ubicaciones"].ToString();

            return sedes;
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
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_SEDES";
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
        public SqlOperation GetRetrieveByID(int id)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_Sede_By_ID";
            operation.AddIntegerParam("id", id);
            
            return operation;   
        }
        public SqlOperation UpdateSede(int id, string nombre, string descripcion, DateTime date, string direccion, string provincia, string canton, string distrito, string ubicaciones)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName ="SP_UPDATE_SEDE";
            operation.AddIntegerParam("id_sedes",id);
            operation.AddVarCharParam("nombres_sedes", nombre);
            operation.AddVarCharParam("descripciones", descripcion);
            operation.AddDatetimeParam("fechas_creacion", date);
            operation.AddVarCharParam("direcciones", direccion);
            operation.AddVarCharParam("provincias", provincia);
            operation.AddVarCharParam("cantones", canton);
            operation.AddVarCharParam("distritos", distrito);
            operation.AddVarCharParam("ubicaciones", ubicaciones);
            return operation;
        }

    }
}
