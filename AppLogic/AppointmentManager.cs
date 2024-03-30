using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DataAccess.Crud;
using DataAccess.CRUD;
using DTO;

namespace AppLogic
{
    public class AppointmentManager
    {
        public string CreateAppointment(AppointmentManager app)
        {
            AppointmentCrud crud = new AppointmentCrud();
            crud.Create(app);
            return "OK-Appointment-Created";

        }
    }
}
