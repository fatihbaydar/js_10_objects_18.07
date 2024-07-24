
//* ------------------------------------------------------------- */
//*                              OBJECTS                         */
//* ------------------------------------------------------------- */

//! Diziler sıralı bellek bölgeleridir ve sıralı bir şekilde ulaşılabilir. Ancak daha karmaşık veriler için Object(nesne) kullanılır

//! Objectlerde key-value ( Property) yapisi kullanilir. Bu o nesnenin özelliklerini belirtir.

//! Herhangi bir veriye erişim için anahtar(key) adı kullanılır.

//? Array'lerde ilişkisel veriler
//* Diziler : index numaraları ile erişim sağlanıyor. 0'dan başlayarak artan bir sıralama.

const ogrisim = ["ahmet","mehmet","saffet"]
const ogrSoyisim = ["yılmaz","can","yagız"]

console.log(`${ogrisim[1]} - ${ogrSoyisim[1]}`);

const person = {
    firstName: "Mustafa",
    lastName: "Baydar",
    birthYear: 1982,
};

console.log(person.firstName);
console.log(person.birthYear);
console.log(person["firstName"]);

let key = "first"
console.log(person[key + "Name"]); 

person.company = "yazılım"
person.married = true

person.birthYear=1980

console.log(person );

const student = {
    name: "Burak Baydar",
    adress:{
        city:"İstanbul"
    },
    scores:{
        math: [88,98,95],
        science:[85,90],
    },
};

console.log(student.name);
console.log(student.adress);
console.log(student.scores.math);
console.log(student["scores"]["math"]);
// console.log(student.scores[math]);

//* --------------------------------------------------------------*/
//*               Object Oluşturma Yöntemleri                    */
//* --------------------------------------------------------------*/

//! 3 farkli yöntem ile Object oluşturulabilir
//? 1. Object() class'ından türetme

const car = new Object()

car.brand ="Toyota";
car.model = 2002;
car.price = 450000;
console.log(car);
console.log(car.model);


//********************** */

//? 2. Constructor metodu ile Object oluşturma
//! OOP(Object Oriented Programming)

function PersonelList(id, ad, maas) {
    this.id = id;
    this.ad = ad;
    this.maas = maas;
  }
  //! this keywordu iiçerisinde bulundğumuz objeyi refere eder.
  //! Global alanda yazılan this ise haliyle global objeyi refere eder.
  //! window tarayacının herşeyini barından temel bir objedir.
  console.log(this); //? global alanda window nesnesini gösterir

  const personel1 = new PersonelList(1001,"Ali",1900);
  const personel2 = new PersonelList(1002,"Ahmet",2000);
  console.log(personel1);
  console.log(personel2);
  //! her nesne için ayrı bir kopya oluşturulan metodlar, bellek kullanımını arttırabilir

//********************** */
//? 3. Object Literal (en çok kullanacağımız ve tercih edilen yöntem)

let house = {}
house.room = 4,
console.log(house);

let personel3 ={
    name:"Ali",
    lastName:"Kara",
    birth:1997,
    isMarried: true,
    experiences: ["tester","developer","devops"],
    adres:{city:"Eskişehir",street:"Yalın",no:12},
    calculateAge:function(){
        return new Date().getFullYear()-this.birth;
    },
    selam:()=>{
        return"Merhaba";
    },
    arrowFunction: ()=> {
        return this.isMarried;
    }
};
  // new Date tüm tarihi üretir. "." ile ilgili içinde bulunan yıla ulaşılır.this.birth: bu objenin birth ü demek
  // arrow functionlarda this globali temsil eder.
  //! Arrow functionda this window objesine karşılık gelir.
  //! window objesi içinde isMarried isimli bir özellik bulamadığından undefined


//* ------- OKUMA/ERİŞME ----------
//? 1) . (dot) notasyonu ile erişim
console.log(personel3.name);
console.log(personel3.experiences);
console.log(personel3.experiences[2]);
console.log(personel3.adres);
console.log(personel3.adres.city);
console.log(personel3.calculateAge());
console.log(personel3.selam());
console.log(personel3.arrowFunction()); // this olduğu için arrowfunctionda undefined

//? 2) [] Square bracket ile erişim
console.log(personel3["adres"]);
console.log(personel3["adres"].city);
console.log(personel3["adres"]["city"]);

//? yeni bir özellik (property) ekleme
personel3.phone = "555-55-55";
personel3["nick"] = "mad";
console.log(personel3);

//? mevcut özelliği güncelleme
personel3.name = "Ayaz";
personel3["lastName"] = "Tekir";
console.log(personel3);

//? Bir objeyi kopyalama
const elemanListesi = personel3
console.log("personel listesi",personel3);
console.log("eleman listesi",elemanListesi);

personel3.name = "Doğan"
console.log("personel listesi",personel3);
console.log("eleman listesi",elemanListesi);

//! Shallow copying (sığ) koplayama
//! Yukarıdaki şekilde yapıldığında değişimlerden etkilenir

//? ----------------------------------------------- */
//? Kopyasının etkilenmesini istemiyorsak - Deep Copy yöntemi kullanılır.

let deepCopyPersonel3 = JSON.parse(JSON.stringify(personel3));
console.log("deepCopy",deepCopyPersonel3);
personel3.lastName="Avcı";
console.log("personel listesi",personel3);
console.log("deepCopy",deepCopyPersonel3);

//* ------------------------------------------------------ */
//*                     OBJECT METHODS
//* ------------------------------------------------------ */
//? İçiçe (nested) Object kullanımı

