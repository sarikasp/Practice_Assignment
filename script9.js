"<h2> There once was a [adjective] programmer who wanted to use javascript to [verb]the [noun].</h2><br>"
var adjective = prompt("Please enter the adjective");
var noun = prompt("Please enter the noun");
var verb = prompt("Please enter the verb");
var sentence = "<h2>There was a "+adjective +" programmer<br>";
sentence += " who wanted to use javascript to <br>"+verb + " the " ;
sentence +=noun;
document.write(sentence);
