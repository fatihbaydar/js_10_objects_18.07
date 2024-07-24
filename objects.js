//* ------------------------------------------------------------- */
//*                              OBJECTS                         */
//* ------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ancak daha karmaşık veriler için Object(nesne) kullanılır

//! Objectlerde key-value ( Property-value) yapisi kullanilir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için property (key) adı kullanılır.

//? Array'lerde ilişkisel veriler
//* Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

const ogrisim = ["ahmet", "mehmet", "ali"]
const ogrSoyisim = ["Yılmaz", "can", "canlı"]

console.log(`${ogrisim[1]} - ${ogrSoyisim[1]}`);

//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/

const car = new Object();

car.brand = "BMW";
car.model = 1990;
car.price = 10000;
console.log(car);
console.log(car.model);

// constructor ile object oluşturma
// OOP (object Oriented Programming)

function PersonelList(id,ad,maas){
    this.id = id;
    this.ad = ad;
    this.maas = maas;
}

const personel1 = new PersonelList(1001, "Ali",10000)
const personel2 = new PersonelList(1020, "Uğur",15000)
console.log(personel1);
console.log(personel2);

///

let house = {}
house.room = 4;
console.log(house);

let person = {
    name : "Fatma",
    lastName : "Kara",
    birth: 1990,
    isMarried: true,
    experience : ["tester", "developer", "devops"],
    adres: {city:"izmir", street: "begonya", no: 7},
    calculateAge : function(){
        return new Date().getFullYear() - this.birth
    },
    selam: () =>{
        return "Merhaba"
    },
    arrowFunction: () =>{
        return this.isMarried
    }
}

console.log(person.name);
console.log(person.birth);
console.log(person.experience[0]);
console.log(person.calculateAge());

console.log(person["birth"]);

person.phone = "555-55-55";
person["nick"] = "sopalı";

// kopyalama

const people = [
    {
      name: "Mustafa",
      surname: "Gertrud",
      job: "developer",
      age: 30,
    },
    {
      name: "Halo",
      surname: "Müller",
      job: "tester",
      age: 35,
    },
    {
      name: "Mehmet",
      surname: "Rosenberg",
      job: "team lead",
      age: 40,
    },
    {
      name: "Ozkul",
      surname: "Gutenberg",
      job: "developer",
      age: 26,
    },
  
    {
      name: "Baser",
      surname: "Shaffer",
      job: "tester",
      age: 24,
    },
  ];
  
  console.log(people);

  console.log(" ");
