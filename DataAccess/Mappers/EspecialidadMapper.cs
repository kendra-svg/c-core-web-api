﻿using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mappers
{
    internal class EspecialidadMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
            Especialidad espec = new Especialidad();
            espec.Id = int.Parse(row["id_especialidades"].ToString());
            espec.Nombre = row["nombre_especialidad"].ToString();

            return espec;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var espec = BuildObject(row);
                results.Add(espec);
            }
            return results;
        }

        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_INSERT_especialidades";

            Especialidad espec = (Especialidad)dto;

            operation.AddIntegerParam("idespecialidades", espec.Id);
            operation.AddVarCharParam("nombre_especialidades", espec.Nombre);

            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_ESPECIALIDADES";
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