const quote = document.querySelector('#quote');
const next = document.querySelector('#next');
const text1 = `
Ao redor do mundo, os seres humanos sempre souberam que não eram as mais fortes criaturas na terra, sempre temem tudo ao seu redor, criando ferramentas  para suprir sua fraqueza. para todos humanos a sua origem é um mistério, sendo um dos assuntos de maior interesse dessa raça. por mais que a crença tenha diminuído com o passar dos anos, desde as primeiras civilizações, as pessoas já sabiam que não estavam sozinhos nesse mundo. 
Quando se deparavam com algum ser mais poderoso que eles normalmente os intitulavam. Para os seres menos poderosos, davam títulos como monstro, fera, aberração ou quem sabe até demônios.`
const text2 = `
Mas com o passar dos anos até mesmo a raça humana pode perceber que aviam criaturas muito poderosas, ENTIDADES, era possível ver que tais criaturas podiam manipular mais do que seus corpos, manipulavam a natureza em sua volta e possuíam habilidades inimagináveis, para estes, eles reservavam o título de DEUSES.`
const text3 = `
A raça humana não era capaz de compreende-los, então por medo de sua ira, eles os adoravam.
Como aquilo seria possível, como haveriam seres tão mais poderosos que eles, que até então eram o centro de tudo e pensavam que essa história do mundo estava sendo inteiramente escrita em torno deles, mas ai que eles começaram a perceber que eles sim faziam parte desta história, mas no fim, os protagonistas eram outros...`
function write () {
  const letras = [...]
  letras.forEach((letter, index) => {
  setTimeout(() => {
  quote.innerHTML += letter;
}, index * 10);
});
}
let count = 1;
next.addEventListener('click', () => {
  
});

write();