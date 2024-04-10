using DTO;
using Newtonsoft.Json;
using System;
using System.Net.Http;
using System.Text.Json.Serialization;
using static System.Net.WebRequestMethods;

namespace AppLogic
{
    internal class ConectorCentral
    {
        private const string CENTRAL_API = "https://simepci-api-sln.azurewebsites.net";

        //public UsuarioBase GetUsuarioDetails(string Identificacion)
        //{
        //  string serviceUri = CENTRAL_API + "/api/Usuario/GetUsuarioDetails?Identificacion=" + Identificacion;
        //  string results = this.InvokeGetMethod(serviceUri);
        //  UsuarioBase usuarioInfo = JsonConvert.DeserializeObject<UsuarioBase>(results);

        //  return usuarioInfo;
        //}

        //public List<Especialidad> GetEspecialidadList()
        //{
        //  string serviceUri = CENTRAL_API + "/api/Especialidad/GetEspecialidadList";
        //  string results = this.InvokeGetMethod(serviceUri);
        //  List<Especialidad> especialidadList = JsonConvert.DeserializeObject<List<Especialidad>>(results);

        //  return especialidadList;
        //}

        //HttpClient client = "https://g5-simepci.azurewebsites.net/Login/Login";

        //public string GetLogin(string usuario, string contrasenna)
        //{
        //    string serviceUri = CENTRAL_API + "/api/Usuario/GetLogin?usuario=" + usuario + "&contrasenna=" + contrasenna;
        //    string results = this.InvokeGetMethod(serviceUri);
        //    return results;
        //}

        //public string UserLogin(string uri)
        //{
        //    HttpClient client = new HttpClient();
        //    Client.Uri = new Uri(uri);

        //    var result = client.GetAsync(uri).Result;

        //    if (result.IsSuccessStatusCode)
        //    {
        //        return result.Content.ReadAsStringAsync().Result;
        //    }
        //    return "";

        //}



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

    }
}
