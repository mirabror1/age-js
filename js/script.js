 let userName = prompt('Ismingiz')
 let age = +prompt('Yoshingiz')

 let userName1 = prompt('Ismingiz')
 let age1 = +prompt('Yoshingiz')

 let user1 = {
     name: userName,
     age: age,
 }

 let user2 = {
     name: userName1,
     age: age1
 }

 if (user1.age > user2.age) {
     alert("Birinchi Ikkinchi dan katta")
 } else if (user1.age < user2.age) {
     alert("Birinchi Ikkinchi dan kichkina")
 } else if (user1.age == user2.age) {
     alert("Birinchi va Ikkinchi ning yoshlari teng")
 } else {
     alert('Error')
 }