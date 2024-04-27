using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mappers
{
    public class FacturaMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Facturas fact = new Facturas();

            fact.Id = int.Parse(row["id_factura"].ToString());
            fact.FechaPago = DateTime.Parse(row["fecha_pago"].ToString());
            fact.Estado = row["estado"].ToString();
            fact.MontoFinal = int.Parse(row["monto_final"].ToString());
            fact.IdCita = int.Parse(row["id_cita"].ToString());

            return fact;

        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        { 
                List<BaseClass> results = new List<BaseClass>();

            foreach (var row in rowList)
            {
                var fact = BuildObject(row);
                results.Add(fact);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "INSERT_facturas";
            Facturas fact = (Facturas)dto;
            operation.AddIntegerParam("id_factura", fact.Id);
            operation.AddIntegerParam("id_cita", fact.IdCita);

            return operation;

        }

        public SqlOperation GetDoctorAndEspecialidadByFacturaId(int id_factura)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_DOCTOR_AND_SPECIALTY_BY_FACTURA_ID";
            operation.AddIntegerParam("id_factura", id_factura);

            return operation;
        }


        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_FACTURAS";
            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveFacturasByUserId(int id_usuario)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_FACTURAS_BY_USERID";
            operation.AddIntegerParam("id_usuario", id_usuario);

            return operation;
        }

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }
    }
}
