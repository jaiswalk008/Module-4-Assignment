(function(){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for(var i in names){
    var firstName= names[i].charAt(0).toLowerCase();
    if(firstName=='j'){
      console.log("Good Bye " +names[i]);
    }else{
      console.log("Hello "+names[i]);
    }
  }
})();
