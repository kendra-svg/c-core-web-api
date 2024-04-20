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
    public class LaboratorioCrud: CrudFactory
    {
        LaboratorioMapper laboratorioMapper;

        public LaboratorioCrud()
        {
            laboratorioMapper = new LaboratorioMapper();
            dao = SqlDao.GetInstance();
        }

        public override void Create(BaseClass dto)
        {
            throw new NotImplementedException();
        }
        public  void CreateLab(BaseClass dto, int idUsuario)
        {
            SqlOperation operation = laboratorioMapper.GetCreateStatementLab(dto,idUsuario);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = laboratorioMapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = laboratorioMapper.BuildObjects(dataResults);
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

        public override void Update(BaseClass dto)
        {
            throw new NotImplementedException();
        }


        public  List<T> RetrieveAllByUserId<T>(int id)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = laboratorioMapper.GetRetrieveByUserId(id);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = laboratorioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }

            }
            return resultList;
        }

        public void DeleteLabById(int labID)
        {
            SqlOperation operation = laboratorioMapper.DeleteByLabId(labID);
            dao.ExecuteStoredProcedure(operation);
        }
    }
}
