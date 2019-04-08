document.addEventListener('DOMContentLoaded' ,function() {
  console.log("DOM is loaded my dude");
  var location = {
    zip: document.querySelector('#zip'),
    state: document.querySelector('#state'),
    city: document.querySelector('#city')
  }

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
});
