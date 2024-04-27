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
    public class CitaCrud : CrudFactory
    {
        CitaMapper citaMapper;

        public CitaCrud()
        {
            citaMapper = new CitaMapper();
            dao = SqlDao.GetInstance();
        }

        public override void Create(BaseClass dto)
        {
            SqlOperation operation = citaMapper.GetCreateStatement(dto);
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

        public override T RetrieveById<T>(int id)
        {
            throw new NotImplementedException();
        }

        public override void Update(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public List<T> RetrieveAllByUserId<T>(int id)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = citaMapper.RetrieveAllByUserId(id);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = citaMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }

            }
            return resultList;
        }
    }
}
