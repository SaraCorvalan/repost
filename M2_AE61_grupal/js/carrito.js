const crearCarrito = () => {
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = `
    <hi class="modal-header-title">Carrito de compra</h1> `;

    modalContainer.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "X";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContainer.style.display = "none";
    });


    modalHeader.append(modalbutton);


    carrito.forEach((product) => {
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = `
      <img src="${product.img}">
      <h3>${product.nombre}</h3>
      <p>$ ${product.precio}</p>
      <span class="restar"> - </span>
      <p>Cantidad: ${product.cantidad}</p>
      <span class="sumar"> + </span>
      <p>Total: ${product.cantidad * product.precio}</p>
      <span class="eliminar-producto"> ❌ </span>

      `;
        modalContainer.append(carritoContent);
        let restar = carritoContent.querySelector(".restar");
        restar.addEventListener("click", () => {
            if (product.cantidad !== 1) {
                product.cantidad--;

            }
            saveLocal();
            crearCarrito();
        });

        let sumar = carritoContent.querySelector(".sumar");
        sumar.addEventListener("click", () => {
            product.cantidad++;
            saveLocal();
            crearCarrito();
        });

        let eliminar = carritoContent.querySelector(".eliminar-producto");
        eliminar.addEventListener("click", () => {
            eliminarProducto(product.id);

        })

        //let eliminar = document.createElement("span");
        //eliminar.innerText = "❌";
        //eliminar.className = "delete-product";
        //carritoContent.append(eliminar);

        //eliminar.addEventListener("click", eliminarProducto);
    });


    const total = carrito.reduce((acc, el) => acc + el.precio * el.cantidad, 0);

    const totalCompra = document.createElement("div");
    totalCompra.className = "total-content";
    totalCompra.innerHTML = `Total a pagar:$ ${total}`;
    modalContainer.append(totalCompra);

    const pagarButton = document.createElement("div");
    pagarButton.className="pagar-button";
    pagarButton.innerText = "Pagar";
    pagarButton.addEventListener("click", ()=>{window.location.href = "formulario_despacho.html"});
    modalContainer.append(pagarButton);
 
}
verCarrito.addEventListener("click", crearCarrito);

const eliminarProducto = (id) => {
    const foundId = carrito.find((element) => element.id === id);

    carrito = carrito.filter((carritoId) => {
        return carritoId !== foundId;
    });
    carritoContador();
    saveLocal();
    crearCarrito();
};

const carritoContador = () => {
    cantidadCarrito.style.display = "block";

    const carritoLength = carrito.length;
    localStorage.setItem("carritoLength", JSON.stringify(carritoLength))

    cantidadCarrito.innerText = JSON.parse(localStorage.getItem("carritoLength"));

};

carritoContador();



   