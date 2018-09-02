

const container = document.getElementById('but');
const container2 = document.getElementById('getvalue');
let view = document.getElementById('inputvalue');

function Calculator (containerHtml1, containerHtml2) {
  this.result = '';
  this.containerHtml1 = containerHtml1;
  this.containerHtml2 = containerHtml2;
  containerHtml1.addEventListener('click', this.handler.bind(this));
  containerHtml2.addEventListener('click', this.operation.bind(this));
 
}
Calculator.prototype.handler = function(event) {
  const value = event.target.dataset.value;
  this.result += value;
 view.innerHTML = this.result;
 

}
Calculator.prototype.operation = function() {
   this.res = eval(this.result);
   view.innerHTML = this.res;
}

const calculator1 = new Calculator(container, container2);