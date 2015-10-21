using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace OneCircleWeb.DAL
{
    public class Shop : Place
    {
        public string  WhatDoTheySell { get; set; }
        public string OpenHours { get; set; }
    }
}