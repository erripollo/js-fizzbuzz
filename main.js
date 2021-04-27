//Scrivi un programma che stampi i numeri da 1 a 100,
for (var i = 0; i < 100; i++){
   var number = i + 1

   if (number % 3 == 0 && number % 5 == 0){  //Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.
       number = 'FizzBuzz'
   }else if (number % 3 == 0){  //per i multipli di 3 stampi “Fizz” al posto del numero e
       number = 'Fizz'
   }else if (number % 5 == 0){  //per i multipli di 5 stampi Buzz.
       number = 'Buzz'
   }
   
   console.log(number);
}





