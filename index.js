
function receivesAFunction(callback){
    return callback();

}

function returnsANamedFunction(callback2){
    return function callback2(){
      return  "a";
    }

}

function returnsAnAnonymousFunction(){
    return function(){}
    
}