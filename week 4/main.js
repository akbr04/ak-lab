var ourRequest = new XMLHttpRequest();
ourRequest.open('GET',);
ourRequest.onload = function() {
console.log(ourRequest.responseText);
};
ourRequest.send();
