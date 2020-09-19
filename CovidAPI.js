function DadosEstados() {
  var data;
  fetch("https://covid19-brazil-api.now.sh/api/report/v1", {
    method: "POST",
    body: data,
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      console.log(data);
      return data.data.map(function (estados) {
        document.getElementById("estados").innerHTML += "<td>" + estados.state +"</td>"+ "<hr/>";
        document.getElementById("casos").innerHTML += "<td>" + estados.cases + "</td>" +  "<hr/>";
        document.getElementById("mortes").innerHTML += "<td>" + estados.deaths + "</td>" +  "<hr/>";
        document.getElementById("horas").innerHTML += "<td>" + estados.datetime.slice(0, 10) + "</td>" +  "<hr/>";
      }); 
    })
    .catch((err) => console.error(err));
}

function DadosRJ() {
  var data;
  fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj", {
    method: "POST",
    body: data,
  })
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var estado = JSON.stringify(data.state).slice(1, 15);
      var casos = JSON.stringify(data.cases);
      var mortes = JSON.stringify(data.deaths);
      var hora = JSON.stringify(data.datetime);
      var novaHora = hora.slice(1, 11);
      document.getElementById("tabela").innerHTML +=
        "<td>" +
        estado +
        "</br>" +
        "</td>" +
        "<td>" +
        casos +
        "</br>" +
        "</td>" +
        "<td>" +
        mortes +
        "</br>" +
        "</td>" +
        "<td>" +
        novaHora +
        "</br>" +
        "</td>";
    })
    .catch((err) => console.error(err));
}


DadosEstados();
DadosRJ();