using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;
using DTO.External;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Crud
{
    public class SedeCrud : CrudFactory
    {
        SedeMapper sedemapper;

        public SedeCrud() : base() 
        {
            sedemapper = new SedeMapper();
            dao = SqlDao.GetInstance();
        }
        public override void Create(BaseClass dto)
        {
            SqlOperation operation = sedemapper.GetCreateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = sedemapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);
           
            if(dataResults.Count > 0)
            {
                var dtoList = sedemapper.BuildObjects(dataResults);
                foreach(var dto in dtoList) 
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveByIdI<T>(int id)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = sedemapper.GetRetrieveByID(id);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);
            if(dataResults.Count > 0)
            {
                var dtoList = sedemapper.BuildObjects(dataResults);
                foreach(var dto in dtoList)
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

        public void UpdateSede(int id, string nombre, string descripcion, DateTime date, string direccion, string provincia, string canton, string distrito, string ubicaciones) 
        {
            SqlOperation operation = sedemapper.UpdateSede(id, nombre, descripcion, date, direccion, provincia, canton, distrito, ubicaciones);
            dao.ExecuteStoredProcedure(operation);
        }
    }
}
