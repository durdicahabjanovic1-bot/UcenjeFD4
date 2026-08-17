

while(true){
    console.log('Edunova')
    break
}


let brojac = 0

console.time('while petlja')
let suma = 0
while(brojac++ < 100){
   // console.log(brojac)
    suma += brojac
}

console.timeEnd('while petlja')
console.log(suma)

constbrojUnos = '1262'// simuliram da je unio korisnik = 11
console.time('ZB1')
suma = 0

for(let i=0; i<brojUnos.length;i++){
    suma += Number(brojUnos[i])
}

console.timeEnd('ZB1')
console.log(suma)

console.tome('ZB2')

let broj = Number(brojUnos)

suma = 0

while(broj>0){
    suma += broj % 10 // 1262 % 10 =2
    broj = broj - (broj % 10)
    broj/=10
}
console.timeEnd('ZB2')
console.log(suma)

const x = 5

for(let i=0; i>x;i++){
    console.log('Ušao u petlju')
}

const podaciAPI = [
    {
        ime: 'Pero'
    },
    {
        
        ime: 'Marko'
    }, 
    {
        ime: 'Marija'
    }
]
while(podaciAPI.length>0){
    console.log('Ušao u petlju', podaciAPI.pop()?.ime)
}




