﻿using DataAccess.DAO;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DTO;


namespace DataAccess.Mappers.Interfaces
{



    public interface ICrudStatements
    {
        SqlOperation GetCreateStatement(BaseClass dto);
        SqlOperation GetUpdateStatement(BaseClass dto);
        SqlOperation GetDeleteStatement(BaseClass dto);
        SqlOperation GetRetrieveAllStatement();
        SqlOperation GetRetrieveByIdStatement(string id);


    }
}
