using DataAccess.DAO;
using DataAccess.Mappers.Interfaces;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Mappers
{
    public class ExpedienteMapper : IObjectMapper, ICrudStatements
    {
        public BaseClass BuildObject(Dictionary<string, object> row)
        {
           Expediente exp = new Expediente();
            exp.Id = int.Parse(row["id_expedientes"].ToString());
            exp.AntecedentesPersonales = row["antecedentes_personales"].ToString();
            exp.TratamietosFarmacologicos = row["tratamientos_farmacologicos"].ToString();
            exp.AntecedentesFamiliades = row["antecedentes_familiares"].ToString();
            exp.EnfermedadesCronicas = row["enfermedades_cronicas"].ToString();
            exp.MalosHabitos = row["malos_habitos"].ToString();
            exp.RiesgosCardiovasculares= row["riesgos_cardiovasculares"].ToString();
            exp.Diabetes = row["diabetes"].ToString();
            exp.EnfermedadesCongenitas = row["enfermedades_congenitas"].ToString();
            exp.AntecedentesCancer = row["antecedentes_cancer"].ToString();

            exp.usuario = new List<UsuarioBase>
            {
                new UsuarioBase {Nombre = row["usuarios"].ToString()}
            };

            return exp;
        }

        public List<BaseClass> BuildObjects(List<Dictionary<string, object>> rowList)
        {
            List<BaseClass> results = new List<BaseClass>();
            foreach (var row in rowList)
            {
                var e = BuildObject(row);
                results.Add(e);
            }
            return results;
        }






        public SqlOperation GetCreateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_INSERT_expedientes";

            Expediente exp = (Expediente)dto;

            operation.AddIntegerParam("idexpediente", exp.Id);
            operation.AddVarCharParam("historialesclinicos", exp.AntecedentesPersonales);
            operation.AddVarCharParam("historialesclinicos", exp.TratamietosFarmacologicos);
            operation.AddVarCharParam("historialesclinicos", exp.AntecedentesFamiliades);
            operation.AddVarCharParam("historialesclinicos", exp.EnfermedadesCronicas);
            operation.AddVarCharParam("historialesclinicos", exp.MalosHabitos);
            operation.AddVarCharParam("historialesclinicos", exp.RiesgosCardiovasculares);
            operation.AddVarCharParam("historialesclinicos", exp.Diabetes);
            operation.AddVarCharParam("historialesclinicos", exp.EnfermedadesCongenitas);
            operation.AddVarCharParam("historialesclinicos", exp.AntecedentesCancer);
            return operation;
        }

        public SqlOperation GetDeleteStatement(BaseClass dto)
        {
            throw new NotImplementedException();
        }

        public SqlOperation GetRetrieveAllStatement()
        {
            SqlOperation operation = new SqlOperation();
            operation.ProcedureName = "SP_GET_ALL_expedientes";
            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(int id)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_GET_EXPEDIENTE_BY_ID";

            operation.AddIntegerParam("idExpediente", id);

            return operation;

        }

        public SqlOperation GetUpdateStatement(BaseClass dto)
        {
            SqlOperation operation = new SqlOperation();

            operation.ProcedureName = "SP_UPDATE_EXPEDIENTE";

            Expediente exp = (Expediente)dto;

            operation.AddIntegerParam("idexpediente", exp.Id);
            operation.AddVarCharParam("antecedentespersonales", exp.AntecedentesPersonales);
            operation.AddVarCharParam("tratamientos", exp.TratamietosFarmacologicos);
            operation.AddVarCharParam("antecentesfamiliares", exp.AntecedentesFamiliades);
            operation.AddVarCharParam("enfermedadescronicas", exp.EnfermedadesCronicas);
            operation.AddVarCharParam("maloshabitos", exp.MalosHabitos);
            operation.AddVarCharParam("riesgos", exp.RiesgosCardiovasculares);
            operation.AddVarCharParam("diabetes", exp.Diabetes);
            operation.AddVarCharParam("enfermedadescongenitas", exp.EnfermedadesCongenitas);
            operation.AddVarCharParam("cancer", exp.AntecedentesCancer);
            return operation;
        }

        public SqlOperation GetRetrieveByIdStatement(string id)
        {
            throw new NotImplementedException();
        }
    }
}
