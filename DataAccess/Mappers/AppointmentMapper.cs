
using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

//namespace DataAccess.Mappers
//{
//    public class AppointmentMapper : ICrudStatements, IObjectMapper
//    {
//        public SqlOperation GetCreateStatement(BaseClass dto)
//        {
//            SqlOperation operation = new SqlOperation();
//            operation.ProcedureName = "";//aqui tiene que ir el nombre exacto del procedure
//            /*
//             * Appointment app = (Appointment)dto;
//             * //agregamos los parametros que necesita el SP
//             *                          "BaseDatos"         "DTO"
//             * operation.AddIntegerParam("patientID", app.PatientId);
//             *return operation;
//             */
          
//        }
//        public SqlOperation GetDeleteStatement(BaseClass dto)
//        {
//        }

//        public SqlOperation GetRetrieveAllStatement()
//        {
//            throw new NotImplementedException();
//        }

//        public SqlOperation GetRetrieveByIdStatement(int id)
//        {
//            throw new NotImplementedException();
//        }

//        public SqlOperation GetUpdateStatement(BaseClass dto)
//        {
//            throw new NotImplementedException();
//        }
//    }
//}
