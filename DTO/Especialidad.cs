﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTO
{
    public class Especialidad : BaseClass
    {
        public string Nombre { get; set; }
        public double Costo { set; get; }
        public double IVA { set; get; }
    }
}
