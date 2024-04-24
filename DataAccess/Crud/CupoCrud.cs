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
    public class CupoCrud : CrudFactory
    {
        CupoMapper cupoMapper;
        public CupoCrud()
        {
            cupoMapper = new CupoMapper();
            dao = SqlDao.GetInstance();
        }

        public override void Create(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public void Create(BaseClass dto, int idEspecialidad, int idSede)
        {
            SqlOperation operation = cupoMapper.GetCreateStatement(dto, idEspecialidad,idSede);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            SqlOperation operation = cupoMapper.GetDeleteStatement(dto);
            dao.ExecuteStoredProcedure(operation);

        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = cupoMapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = cupoMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public override T RetrieveById<T>(int id)
        {
            SqlOperation operation = cupoMapper.GetRetrieveByIdStatement(id);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoObject = cupoMapper.BuildObject(dataResults[0]);

                return (T)Convert.ChangeType(dtoObject, typeof(T));
            }
            return default(T);
        }

        

        public override void Update(BaseClass dto)
        {
            SqlOperation operation = cupoMapper.GetUpdateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }
    }
}
