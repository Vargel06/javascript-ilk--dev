let userName = prompt("Adınız nedir?") 

let myName = document.querySelector('#myName') 

myName.innerHTML = `${userName}` 


//Aşağıdaki yöntem ile fonksiyon kullanmayınca anlık olarak saat ve günü çekebiliyor fakat ilerlemesini saglayamıyordum. Bu nedenle fonksiyon kullanmam gerekti.
function showTime() {
let d = new Date();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];
let time = document.querySelector('#myClock')

time.innerHTML = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()} ${days[d.getUTCDay()]}`
setTimeout(showTime, 1000); // setTimeout alternatifi => setInterval(tarihSaat, 1000); 
}
showTime(); //Fonksiyonu çağırırız.

