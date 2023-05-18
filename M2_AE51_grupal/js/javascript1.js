function validar() {
    var usuarios = ["Guillermo Ondarza", "Sara Corvalán", "Romina Velasco" ]
    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellidos").value;
    var suma = `Nombre y Apellido de usuario: ${nombre} ${apellido} `;
    let okis = 0;
    for(i=0; i<=length.usuarios; i=i+1){
        if (suma === usuarios[i]) {
            okis = 1;
        }
    }
    
    if(okis == 1) {
        var resultado = suma;       
    }else {
        var resultado = "usuario no registrado";
    }

    document.getElementById("resultado").innerHTML = resultado;
    return false;
}

// array con productos
var dataSet = [
    ['1', 'Zapatilla Adidas Supernova', '$56.000', '50'],
    ['2', 'Zapatilla Fila SLAM 19 VIZ', '$65.000', '30'],
    ['3', 'Zapatilla nike revolution 6', '$100.000', '30'],
    ['4', 'Zapatillas adidas Nebzed super boots', '$80.000', '25'],
    ['5', 'Zapatillas running', '$55.000', '30'],
    ['6', 'Trotadora AthleticAdvanced 530T', '$400.000', '20'],
    ['7', 'Polera Emitares Rojo','$35.000', '15'],
    ['8', 'Polera Adidas Azul', '$38.000', '100'],
    ['9', 'Bicicleta Estática Max', '$250.000', '20']
];

//datatable producto
$(document).ready(function () {
    $('#example').DataTable({
        data: dataSet,
        columns: [
            { title: 'Id' },
            { title: 'Nombre' },
            { title: 'Precio' },
            { title: 'Stock' },
            
        ],
    });
});