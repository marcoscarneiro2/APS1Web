function Estados() {
    var data;
    fetch("https://covid19-brazil-api.now.sh/api/report/v1",
        {
            method: "POST",
            body: data
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                var estados = JSON.stringify(data.data[i].state);

                document.getElementById("estado").innerHTML +=
                    estados + "</br>";
            }
        })
        .catch(err => console.error(err));
}

function Casos() {
    var data;
    fetch("https://covid19-brazil-api.now.sh/api/report/v1",
        {
            method: "POST",
            body: data
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                var casos = JSON.stringify(data.data[i].cases);
                document.getElementById("casos").innerHTML +=
                    casos + "</br>";
            }
        })
        .catch(err => console.error(err));
}

function Mortes() {
    var data;
    fetch("https://covid19-brazil-api.now.sh/api/report/v1",
        {
            method: "POST",
            body: data
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            for (let i = 0; i < 10; i++) {
                var mortes = JSON.stringify(data.data[i].deaths);
                document.getElementById("mortes").innerHTML +=
                    mortes + "</br>";
            }
        })
        .catch(err => console.error(err));
}

function DadosRJ() {
    var data;
    fetch("https://covid19-brazil-api.now.sh/api/report/v1/brazil/uf/rj",
        {
            method: "POST",
            body: data
        })
        .then(function (res) { return res.json(); })
        .then(function (data) {
            var estado = JSON.stringify(data.state);
            var casos = JSON.stringify(data.cases);
            var mortes = JSON.stringify(data.deaths);
            var hora = JSON.stringify(data.datetime);
            document.getElementById("tabela").innerHTML +=
                "<td>" + estado + "</br>" + "</td>" +
                "<td>" + casos + "</br>" + "</td>" +
                "<td>" + mortes + "</br>" + "</td>"+
                "<td>" + hora + "</br>" + "</td>";
        })
        .catch(err => console.error(err));
}

Estados();
Casos();
Mortes();
DadosRJ();

