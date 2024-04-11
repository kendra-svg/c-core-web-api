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
