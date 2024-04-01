using DataAccess.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;

namespace DataAccess.CRUD
{
    public abstract class CrudFactory
    {
        protected SqlDao dao;

        public abstract void Create(BaseClass dto);

        public abstract void Update(BaseClass dto);

        public abstract void Delete(BaseClass dto);

        public abstract List<T> RetrieveAll<T>();

        public abstract T RetrieveById<T>(int id);

    }
}
