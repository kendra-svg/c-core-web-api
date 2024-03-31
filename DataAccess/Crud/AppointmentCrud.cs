
//using DataAccess.DAO;
//using DataAccess.Mappers;
//using DTO;
//using System;
//using System.Collections.Generic;
//using System.Data.SqlTypes;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace DataAccess.CRUD
//{
//    public class AppointmentCrud : CrudFactory
//    {
//        AppointmentMapper mapper;
//        public AppointmentCrud():base()
//        {
//            mapper = new AppointmentMapper();
//            dao = SqlDao.GetInstance();
//        }
//        public override void Create(BaseClass dto)
//        {
//            SqlOperation operation = mapper.GetCreateStatement(dto);
//            dao.ExecuteStoredProcedure(operation);
//        }
//        public override void Delete(BaseClass dto)
//        {
//            throw new NotImplementedException();
//        }
//        public override List<T> RetrieveAll<T>()
//        {
//            throw new NotImplementedException();
//        }
//        public override T RetrieveById<T>(int id)
//        {
//            throw new NotImplementedException();
//        }
//        public override void Update(BaseClass dto)
//        {
//            throw new NotImplementedException();
//        }
//    }

//}
