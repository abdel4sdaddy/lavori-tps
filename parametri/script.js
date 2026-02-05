s = "";

var url = document.location.search.substring(1);

var url1 = url.split("&")[0];
var url2 = url.split("&")[1];
var url3 = url.split("&")[2];

var nome = url1.substr(5);
var cognome = url2.substr(5);
var eta = url3.substr(5);

s = s + "<tr>";
s = s + "<td>Nome</td>";
s = s + "<td>Cognome</td>";
s = s + "<td>Età</td>";
s = s + "</tr>";

s = s + "<tr>";
s = s + "<td>" + nome + "</td>";
s = s + "<td>" + cognome + "</td>";
s = s + "<td>" + eta + "</td>";
s = s + "</tr>";

document.getElementById("tabella1").innerHTML = s;
