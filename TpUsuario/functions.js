// -----------------------------get form data----------------------

const getDataForm = () => {
  const frmNombre = document.getElementById("frm-nombre").value;
  const frmPassword = document.getElementById("frm-password").value;
  const frmRole = document.getElementById("frm-role").value;


  return {
    nombre: frmNombre,
    password:  frmPassword,
    role:frmRole,
  };
};

// -----------------------------create producto----------------------

const postProducto = async (dataForm) => {
  const data = await fetch("http://localhost:8090/usuario/", {
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

// -----------------------------edit producto----------------------

const putProduct = async (dataForm, id) => {
  const data = await fetch("http://localhost:8090/usuario/" + id, {
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
    password: params.get("password"),
    role: params.get("role"),
    cod_persona: params.get("cod_persona"),
  };

  document.getElementById("frm-nombre").value = data.nombre;
  document.getElementById("frm-password").value = data.password;
  document.getElementById("frm-role").value = data.role;
  document.getElementById("frm-cod_persona").value = data.cod_persona;
};

main();
