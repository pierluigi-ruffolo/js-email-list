/* Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli in pagina all'interno
di una lista.
 */
/* Bonus

Abbellire con CSS o Bootstrap
Inserire un bottone che al click faccia il fetch altre 10 mail 
(sostituendo quelle precedenti)
Far sì che le email vengono stampati solo quando arrivano tutti i 
10 email */
const ElementUl = document.querySelector("ul");
const btnElement = document.querySelector(".btn");
const urlAPi = "https://flynn.boolean.careers/exercises/api/random/mail";

generaEmail();

function generaEmail() {
  const array = [];
  for (let i = 0; i < 10; i++) {
    axios
      .get(`${urlAPi}`)
      .then((element) => {
        const responseDati = element.data.response;
        array.push(responseDati);
        console.log(array);
      })
      .catch((errore) => {});
  }
}
