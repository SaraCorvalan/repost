var dataSet = [
    ['1', 'Zapatilla Adidas Supernova', "Zapatilla Adidas Supernova", '56.000', '50'],
    ['2', 'Zapatilla Fila SLAM 19 VIZ', "Zapatilla Fila SLAM 19 VIZ, solo para futguros astronautas", '65.000', '30'],
    ['3', 'Zapatilla nike revolution 6', "Zapatilla nike revolution 6, para quienes tiene un horizonte infinito", '100.000', '30'],
    ['4', 'Zapatillas adidas Nebzed super boots', "Zapatillas adidas Nebzed super boots", '80.000', '25'],
    ['5', 'Zapatillas running', "Zapatillas running, al infinito y más allá", '55.000', '30'],
    ['6', 'Trotadora AthleticAdvanced 530T', "Máquina Trotadora para bajar muchos kilos", '400.000', '20'],
    ['7', 'Polera Emitares Rojo', "Polera Emitares Rojo", '35.000', '15'],
    ['8', 'Polera Adidas Azul', "Polera Adidas Azul", '38.000', '100'],
    ['9', 'Bicicleta Estática Max', "Bicicleta Estática Max, solo para valientes", '250.000', '20']
];

//datatable producto
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Id' },
            { title: 'Nombre' },
            { title: 'Descripción' },
            { title: 'Precio (CL $)' },
            { title: 'Stock' },
            
        ],
    });
});
