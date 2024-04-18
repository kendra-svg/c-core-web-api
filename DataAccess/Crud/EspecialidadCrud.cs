using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mappers;

public class EspecialidadCrud: CrudFactory
{
    EspecialidadMapper especialidadMapper;

    public EspecialidadCrud()
    {
        especialidadMapper = new EspecialidadMapper();
        dao = SqlDao.GetInstance();
    }

    public override void Create (BaseClass dto)
    {
        SqlOperation operation = especialidadMapper.GetCreateStatement(dto);
        dao.ExecuteStoredProcedure(operation);
    }

    public override void Delete(BaseClass dto)
    {
        throw new NotImplementedException();
    }

    public override List<T> RetrieveAll<T>()
    {
        List<T> resultList = new List<T>();
        SqlOperation operation = especialidadMapper.GetRetrieveAllStatement();

        List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

        if (dataResults.Count > 0)
        {
            var dtoList = especialidadMapper.BuildObjects(dataResults);
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
        SqlOperation operation = especialidadMapper.GetUpdateStatement(dto);
        dao.ExecuteStoredProcedure(operation);
    }
}
