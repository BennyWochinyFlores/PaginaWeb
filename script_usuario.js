const getUsuarios = async () => {
    const response = await fetch("http://localhost:8090/usuario/");
  
    data = await response.json();
  
    const dataArray = data.map((obj) => Object.values(obj));
  
    const elementCheckBox = '<input type="checkbox" name="frmCheckbox" id="">';
    dataArray.forEach((element) => {
      element.unshift(elementCheckBox);
    });
  
    return dataArray;
  };
  
  // ------------------------ pasando parametro id a otra pestaña-------------
  
  const moveEditPage = () => {
    const tbody = document.getElementById("tbody").querySelectorAll("tr");
  
    const tbodyArray = Array.from(tbody);
  
    for (let index = 0; index < tbodyArray.length; index++) {
      const checkbox = tbodyArray[index].querySelector("input");
      if (checkbox.checked) {
        const row = tbodyArray[index].querySelectorAll("td");
        //siempre empezar de 1 porque el cero es checkbox
        const dataRow = {
          id: row[1].textContent,
          username: row[2].textContent,
          password: row[3].textContent,
          role: row[4].textContent,
          cod_persona: row[5].textContent,
        };
  
        //enviar los datos a traver de query params
        const enlace = document.createElement("a");
        enlace.href = `/TpUsuario/editar.html?id=${dataRow.id}&nombre=${dataRow.username}&password=${dataRow.password}&role=${dataRow.role}&cod_persona=${dataRow.cod_persona}`;
  
        enlace.click();
  
        break;
      }
    }
  };
  
  // ---------------------------- delete product -----------------
  
  const deleteUsuario = async () => {
    const tbody = document.getElementById("tbody").querySelectorAll("tr");
  
    const tbodyArray = Array.from(tbody);
  
    for (let index = 0; index < tbodyArray.length; index++) {
      const checkbox = tbodyArray[index].querySelector("input");
      if (checkbox.checked) {
        const idRow = tbodyArray[index].querySelectorAll("td")[1].textContent;
  
        console.log(idRow);
  
        const data = await fetch("http://localhost:8090/usuario/" + idRow, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });
  
        if (!data) {
          console.log("hubo error");
          return "";
        }
  
        console.log("todo guchi");
  
        //se crea el enlace para hacer refresh de la pagina
        const enlace = document.createElement("a");
        enlace.href = `/`;
        enlace.click();
        break;
      }
    }
  };
  
  //-------------cargar datos en datable -----------------
  const main = async () => {
    const info = await getUsuarios();
    console.log(info);
    $(document).ready(function () {
      $("#myTable").DataTable({
        data: info,
        responsive: true,
      });
    });
  };
  
  main();