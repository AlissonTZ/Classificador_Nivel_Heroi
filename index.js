let nomeDoHeroi = "Elaia";
let xpDoHeroi = parseInt(Math.random() * 20000) + 1;
console.log(xpDoHeroi);

let rankAtual = "";

switch (true) {
  case xpDoHeroi < 1000:
    rankAtual = "Ferro";
    break;
  case xpDoHeroi > 1000 && xpDoHeroi < 2001:
    rankAtual = "Bronze";
    break;
  case xpDoHeroi > 2000 && xpDoHeroi < 5001:
    rankAtual = "Prata";
    break;
  case xpDoHeroi > 5000 && xpDoHeroi < 7001:
    rankAtual = "Ouro";
    break;
  case xpDoHeroi > 7000 && xpDoHeroi < 8001:
    rankAtual = "Platina";
    break;
  case xpDoHeroi > 8000 && xpDoHeroi < 9001:
    rankAtual = "Diamante";
    break;
  case xpDoHeroi > 9000 && xpDoHeroi < 10001:
    rankAtual = "Ascendente";
    break;
  case xpDoHeroi > 10000 && xpDoHeroi < 12001:
    rankAtual = "Imortal";
    break;
  default:
    rankAtual = "Radiante. Parabéns, você chegou ao rank máximo";
}

console.log("Rank atual do " + nomeDoHeroi + " é " + rankAtual + ".");
