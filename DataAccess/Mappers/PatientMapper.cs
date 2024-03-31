using dataaccess.dao;
using dataaccess.mappers.interfaces;
using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using system;
using system.collections.generic;
using system.linq;
using system.reflection.metadata.ecma335;
using system.text;
using system.threading.tasks;

namespace dataaccess.mappers
{
    public class patientmapper : IObjectMapper , ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Patient pat = new Patient();
            pat.Id = int.Parse(row["Id"].ToString());
            pat.SocialSecurityID = row["Social_Security_Id"].ToString();
            pat.Name = row["Name"].ToString();
            pat.LastName = row["LastName"].ToString() ;
            return pat;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                Paciente pat = BuildObjects(row);
                results.Add(pat);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "Nombre del procedure";

            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }
    }


}
