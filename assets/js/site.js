//localStorage.clear();
var $total = localStorage.getItem('order$');
var torder = localStorage.getItem('order_total');
var receipt = localStorage.getItem('order');



document.addEventListener('DOMContentLoaded' ,function() {
  console.log("DOM is loaded my dude");
  var location = {
    zip: document.querySelector('#zip'),
    state: document.querySelector('#state'),
    city: document.querySelector('#city')
  }

if (torder === null) {
    torder = 0;
  }
if ($total === null) {
    $total = 0;
}
if (receipt === null) {
  receipt = "";
}
if (typeof $total === 'string') {
  $total = Number.parseFloat($total);
}


document.getElementById('cartT').innerHTML += torder;
document.getElementById('cart$').innerHTML += parseFloat($total).toFixed(2);

if(document.querySelector('#zip')) {
  document.getElementById('Rsummary').innerHTML += receipt;

console.log(localStorage.getItem('order_total'));

function rmnumber(value) {
    return value.replace(/\D/g,'');
}

function equals(value,condition) {
    return value === condition;
}

function validate(value,check,condition) {
  if (equals(typeof(check.test),'function')) {
    return check.test(value);
  }
  else if (equals(typeof(check),'function'))
  {
    return check(value,condition);
  }
  else
  {
    return false;
  }
}
function validate_zip(value){
  var zip = rmnumber(value);
  return validate(zip.length,equals,5);
};

if('fetch' in window) {
  console.log("Fetch is supported my dude");
  location.city.classList.add('fade-out');
  location.city.classList.add('fade-out');

  var zip;
  location.zip.addEventListener('keyup', function(e) {
    if (validate_zip(location.zip.value) && zip !== location.zip.value){
      zip = location.zip.value;
      fetch('http://api.zippopotam.us/us/' + location.zip.value)
      .then(function(response) {
        if (response.ok){
          return response.json();
        }
        throw Error('Zip has no data' + location.zip.value)
      })
        .then(function(fetchv) {
          location.city.value = fetchv.places[0]["place name"];
          location.state.value = fetchv.places[0]["state"];
          location.city.classList.add('fade-in');
          location.state.classList.add('fade-in');
        })
        .catch(function(error) {
          console.log(error);
          location.city.value = '';
          location.state.value = '';
          location.city.classList.add('fade-in');
          location.state.classList.add('fade-in');
        });
      }
  });
}
}
if(document.querySelector('#order1')) {
  var order = {
    one: document.querySelector('#order1')
  }

  order.one.addEventListener('click', function() {
    torder++
    $total += 12.95;
    receipt += "Kung Pao Chicken, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    console.log(receipt);
    console.log(torder);
    console.log($total.toString());
    cart.innerHTML -= torder;
    cart.innerHTML += torder;
    cart$.innerHTML -= parseFloat($total).toFixed(2);
    cart$.innerHTML += parseFloat($total).toFixed(2);
  })
}

});
