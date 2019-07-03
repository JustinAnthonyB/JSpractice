    var inps = prompt("STARTING NUMBER?");
    var inpe = prompt("ENDING NUMBER?");
    var inp1 = prompt("SKIPPED NUMBER 1?");
    var inp2 = prompt("SKIPPED NUMBER 2?");
    var i = 0;

    do
    {
        if (inps > inpe || (inpe - inps) > 9){
       
        var inps = prompt("REENTER STARTING NUMBER?");
        var inpe = prompt("REENTER ENDING NUMBER?");
}
 else if (i === inp1){continue}

else{

    i++
    h1.innerHTML += i + " " 
}
    }
while (i < inpe);

var utxt = prompt("ENTER TEXT");
var unum = prompt("ENTER A NUMBER");

if (unum <= 0){ 
    h2.innerHTML = "Error"}

else
{
    for (var i = 0; i < unum; i++) { 
        h2.innerHTML += utxt + "<br>"};
    }

var name = "Justin";
var sid = "925081";
console.log(name == sid)
console.log(sid < (sid*2))
console.log(name == "Justin")