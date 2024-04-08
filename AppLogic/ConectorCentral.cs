using DTO;
using Newtonsoft.Json;
using System.Text.Json.Serialization;

namespace AppLogic
{
    internal class ConectorCentral
    {
        private const string CENTRAL_API = "https://api-sln.azurewebsites.net/swagger/index.html";

        public UsuarioBase GetUsuarioDetails(string Identificacion)
        {
          string serviceUri = CENTRAL_API + "/api/Usuario/GetUsuarioDetails?Identificacion=" + Identificacion;
          string results = this.InvokeGetMethod(serviceUri);
          UsuarioBase usuarioInfo = JsonConvert.DeserializeObject<UsuarioBase>(results);

          return usuarioInfo;
        }

        public List<Especialidad> GetEspecialidadList()
        {
          string serviceUri = CENTRAL_API + "/api/Especialidad/GetEspecialidadList";
          string results = this.InvokeGetMethod(serviceUri);
          List<Especialidad> especialidadList = JsonConvert.DeserializeObject<List<Especialidad>>(results);

          return especialidadList;
        }

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
