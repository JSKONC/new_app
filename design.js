
const EurLtlRatio = 3.4528;

function toEUR() {
  var ltl = document.getElementById("ltl").value;
  var result = ltl / EurLtlRatio;
  document.getElementById("eur").value = result;
}
function toLTL() {
  var eur = document.getElementById("eur").value;
  var result = eur * EurLtlRatio;
  document.getElementById("ltl").value = result;
}

function convert1() {
  var euras = document.getElementById("euras").value;
  var rezultatas = euras * EurLtlRatio;
  document.getElementById("litas").value = rezultatas;
}
function convert2() {
  var litas = document.getElementById("litas").value;
  var rezultatas = litas / EurLtlRatio;
  document.getElementById("euras").value = rezultatas;
}

const sarasas = [];

function readInputAndCalculate() {
  var ivedimasInput = document.getElementById("ivedimas");
  var ivedimasValue = ivedimasInput.value;
  var ivedimasNumber = parseInt(ivedimasValue);

  sarasas.push(ivedimasNumber);

  var view = "";
  for (i = 0; i < sarasas.length; i++) {
    var number = sarasas[i];
    var string = number.toString();
    view += string;
    }
    document.getElementById("readonly").value = view;
    getSum();
    getAvg();
  }
function getSum() {
  var sum = 0;
  for (i = 0; i < sarasas.length; i++) {
    sum += sarasas[i];
  }
  document.getElementById("suma").value = sum;
}

function getAvg() {
  var suma = 0;
  for (i = 0; i < sarasas.length; i++) {
    suma += sarasas[i];
  }
  var avg = suma / sarasas.length;
  document.getElementById("vidurkis").value = avg;
}






