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


document.getElementById('cartTn').innerHTML = torder;
document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);

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
    one: document.querySelector('#order1'),
    two: document.querySelector('#order2'),
    three: document.querySelector('#order3'),
    four: document.querySelector('#order4'),
    five: document.querySelector('#order5'),
    six: document.querySelector('#order6'),
    seven: document.querySelector('#order7'),
    eight: document.querySelector('#order8')
  }

  order.one.addEventListener('click', function() {
    torder++
    $total += 12.95;
    receipt += "Kung Pao Chicken, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.two.addEventListener('click', function() {
    torder++
    $total += 13.95;
    receipt += "Sweet and Sour Chicken, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.three.addEventListener('click', function() {
    torder++
    $total += 12.95;
    receipt += "General Tso's Chicken, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.four.addEventListener('click', function() {
    torder++
    $total += 12.95;
    receipt += "Teriyaki Chicken, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.five.addEventListener('click', function() {
    torder++
    $total += 12.95;
    receipt += "Dim Sum, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.six.addEventListener('click', function() {
    torder++
    $total += 3.50;
    receipt += "Boba Tea, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.seven.addEventListener('click', function() {
    torder++
    $total += 2.50;
    receipt += "Tea, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
  order.eight.addEventListener('click', function() {
    torder++
    $total += 1.00;
    receipt += "Soda, ";
    localStorage.setItem('order$', $total);
    localStorage.setItem('order_total', torder);
    localStorage.setItem('order', receipt);
    document.getElementById('cartTn').innerHTML = torder;
    document.getElementById('cartCn').innerHTML = parseFloat($total).toFixed(2);
  })
}

});
