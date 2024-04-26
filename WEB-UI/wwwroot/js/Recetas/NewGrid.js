const AcolumnDefinition = [
    { field: "id", headerName: "ID" },
    {
        headerName: "Nombre Paciente",
        valueGetter: function (params) {
            return params.data.usuarioBases[0].nombre;
        }
    },
    {
        headerName: "Nombre del medicamento",
        valueGetter: function (params) {
            return params.data.recetaList[0].nombreMedicamento;
        }
    },
    {
        headerName: "Recomendaciones adicionales",
        valueGetter: function (params) {
            return params.data.recetaList[0].recomendacionAdicional;
        }
    },
];


const AgripOptions = {
    columnDefs: AcolumnDefinition,
    rowData: [],
    rowSelection: 'single',

    defaultColDef: { sortable: true, filter: true },
}

function ProcessDoubleClick(params) {
    var view = new RecetaLista();
}

document.addEventListener('DOMContentLoaded', () => {
    const gridDiv = document.querySelector('#Grid');
    new agGrid.Grid(gridDiv, AgripOptions);
});
