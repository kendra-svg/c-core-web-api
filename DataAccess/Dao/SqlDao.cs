using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data.SqlClient;
using System.Threading.Tasks;
using System.Data;

namespace DataAccess.DAO
{
    public class SqlDao
    {
        //Para la base de datos local"Server=localhost;Database=ISA_CLINIC;Trusted_Connection=True;"
        //User ID=cenfo_DB;Password=Psw123456*; en caso de no tener windows autentication o usar un user, se remplaza la seccion de trusted_connection...
        private string connectionString = "Server=localhost;Database=master;Trusted_Connection=True;";

        //Singleton
        private static SqlDao instance = new SqlDao();


        //Singleton access point
        public static SqlDao GetInstance()
        {

            if (instance == null)
                instance = new SqlDao();
            return instance;
        }


        /*
         * C --> void
         * R --> result
         * U --> void
         * D --> void
         */

        public void ExecuteStoredProcedure(SqlOperation operation) {
            SqlConnection connection = new SqlConnection(connectionString);

            SqlCommand command = new SqlCommand();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = operation.ProcedureName;

            foreach (SqlParameter param in operation.parameters) { 
                command.Parameters.Add(param);
            }
            try
            {
                connection.Open();
                command.ExecuteNonQuery();
                connection.Close();
            }
            catch (Exception ex) {
                throw ex;
            }

        }

        public List<Dictionary<string, object>> ExecuteStoredProcedureWithQuery(SqlOperation operation)
        {
            List<Dictionary<string, object>> lsResults = new List<Dictionary<string, object>>();

            SqlConnection connection = new SqlConnection(connectionString);
            SqlCommand command = new SqlCommand();
            command.Connection = connection;
            command.CommandType = CommandType.StoredProcedure;
            command.CommandText = operation.ProcedureName;

            foreach (SqlParameter param in operation.parameters)
            {
                command.Parameters.Add(param);
            }

            try
            {
                connection.Open();
                //Ejecutar el script 
                SqlDataReader reader = command.ExecuteReader();
                if(reader.HasRows) 
                {

                    while (reader.Read()) { 
                        Dictionary<string, object> rowDicc = new Dictionary<string, object>();
                        for(var fieldCount =0; fieldCount < reader.FieldCount; fieldCount++)
                        {
                            rowDicc.Add(reader.GetName(fieldCount), reader.GetValue(fieldCount));
                        }
                        lsResults.Add(rowDicc);
                    }
                }
                connection.Close();
                return lsResults;
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


    }
}
