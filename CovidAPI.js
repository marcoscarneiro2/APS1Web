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
        document.getElementById("estados").innerHTML += estados.state + "</br>";
        document.getElementById("casos").innerHTML += estados.cases + "</br>";
        document.getElementById("mortes").innerHTML += estados.deaths + "</br>";
        document.getElementById("horas").innerHTML += estados.datetime.slice(0, 10) + "</br>";
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