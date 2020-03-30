
var pronoun = ['the', 'our'];
var adj = ['great', 'big'];
var noun = ['jogger', 'racoon'];

const generatorFun = () => {
    var fianlOne = ' ';
    for (var x = 0; x < pronoun.length; x++) {
        for (var y = 0; y < adj.length; y++) {
            for (var z = 0; z < noun.length; z++) {
                fianlOne = fianlOne + pronoun[x] + adj[y] + noun[z] + ".com" + ' ';
            }
        }
    }
document.getElementById("app").innerHTML =fianlOne;
}
