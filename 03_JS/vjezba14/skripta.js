
const korisnici = [
    {
        id: 1,
        ime: 'Ana',
        prezime: 'Kartek',
        godine: 25,
        admin: false
    },
    {
        id: 3,
        ime: 'Marko',
        prezime: 'Čutić',
        godine: 45,
        admin: true
     },
      {
        id: 4,
        ime: 'Nikolina',
        prezime: 'Čutić',
        godine: 49,
        admin: true
     },
        
    
        
]

console.table(korisnici)

for(let i = 0; i< korisnici.length; i++){
    console.log(korisnici[i].ime)
}
console.log('**************************')
korisnici.forEach(korisnik => console.log(korisnik.ime))

console.log('***********************')

korisnici.forEach(o => console.log(`${o.ime} ${o.prezime}`))

console.log('**************************')

korisnici.forEach(o => {
    let oslovi = 'Poštovan'
    if(o.ime.endsWith('a')){
        oslovi += 'a gospođo'
    }else{
        oslovi += 'i gospodine'
    }
    console.log(`${oslovi} ${o.ime} ${o.prezime}`)
})

console.log('*************************')

korisnici.forEach(o => console.log(`Poštovani{o.ime.en}`))

console.log('**********************')


const imena = korisnici.map(0 => o.ime)

console.table(imena)

console.log('*********************************')


korisnici.map(o => o.ime).forEach(s => console.log(s))


console.table(korisnici.map(o => o.ime +'' + o.prezime))

const mojaStruktura = korisnici.map(({id, ime, prezime}) => ({sifra: id, osoba: ime +''+ prezime, }))

console.table(mojaStruktura)

console.log(korisnici.find(o => o.id=== 3).ime)

console.log(korisnici.find(o => o.ime === 'Ana' && o.prezime === 'Kartek'))
console.log(korisnici.find(o => o.ime === 'Ana && o.prezime === 'Kartek).id)

console.log(mojaStruktura.findIndex(o => o. sifra === 200))

console.table(korisnici.filter(o => o.godine > 40))


console.log(korisnici.reduce((suma, o) => suma + o.godine, 0))

let suma = 0
korisnici.forEach(o => suma+=o.godine)
console.log(suma)

suma = 0
foe(let i = 0; i < korisnici.length;i++){
    suma += korisnici[i].godine
}
console.log(suma)

console.log(korisnici.some(o => o.admin) ? 'Ima admina' : 'Nema admina')

console.log