let employeeList = {
    person1: {
      name: "Abdulkadir",
      lastName: "baki",
      dateOfBirth: 1980,
      salary: 20000,
      job: "developer",
    },
    person2: {
      name: "elif",
      lastName: "akalın",
      dateOfBirth: 1990,
      salary: 20000,
      job: "developer",
    },
    person3: {
      name: "esra",
      lastName: "bilgin",
      dateOfBirth: 1985,
      salary: 21000,
      job: "devops",
    },
  };

  console.log(employeeList.person1);
  console.log(employeeList.person1.name);
  console.log(employeeList["person2"]["lastName"]);

//* -------------------------------------------------------- */
//*                   FOR - OF -IN YAPISI                    */
//* -------------------------------------------------------- */

//for...of
let numberAndLetters = ["a",2,"n",5];
for(const item of numberAndLetters){
    console.log(item);
}

//! for...of sıralı olan dizilerde kullanılır ama objectlerde daha komplex bir yapı olduğu için for-of kullanılmaz 

// for(const employee of employeeList){
//     console.log(employee);
// }
//!employeeList is not iterable hatası aldık.

//for...in
for(const i in employeeList){
    console.log(i);
    console.log(employeeList[i]);
}
//! for...in yapısı ile obje keyleri üzerinde döngü kurabiliriz ancak bu tavsiye edilen bir yöntem değildir. Bunun yerine obje özelliklerini diziye dönüştüren metodları kullanabiliriz

//? Obje özelliklerini diziye dönüştüren metodlar

//? Object.keys() metodu key değerlerini bir diziye aktarır

const keyDizisi = Object.keys(employeeList);
console.log(keyDizisi);

//? Object.values() metodu value değerlerini bir diziye aktarır
const valueDizisi = Object.values(employeeList);
console.log(valueDizisi);
const filteredDizi = valueDizisi.filter((emp)=>emp.job==="developer");
console.log(filteredDizi); 
// her bir empin jobu developer olanı filtrele. bu objenin value kısımları dizileştirildi ve dizileştirilmiş valuler üzerinde döngüye sokup sonuç aldık.

//? Object.entries() metodu key-value değerlerini bir diziye aktarır
const keyValueDizisi = Object.entries(employeeList);
console.log(keyValueDizisi);

//? böylece dizi iterasyon metodlarını kullanabiliriz
for(const employee of valueDizisi){
    console.log(employee);
}
const filteredDizi1 = valueDizisi.filter((emp)=>emp.job==="developer");
console.log(filteredDizi1);

//!!!   employeeList.forEach((m)=> console.log(m.name)) // Objelerde map,forEach,filter,reduce kullanılmaz. JSON bir dizi içinde obje olduğu için dizi metodları map,filter,reduce,forEach kullanılabiliyor.

//* ------------------------------------------------------ */
//*         JSON -Javascript Script Object Notation       */
//* ------------------------------------------------------ */

//? JSON ile farklı veri türleri barındırılabilir
//? Dillerden bağımsızdır.
//? nesnelerin (objelerin) temsil edilmesi için anahtar-değer çiftlerini kullanır. Bu, verilerin daha iyi organize edilmesini ve ilişkilendirilmesini sağlar.
//? JSON, veri  işleme açısından hızlıdır. Bu nedenle web uygulamalarında ve servislerde yaygın olarak kullanılır.

const employees = [
    {
      name1: "Abdulkadir",
      lastName: "baki",
      dateOfBirth: 1980,
      salary: 20000,
      job: "developer",
    },
    {
      name2: "elif",
      lastName: "akalın",
      dateOfBirth: 1990,
      salary: 20000,
      job: "developer",
    },
    {
      name3: "esra",
      lastName: "bilgin",
      dateOfBirth: 1985,
      salary: 21000,
      job: "devops",
    },
  ];
  
  //? JSON'a yeni eleman ekleme
  employees.push({
    name4: "nida",
    lastName: "güler",
    dateOfBirth: 1995,
    salary: 21000,
    job: "devops",
  });

  console.log(employees);

  employees.forEach((emp)=> console.log(emp.lastName));

  //*ornek employeeList dizisindeki name leri büyük harf yapıp ekrana bastırınız

  employees.map((emp) => console.log(Object.values(emp)[0].toUpperCase()));
//map işlemi dizinin legthi boyunca dönüyor.burada emp içerdeki   {
    //   name1: "Abdulkadir",
    //   lastName: "baki",
    //   dateOfBirth: 1980,
    //   salary: 20000,
    //   job: "developer",
    // }, gibi her bir objeyi temsil ediyor. bu objeyi diziye çevirmem lazım. burada value lazım yani sağ taraf. o yüzden object.values yaptık. oradan da names hangi indexteyse ona ulaştık ve büyük harf yaptık.

// * ======================================================
// *                  ITERATION
// * ======================================================

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

  //* Ornek1: people dizisindeki job ları göster

  people.forEach((kisi)=>console.log(kisi.job));

  //değerleri bir dizide toplamak istiyorsak return yapan map metodunu kullanabiliriz.
  const jobs = people.map((kisi)=>kisi.job);
  console.log(jobs); //burada bir diziye attık

  //* Ornek2 yasları 1 er arttır ve sonucu yeni diziye aktar
  const yasartır = people.map(kisi=>kisi.age +1);
  console.log(yasartır);

  //* Ornek3 yasları 1 er arttır, sonucu mevcut dizide kalıcı değiştir
  people.map((kisi,index,array) => (array[index].age+=1))
  console.log(people); // yukardaki orjinal diziyi de değiştirdi.