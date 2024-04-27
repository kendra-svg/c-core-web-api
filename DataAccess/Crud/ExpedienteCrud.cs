using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Crud
{
    public class ExpedienteCrud : CrudFactory
    {
        ExpedienteMapper  mapper;

        public ExpedienteCrud() : base() 
        {
            mapper = new ExpedienteMapper();
            dao = SqlDao.GetInstance();
        }
        
        public override void Create(BaseClass dto)
        {
            SqlOperation operation = mapper.GetCreateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = mapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = mapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public override T RetrieveById<T>(int id)
        {
            SqlOperation operation = mapper.GetRetrieveByIdStatement(id);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoObject = mapper.BuildObject(dataResults[0]);

                return (T)Convert.ChangeType(dtoObject, typeof(T));
            }
            return default(T);
        }

        public override void Update(BaseClass dto)
        {
            SqlOperation operation = mapper.GetUpdateStatement(dto);
           
            dao.ExecuteStoredProcedure(operation);
        }
    }
}
