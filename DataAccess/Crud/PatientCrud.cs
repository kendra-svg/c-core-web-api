using System;
using DataAccess.DAO;
using dataaccess.mappers;
using DataAccess.CRUD;
using DataAccess.Mappers;
using DTO;

namespace dataaccess.crud
{
    public class Patientcrud : CrudFactory
    {
        PatientMaper patientmaper;


        public Patientcrud() 
        {
            patientmapper = new Patientmapper();
            dao = SqlDao.GetInstance();
        }
        public override void Create(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> list = new List<T>();
            SqlOperation operation = patientmaper.GetretrieveAllStatement();
            List<Dictionary<string, object>> dataResults =  dao.ExecuteStoredProcedureWithQuery(operation);
            if (dataResults.Count>0)
            {
                var dtoOList.Add((T)Convert.ChangeType(dto, typeof(T));
                foreach (var dto in dtoOList)
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

        public override void Update(BaseClass dto)
        {
            throw new NotImplementedException();
        }
    }
}
