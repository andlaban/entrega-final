let carrito = [];
let items = document.getElementById("items");
let total = document.getElementById("total");

let articuloPeliculasBuenas = document.getElementById("pelisBuenas");
function renderizarPelisBuenas(){
for(const pelicula of peliculasBuenas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
            <hr>
            <button id="info${pelicula.id}" class="btn btn-warning">Mas Información</button>
        </div>
    `;
    articuloPeliculasBuenas.append(poster);
}
    peliculasBuenas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
    peliculasBuenas.forEach((pelicula) => {
        document.getElementById(`info${pelicula.id}`).onclick = () => {
            Swal.fire({
                title: `${pelicula.nombre}`,
                html: `${pelicula.descripcion}`,
                imageUrl: `${pelicula.banner}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                });
            };
        })
}
renderizarPelisBuenas();

let articuloPeliculasMalas = document.getElementById("pelisMalas");
function renderizarPelisMalas(){
for(const pelicula of peliculasMalas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
            <hr>
            <button id="info${pelicula.id}" class="btn btn-warning">Mas Información</button>
        </div>
    `;
    articuloPeliculasMalas.append(poster);
}
    peliculasMalas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
    peliculasMalas.forEach((pelicula) => {
        document.getElementById(`info${pelicula.id}`).onclick = () => {
            Swal.fire({
                title: `${pelicula.nombre}`,
                html: `${pelicula.descripcion}`,
                imageUrl: `${pelicula.banner}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                });
            };
        })
}
renderizarPelisMalas();

let articuloPeliculasFeas = document.getElementById("pelisFeas");
function renderizarPelisFeas(){
for(const pelicula of peliculasFeas){
    let poster = document.createElement("div");
    poster.className="card col-md-2 bg-dark";
    poster.innerHTML = `
        <div class="card-body">
        <img src=${pelicula.foto} class="card-img-top" alt=${pelicula.nombre}>
            <h5 class="card-title">${pelicula.nombre}</h5>
            <p class="card-text">$ ${pelicula.precio}</p>
            <button id="btn${pelicula.id}" class="btn btn-danger">Comprar</button>
            <hr>
            <button id="info${pelicula.id}" class="btn btn-warning">Mas Información</button>
        </div>
    `;
    articuloPeliculasFeas.append(poster);
}
    peliculasFeas.forEach((pelicula) => {
        document.getElementById(`btn${pelicula.id}`).onclick = () => {
            agregarAlCarrito(pelicula);
        };
    })
    peliculasFeas.forEach((pelicula) => {
        document.getElementById(`info${pelicula.id}`).onclick = () => {
            Swal.fire({
                title: `${pelicula.nombre}`,
                html: `${pelicula.descripcion}`,
                imageUrl: `${pelicula.banner}`,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                });
            };
        })
}

renderizarPelisFeas();

function quitarDelCarrito(idPelicula){
    const pelicula = carrito.find((elemento) => elemento.id === idPelicula);
    carrito.splice(carrito.indexOf(pelicula),1);
    document.getElementById(`btnRemove${idPelicula}`).remove();   
    let sumador = 0;
    for(const pelicula of carrito){
        sumador += pelicula.precio;
    }
    total.innerText="Total a pagar: $"+sumador;
  }
  
function agregarAlCarrito(pelicula){
    
    const URLDOLAR="https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        .then( respuesta => respuesta.json())
        .then( cotizaciones => {
            var dolarBlue = cotizaciones.blue;
            console.log(dolarBlue);
            document.getElementById("cotizacionDolar").innerHTML=`
                <p>Dolar oficial: Para la compra: $ ${dolarBlue.value_buy} Para la venta: $ ${dolarBlue.value_sell}</p>
            `;
        })

    carrito.push(pelicula)
    Swal.fire(
        'Producto '+pelicula.nombre,
        'Agregado al carrito!',
        'success'
      );
      items.innerHTML += `
        <tr id="btnRemove${pelicula.id}">
            <td>${pelicula.nombre}</td>
            <td>${pelicula.precio}</td>
            <td><button onclick="quitarDelCarrito('${pelicula.id}')" id="btn${pelicula.id}" class="btn btn-danger">X</button></td>
        </tr>
    `;

    let sumador = 0;
    for(const pelicula of carrito){
        sumador += pelicula.precio;
    }
    total.innerText="Total a pagar: $"+sumador;
    
}

/*function obtenerDolar(){
    const URLDOLAR="https://api.bluelytics.com.ar/v2/latest";
    fetch(URLDOLAR)
        .then( respuesta => respuesta.json())
        .then( cotizaciones => {
            const dolarBlue = cotizaciones.blue;
            console.log(dolarBlue);
            document.getElementById("cotizacionDolar").innerHTML+=`
                <p>Dolar oficial: Para la compra: $ ${dolarBlue.value_buy} Para la venta: $ ${dolarBlue.value_sell}</p>
            `;
            document.getElementById("precioDolar").innerHTML+=`
                <p>${pelicula.precio/dolarBlue.value_sell}</p>
            `;
        })
}*/

/*function convertirPesos(){
    for(const pelicula of carrito) {
        let conversion = pelicula.precio/dolarBlue.value_sell;
    } return conversion;
 }*/
 
