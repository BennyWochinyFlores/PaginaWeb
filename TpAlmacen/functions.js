// -----------------------------get form data----------------------

const getDataForm = () => {
  const frmNombre = document.getElementById("frm-nombre").value;
  const frmDescripcion = document.getElementById("frm-descripcion").value;


  return {
    nombre: frmNombre,
    descripcion: frmDescripcion,
  };
};

// -----------------------------create producto----------------------

const postProducto = async (dataForm) => {
  const data = await fetch("http://localhost:8090/almacen/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });

  if (!data) {
    console.log("hubo error");
    return "";
  }

  console.log("todo guchi");

  const enlace = document.createElement("a");
  enlace.href = `/`;

  enlace.click();
};

const createProduct = () => {
  const dataForm = getDataForm();

  postProducto(dataForm);
};
//-----------------Limpiar las Lineas
const limpiarFormulario= ()=> {
  
 
  document.getElementById('nombre').value = '';
    
   
  document.getElementById('direccion').value = '';
  }

// -----------------------------edit producto----------------------

const putProduct = async (dataForm, id) => {
  const data = await fetch("http://localhost:8090/almacen/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataForm),
  });

  if (!data) {
    console.log("hubo error");
    return "";
  }

  console.log("todo guchi");
  const enlace = document.createElement("a");
  enlace.href = `/`;

  enlace.click();
};

const getParamId = () => {
  const params = new URLSearchParams(window.location.search);

  // Obtener el valor de 'id' de los parámetros de búsqueda
  const id = params.get("id");

  return id;
};

const editProduct = () => {
  const dataForm = getDataForm();
  const id = getParamId();

  putProduct(dataForm, id);
};

const main = () => {
  //obtienes los datos de la url y lo seteas en el edit

  const params = new URLSearchParams(window.location.search);
  const data = {
    id: params.get("id"),
    nombre: params.get("nombre"),
    descripcion: params.get("descripcion"),
  };

  document.getElementById("frm-nombre").value = data.nombre;
  document.getElementById("frm-descripcion").value = data.descripcion;

};

main();
