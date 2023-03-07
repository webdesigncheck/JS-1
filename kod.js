function myFunction() {
   var broj = prompt("Unesite broj od 1 do 5");
   var x = (broj)
   if (x > 0 && x <= 5) {
      var citat = "Velika je nesreća kad čovek ne zna šta hoće, a prava katastrofa kad ne zna šta može.";
   document.write(citat + "<br>")
   }
   if (isNaN(x)) {
      alert("Niste uneli broj!")
   }
   if (x>5) {
      alert("Unesen broj mora biti između 1 i 5!");
   }
}


