const columnDefinition = [
    { field: "id", headerName: "ID de Examen" },
    { field: "nombreExamen", headerName: "Nombre del Examen" },
    { field: "comentario", headerName: "Comentario" },
    { field: "fecha", headerName: "Fecha" },
    {
        headerName: "Acciones",
        cellRenderer: function (params) {

            const buttonDownload = document.createElement("button");
            


            buttonDownload.className = "btn btn-success m-1";
            buttonDownload.innerHTML = "Descargar";
            buttonDownload.addEventListener("click", function () {

                handleButtonDescargar(params.data);
            });


            

            const wrapper = document.createElement("div");
            wrapper.appendChild(buttonDownload);
           

            return wrapper;




        }
    }

];

const LaboratorioGridOptions = {
    columnDefs: columnDefinition,
    rowData: [],
    rowSelection: 'single',

    //defaults
    defaultColDef: { sortable: true, filter: true },

  
   
}





function handleButtonDescargar(data) {
    console.log("DESCARGANDO:", data.foto);
    if (data.foto == null || data.foto=="string") {
        Swal.fire({
            icon: 'info',
            text: "Cuando se registro el examen no se subio ningun archivo.",
            title: 'Aviso'
        });
    }
    else {
        const cloudinaryUrl = data.foto.replace('/upload/', '/upload/fl_attachment/');
        const nameImg = data.nombreExamen;

        const link = document.createElement('a');
        link.href = cloudinaryUrl;
        link.download = nameImg;



        document.body.appendChild(link);
        link.click();


        document.body.removeChild(link);
    }

}



document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#gridExamenesPersonales');
    new agGrid.Grid(gridDiv, LaboratorioGridOptions);
})

