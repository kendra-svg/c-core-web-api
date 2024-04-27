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
    public class UsuarioCrud : CrudFactory
    {
        UsuarioMapper usuarioMapper;
        public UsuarioCrud() : base()
        {
            usuarioMapper = new UsuarioMapper();
            dao = SqlDao.GetInstance();
        }
        public override void Create(BaseClass dto)
        {
            SqlOperation operation = usuarioMapper.GetCreateStatement(dto);
            dao.ExecuteStoredProcedure(operation);
        }

        public override void Delete(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public override List<T> RetrieveAll<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllStatement();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public  List<T> RetrieveAllUsers<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllUsers();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveAllFuncionarios<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllFuncionarios();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
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

        public List<T> RetrieveCredentials<T>(string correo, string contrasenna)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveCredentials(correo, contrasenna);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {

                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }

            }
            return resultList;
        }

        public List<T> RetrieveUserBySedeId<T>(int id_sede)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveUsersBySedeId(id_sede);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveUserByUserId<T>(int id_usuario)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveUserByUserId(id_usuario);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveByCorreo<T>(string correo)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveByCorreo(correo);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveOTPByEmail<T>(string correo)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveOTPByEmail(correo);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveByOtpAndEmail<T>(string correo, int otp)
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveUserByOtpAndEmail(correo, otp);

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveAllDoctors<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllDoctors();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }   

        public List<T> RetrieveAllEnfermeros<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllEnfermeros();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }   

        public List<T> RetrieveAllSecretarios<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllSecretarios();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveAllPacientes<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllPacientes();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public List<T> RetrieveAllAdministradores<T>()
        {
            List<T> resultList = new List<T>();
            SqlOperation operation = usuarioMapper.GetRetrieveAllAdministradores();

            List<Dictionary<string, object>> dataResults = dao.ExecuteStoredProcedureWithQuery(operation);

            if (dataResults.Count > 0)
            {
                var dtoList = usuarioMapper.BuildObjects(dataResults);
                foreach (var dto in dtoList)
                {
                    resultList.Add((T)Convert.ChangeType(dto, typeof(T)));
                }
            }
            return resultList;
        }

        public void UpdateOtpAndTimestamp(string correo)
        {
            SqlOperation operation = usuarioMapper.GetUpdateOtpAndTimestamp(correo);
            dao.ExecuteStoredProcedure(operation);
        }

        public void UpdateVerification(string correo)
        {
            SqlOperation operation = usuarioMapper.GetUpdateAccountVerification(correo);
            dao.ExecuteStoredProcedure(operation);
        }

        public void UpdatePassword(string correo, string nuevaClave)
        {
            SqlOperation operation = usuarioMapper.GetUpdateUserPassword(correo, nuevaClave);
            dao.ExecuteStoredProcedure(operation);
        }

        public void UpdateRol(string correo, string nuevoRol)
        {
            SqlOperation operation = usuarioMapper.GetUpdateUserRol(correo, nuevoRol);
            dao.ExecuteStoredProcedure(operation);
        }







        public override void Update(BaseClass dto)
        {
            throw new NotImplementedException();
        }

    }

}