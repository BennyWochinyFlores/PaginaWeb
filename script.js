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

//clear all fields
function clearFields(){
    document.querySelector("#codigo").value ="";
    document.querySelector("#nombre").value ="";
    document.querySelector("#apellido").value ="";
    document.querySelector("#dni").value ="";
    document.querySelector("#direccion").value ="";
    document.querySelector("#telefono").value ="";
    document.querySelector("#correo").value ="";
}
//agregar
document.querySelector("#usuario-form").addEventListener("submit",(e) =>{
    e.preventDefault();

    const codigo = document.querySelector("#codigo").value;
    const nombre = document.querySelector("#nombre").value;
    const apellido = document.querySelector("#apellido").value;
    const dni = document.querySelector("#dni").value;
    const direccion = document.querySelector("#direccion").value;
    const telefono = document.querySelector("#telefono").value;
    const correo = document.querySelector("#correo").value;


    //validar
    if(codigo == "" || nombre == "" || apellido == "" || dni == "" || direccion==""||telefono==""||correo==""){
        showAlert("Por favor ingresar", "danger");        
    }
    else{
        if (selectedRow == null){
            const list = document.querySelector("#usuario-lista");
            const row = document.createElement("tr");

            row.innerHTML =`
                <td>${codigo}</td>
                <td>${nombre}</td>
                <td>${apellido}</td>
                <td>${dni}</td>
                <td>${direccion}</td>
                <td>${telefono}</td>
                <td>${correo}</td>
                <td>
                <a href="#" class="btn btn-small btn-warning editar">EDITAR</a>
                <a href="#" class="btn btn-small btn-danger delete">DELETE</a>
                            
            `;
            list.appendChild(row);
            selectedRow = null;
        }
        else{
            selectedRow.children[0].textContent = codigo;
            selectedRow.children[1].textContent = nombre;
            selectedRow.children[2].textContent = apellido;
            selectedRow.children[3].textContent = dni;
            selectedRow.children[4].textContent = direccion;
            selectedRow.children[5].textContent = telefono;
            selectedRow.children[6].textContent = correo;
            selectedRow = null;
        }
        clearFields();

    }
});
//editar
document.querySelector("#usuario-lista").addEventListener("click",(e) =>{
    target = e.target;
    if(target.classList.contains("editar")){
        selectedRow = target.parentElement.parentElement;
        document.querySelector("#codigo").value = selectedRow.children[0].textContent;
    }
})

//delete
document.querySelector("#usuario-lista").addEventListener("click",(e)=>{
    target = e.target;
    if(target.classList.contains("delete")){
        target.parentElement.parentElement.remove();
    }
});