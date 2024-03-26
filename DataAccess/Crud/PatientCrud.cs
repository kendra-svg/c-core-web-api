using DataAccess.CRUD;
using DataAccess.DAO;
using DataAccess.Mappers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Crud
{
    public class PatientCrud : CrudFactory
    {
        PatientMapper patientMapper;

        public PatientCrud() : base() { 
            patientMapper = new PatientMapper();
            dao = SqlDao.GetInstance();
        }

        public override List<T> RetrieveAll<T>()
        {
            throw new NotImplementedException();
        }

        public override T RetrieveById<T>(int id)
        {
            throw new NotImplementedException();
        }
    }
}
