using DataAccess.Crud;
using DataAccess.Mappers;
using DTO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AppLogic
{
    public class HorariosManager
    {
        public List<Horarios> RetrieveAllByUserId(int idUser)
        {
            HorarioCrud crud = new HorarioCrud();
            return crud.RetrieveAllByUserId<Horarios>(idUser);
        }
        
    }
}
