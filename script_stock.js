var selectedRow = null;

//show Alerts
function showAlert(message, className){
    const div = document.createElement("div");
    div.className = `alert alert-${className}`;

    div.appendChild(document.createTextNode(message));
    const container = document.querySelector(".container");
    const main = document.querySelector(".main");
    container.insertBefore(div, main);

    setTimeout(() => document.querySelector(".alert").remove(),3000);
}
//agregue para conectar a la base de datos(falta)
async function getProductos(){
    const data = await fetch("http://localhost:8090/producto/");

    const producto = await data.json();

    productos.forEach((element) => {
        document.write(element.cod_producto)
        document.write(element.descripcion)
        document.write(element.stock)
        document.write(element.precio)
    });
}


//clear all fields
function clearFields(){
    document.querySelector("#cod_producto").value ="";
    document.querySelector("#descripcion").value ="";
    document.querySelector("#stock").value ="";
    document.querySelector("#precio").value ="";
}
//agregar
document.querySelector("#producto-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    const cod_producto = document.querySelector("#cod_producto").value;
    const descripcion = document.querySelector("#descripcion").value;
    const stock = document.querySelector("#stock").value;
    const precio = document.querySelector("#precio").value;



    //validar
    if(cod_producto == "" || descripcion == "" || stock==""||precio==""){
        showAlert("Por favor ingresar", "danger");        
    }
    else{
        if (selectedRow == null){
            const list = document.querySelector("#producto-lista");
            const row = document.createElement("tr");

            row.innerHTML =`
                <td>${cod_producto}</td>
                <td>${descripcion}</td>
                <td>${stock}</td>
                <td>${precio}</td>
                
                <td>
                <a href="#" class="btn btn-small btn-warning editar">EDITAR</a>
                <a href="#" class="btn btn-small btn-danger delete">DELETE</a>
                            
            `;
            list.appendChild(row);
            selectedRow = null;
        }
        else{
            selectedRow.children[0].textContent = cod_producto;
            selectedRow.children[1].textContent = descripcion;
            selectedRow.children[2].textContent = stock;
            selectedRow.children[3].textContent = precio;
            selectedRow = null;
        }
        clearFields();

    }
});
//editar
document.querySelector("#producto-lista").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("editar")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#cod_producto").value = selectedRow.children[0].textContent;
    }
})

//delete
document.querySelector("#producto-lista").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
});