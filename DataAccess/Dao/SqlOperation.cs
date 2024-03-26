﻿using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.DAO
{
    public class SqlOperation
    {
        public string ProcedureName { get; set; }
        public List<SqlParameter> parameters;

        public SqlOperation()
        {

            parameters = new List<SqlParameter>();

        }

        //Metodos para agregar distintos tipos de parametros
        public void AddVarCharParam(string parameterName, string parameterValue)
        {

            parameters.Add(new SqlParameter("@" + parameterName, parameterValue));

        }

        public void AddIntegerParam(string parameterName, int parameterValue)
        {

            parameters.Add(new SqlParameter("@" + parameterName, parameterValue));

        }


        public void AddDatetimeParam(string parameterName, DateTime parameterValue)
        {

            parameters.Add(new SqlParameter("@" + parameterName, parameterValue));

        }


    }
}
