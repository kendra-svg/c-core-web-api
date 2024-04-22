using DTO;
using DTO.External;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text.Json.Serialization;
using static System.Net.WebRequestMethods;

namespace AppLogic
{
    internal class ConectorCentral
    {
        //private const string CENTRAL_API = "https://simepci-api-sln.azurewebsites.net";
        //private const string CENTRAL_API = "https://apisimepci.azurewebsites.net";
        private const string CENTRAL_API = "https://localhost:7154/";
        private string InvokeGetMethod(string uri)
        {
            HttpClient client = new HttpClient();
            client.BaseAddress = new Uri(uri);

            var result = client.GetAsync(uri).Result;

            if (result.IsSuccessStatusCode)
            {
                return result.Content.ReadAsStringAsync().Result;
            }
            return "";
        }
        public SedesInfo GetSedesData(int id)
        {
            string service = CENTRAL_API + "/api/Sedes/GetsedeById";

            string results = this.InvokeGetMethod(service);

            SedesInfo sedes = JsonConvert.DeserializeObject<SedesInfo>(results);
            return sedes;
        }
        public List<SedesInfo> GetSedesInfos()
        {
            string serviceUri = CENTRAL_API + "/api/Sedes/GetAllSedesA";
            string results = this.InvokeGetMethod(serviceUri);
            var dtoObject = JsonConvert.DeserializeObject<List<SedesInfo>>(results);
            return dtoObject;
        }
        public SedesInfo GetSedesDetails(int sedeID)
        {
            string serviceUri = CENTRAL_API + "/api/Sedes/GetSedes?id=" + sedeID;

            string results = this.InvokeGetMethod(serviceUri);
            SedesInfo sedesInfo = JsonConvert.DeserializeObject<SedesInfo>(results);
            return sedesInfo;
        }
        public List<string> GetSpecialties()
        {
            string serviceUri = CENTRAL_API + "api/Especialidades/GetAllEspecialidadesA";
            string results = this.InvokeGetMethod(serviceUri);
            var dtoObject = JsonConvert.DeserializeObject<List<string>>(results);
            return dtoObject;
        }
        public List<string> GetUsers()
        {
            string serviceUri = CENTRAL_API + "/api/Usuario/GetAllUsuariosA";
            string results = this.InvokeGetMethod(serviceUri);
            var dtoObject = JsonConvert.DeserializeObject<List<string>>(results);
            return dtoObject;
        }
        public List<string> GetcombiSpeSedeUser()
        {
            string serviceUri = CENTRAL_API + "/api/SedeEspec/GetAllSedesEspeA";
            string results = this.InvokeGetMethod(serviceUri);
            var dtoObject = JsonConvert.DeserializeObject<List<string>>(results);
            return dtoObject;
        }

    }
}
