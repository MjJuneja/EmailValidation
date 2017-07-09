function validateEmail(email) {
  var re = /^\w+@[a-zA-Z]+[.+a-zA-Z]{0,3}\.[a-zA-Z]{2,3}$/;
          
  return re.test(email);
}

function validate(Value,index,msg="invalid"){
//    var index =0;
//   var emails = document.getElementsByClassName("email");
//    Array.prototype.forEach.apply(emails,[function(x){
//        var index1 = index+1;
//        if(Array.prototype.fin)
        var ele = document.getElementById("result"+index);
       if(!validateEmail(Value)){
         
           ele.classList.add("red");
           ele.classList.remove("green");
           ele.innerHTML = msg;
       }
        else{
//           var ele= document.getElementById("result"+index)
           ele.innerHTML = "valid email";
          ele.classList.add("green");
            ele.classList.remove("red");
            
        }
//    }]);
}

window.addEventListener("load",function(){
//  var func = setInterval(validate, 1000);
//
//
//    document.getElementById("stop").addEventListener("click",stop);
//    function stop(){
//        clearInterval(func);
//    }
    var msg="";
    var emails = document.getElementsByClassName("email");
    Array.prototype.forEach.apply(emails,[function(x){
        x.addEventListener("keyup",function(){
            var index = Array.prototype.findIndex.apply(emails,[function(obj){
                return obj==x;
            }]);
            if(this.getAttribute("data-message")!=undefined){
             msg = this.getAttribute("data-message");
             validate(x.value,index+1,msg);}
            else{
                 validate(x.value,index+1);
            }
//            console.log(index);
           
            
        })
    }]);
});

