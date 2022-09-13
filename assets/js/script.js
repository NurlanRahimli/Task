var total = 1
for (let i = 10; i < 15; i++) {
    total=total*i
}
console.log(total);

function Hasil() {
    var num1 = document.getElementById("num1").value
    var num2 = document.getElementById("num2").value
    var hasil = 0
    if (num1!=null) {
        if (num2!=null) {
            var hasil = num1*num2
                alert( `${hasil}`)
        }
    }
}



//Arasdirmaga verdiyiviz qaydadi prosto internetden goturdum bilmirem bunu ona gore uzlu sayin

{/* <script>
"use strict";
  function Hayvan() {
    this.renk = ["siyah", "beyaz"];
  }
  function Kedi() {
    Hayvan.call(this);     // Constructor stealing - Yapıcı çalma
    //Hayvan.apply(this);  // Constructor stealing 
  }

  var vKedi = new Kedi();
  vKedi.renk.push("sarı");
  console.log(vKedi.renk);  // siyah, beyaz, sarı

  var wKedi = new Kedi();
  console.log(wKedi.renk);  // siyah, beyaz
</script> */}


//buda inheritdi sef elemiremse bunuda internetden goturdum ama ne oldugunu bilmirem buna gorede uzrlu sayin

{/* <script>
"use strict";
  function Hayvan(a) {
    this.ad = a;
  }
  Hayvan.prototype.adiNe = function() {
    return this.ad;
  }
  function Kedi(adi) {
    Hayvan.call(this, adi);       // Constructor stealing - Yapıcı çalma
    //Hayvan.apply(this, [adi]);  // Constructor stealing - Yapıcı çalma

    this.renk = "Sarı";
  }

  var vKedi = new Kedi("Boncuk");
  console.log(vKedi.ad);       // Boncuk
  console.log(vKedi.renk);     // Sarı
  console.log(vKedi.adiNe());  // ???
</script> */}



//qaydalara geldikde ise bunun ustunde ne yazilib onu deyecem eger sorussaz cunki bilmirem bu nedi buna gorede uzrlu sayin