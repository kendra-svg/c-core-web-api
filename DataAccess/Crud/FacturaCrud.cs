using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;

namespace DataAccess.Crud
{
    public class FacturaCrud : CrudFactory
    {
        FacturaMapper facturaMapper;

        public FacturaCrud() : base()
        {
            facturaMapper = new FacturaMapper();
            dao = SqlDao.GetInstance();
        }
        public override void Create(BaseClass dto)
        {
            SqlOperation operation = facturaMapper.GetCreateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            throw new NotImplementedException();
        }

        public List<T> RetrieveAllFacturas<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = facturaMapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = facturaMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }

            return resultList;
        }

        public List<T> RetrieveDoctorAndSpecialtyByFacturaId<T>(int id_factura)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = facturaMapper.GetDoctorAndEspecialidadByFacturaId(id_factura);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = facturaMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }

            return resultList;
        }

        public override T RetrieveById<T>(int id)
        {
            throw new NotImplementedException();
        }

        public List<T> RetrieveFacturasByUserId<T>(int id_usuario)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = facturaMapper.GetRetrieveFacturasByUserId(id_usuario);
            
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = facturaMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }

            return resultList;
        }

        public override void Update(BaseClass dto)
        {
            throw new NotImplementedException();
        }
    }
}
