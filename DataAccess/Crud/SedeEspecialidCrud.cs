using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Crud;
using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using DTO;

namespace DataAccess.Crud
{
    public class SedeEspecialidCrud : CrudFactory
    {
        SedeEspecialidadMapper sedeespemapper;
        public SedeEspecialidCrud(): base()
        {
            sedeespemapper = new SedeEspecialidadMapper();
            dao = SqlDao.GetInstance();
        }
        public override void Create(BaseClass dto)
        {
            SqlOperation operation = sedeespemapper.GetCreateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }

        public void InsertEspecialidadesYFuncionariosIntoSedes(int id, int idSede, int idEspecialidad, int idUsuario)
        {
            SqlOperation operation = sedeespemapper.GetInsertEspecialidadesYFuncionariosIntoSedes(id, idSede, idEspecialidad, idUsuario);
            dao.ExecuteStoredProcedure(operation);
        }
        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public void DeleteBySedeEspecId(int id)
        {
            SqlOperation operation = sedeespemapper.DeleteBySedeEspecId(id);
            dao.ExecuteStoredProcedure(operation);
        }

        public void DeleteUserFromSedeEspecialidad(int id)
        {
            SqlOperation operation = sedeespemapper.GetDeleteUserFromSedeEspecialidad(id);
            dao.ExecuteStoredProcedure(operation);
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = sedeespemapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = sedeespemapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveAllSedesEspec<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = sedeespemapper.GetRetrieveAllSedeEspecNormal();
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);
            if (dataResults.Count > 0)
            {
                var dtoList = sedeespemapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public override T RetrieveById<T>(int id)
        {
            SqlOperation operation = sedeespemapper.GetRetrieveByIdStatementu(id);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoObject = sedeespemapper.BuildObject(dataResults[0]);

                return (T)Convert.ChangeType(dtoObject, typeof(T));
            }
            return default(T);
        }

        public List<T> RetrieveEspecialidadBySedeId <T>(int id_sede)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = sedeespemapper.GetRetrieveEspecialidadesBySedeId(id_sede);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);
            if (dataResults.Count > 0)
            {
                var dtoList = sedeespemapper.BuildObjects(dataResults);
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


        public  T RetrieveBySedeIdAndEspecialidadId<T>(int idSede, int idEspecialidad)
        {
            SqlOperation operation = sedeespemapper.GetRetrieveBySedeIdAndEspecialidadId(idSede, idEspecialidad);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoObject = sedeespemapper.BuildObject(dataResults[0]);

                return (T)Convert.ChangeType(dtoObject, typeof(T));
            }
            return default(T);
        }
        public T RetrieveBySedeIdAndEspecialidadIdAndUserId<T>(int idSede, int idEspecialidad, int idUsuario)
        {
            SqlOperation operation = sedeespemapper.GetRetrieveBySedeIdAndEspecialidadIdAndUsuarioId(idSede, idEspecialidad,idUsuario);
            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoObject = sedeespemapper.BuildObject(dataResults[0]);

                return (T)Convert.ChangeType(dtoObject, typeof(T));
            }
            return default(T);
        }




    }
}
