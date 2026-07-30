

const zadaci = {
  z1: (a, b) => {
    console.log('Zadatak 1');
    // početak 1 a i b su string
    if(!a || !b){
      rezultat.innerHTML = 'Obavezan unos A i B'
      return
    }

    const BrojaA = Number(a)
    const BrojaB = Number(b)
    if (!BrojaA || !BrojaB){
      rezultat.innerHTML = 'A ili B nije broj'
      return
    }
      let razlika = BrojaA - BrojaB
    console.log(razlika)
    if(razlika < 0){
      razlika = razlika * -1
    }
    rezultat.innerHTML = razlika

    rezultat.innerHTML = Math.abs(BrojaA - BrojaB)

    // kraj 1
  },
  z2: (a, b) => {
    console.log('Zadatak 2');
    // početak 2

    //Provjeri da li su vrijednosti unesene
    rezultat.innerHTML = ''

    if(!a.trim()){
      rezultat.innerHTML = 'Obavezan unos A'
      return
    }
    if(!b.trim()){
      rezultat.innerHTML = 'Obavezan unos B'
      return
    }



    //provjeri da li su brojevi
    const brojA = Number(a)
    const brojB = Number(b)
    if(!brojA){
      rezultat.innerHTML = 'B nije broj'
      return
    }


    //ispiši veći
   if (brojA === brojB){
    rezultat.innerHTML ='Jednaki su'
   }else if(brojA>brojB){
    rezultat.innerHTML=brojA
   }else{
    rezultat.innerHTML=brojB
   }
    // kraj 2
  },
// U rezultatu napravi onoliko div elemenata koliko je uneseno u polje A te svaki drugi div ima boju pozadine definiranu u polju B.</option>
  z3: (a, b) => {
    console.log('Zadatak 3');
    // početak 3 
    if(!a){
      rezultat.innerHTML = 'Nije unesena vrijednost a'
      return
    }
    if(!b){
      rezultat.innerHTML = 'Nije unesena vrijednost'
      return
    }
    const brojDivova = Number(a)
    if(!brojDivova){
      rezultat.innerHTML = 'a nije broj'
      return
    }
    if(brojDivova<1){
      rezultat.innerHTML = 'broj divova ne može biti manji od 1'
      return
    }

    if(brojDivova>100){
      rezultat.innerHTML = 'preveliki broj'
    }
    let divovi =''
    for(let i=0; i<brojDivova; i++){
      divovi += '<div>Bravo</div>'
      if(i % 2 === 0){
        divovi +=`
        <div style="background-color: ${b}">
        &nbsp
        </div>`
      }else{
        divovi += '<div>&nbsp;</div>'
      }

    }
    rezultat.innerHTML = divovi

    // kraj 3
  },
  z4: (a, b) => {
    console.log('Zadatak 4');
    if(!a && !b){
      rezultat.innerHTML = '😀😁'
    }
    

    // kraj 4
  },
  z5: (a, b) => {
    console.log('Zadatak 5');
    // početak 5
    if(!a)

    // kraj 5
  }
  // ovdje dodajemo nove zadatke
}


const rezultat = document.getElementById('rezultat');
document.getElementById('izvedi').addEventListener('click', () => {

  const a = document.getElementById('a').value;
  const b = document.getElementById('b').value;
  const zadatak = document.getElementById('zadatak').value;
  if (!(('z' + zadatak) in zadaci)) {
    rezultat.innerHTML = `Nepoznati zadatak ${zadatak}`;
    return;
  }
  // poziv funkcije u objektu
  zadaci['z' + zadatak](a, b);
});
