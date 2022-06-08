// var form = document.querySelector("myform");
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello world!';
let nominal = 0;
let real = 0;
let remain = 0;

//document.getElementById("btn").addEventListener("click", cal);

function cal() {
  const start = document.getElementById("start").value;
  const deduct = document.getElementById("deduct").value;
  const remand = document.getElementById("remand").value;
  const plea = document.querySelector("input[name='plea']:checked").value;
/*   const pleaEle = document.getElementsByName("plea");  
  for (let i = 0; i < pleaEle.length; i++) {
	if (pleaEle[i].checked()) {
	plea = pleaEle[i].value;	
	}  
  } */
  
  if (plea === "PG") {
    nominal = start * 2 / 3 - deduct;
  } else if (plea === "PNG") {
    nominal = start - deduct;
  }
  
  real = nominal * 2 / 3 - remand;
  remain = real - remand;
  
  if (remand > nominal) {
	real = remand;
	remain = 0;
  }　else if (remain < 1) {
	real = remand + 1;
	remain = 1;
  }
  
  return nominal, real, remain;	
}
nominal = cal()[0];
real = cal()[1];
remain = cal()[2];

document.getElementById("nominal").innerHTML = "Nominal sentence: " + Number.parseFloat(nominal).toFixed(1) + " months.";
document.getElementById("real").innerHTML = "Real sentence: " + Number.parseFloat(real).toFixed(1) + " months.";
document.getElementById("remain").innerHTML = "Remaining sentence: " + Number.parseFloat(remain).toFixed(1) + " months.";