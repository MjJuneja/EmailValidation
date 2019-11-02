function validateEmail(email) {
  var re = /^\w+@[a-zA-Z]+[.+a-zA-Z]{0,3}\.[a-zA-Z]{2,3}$/;

  return re.test(email);
}

function validateDoc(Value, index, msg = "invalid") {
  var elem = document.getElementById("result" + index);
  if (!validateEmail(Value)) {

    elem.classList.add("red");
    elem.classList.remove("green");
    elem.innerHTML = msg;
  } else {
    elem.innerHTML = "valid email";
    elem.classList.add("green");
    elem.classList.remove("red");

  }
  //    }]);
}

window.addEventListener("load", function () {

  var msg = "";
  var emails = document.getElementsByClassName("email");
  Array.prototype.forEach.apply(emails, [function (x) {
    x.addEventListener("keyup", function () {
      var index = Array.prototype.findIndex.apply(emails, [function (obj) {
        return obj == x;
      }]);
      if (this.getAttribute("data-message") != undefined) {
        msg = this.getAttribute("data-message");
        validateDoc(x.value, index + 1, msg);
      } else {
        validateDoc(x.value, index + 1);
      }


    })
  }]);
});
