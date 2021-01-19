function zad1() {
     alert("Бархатов Андрей");
 }
function zad2() {
 var text=document.getElementById("pole");
 text.value=Math.round(Math.random() * 100);
}
function zad3() {
 var pole1=document.getElementById("pole1"); 
     pole2=document.getElementById("pole2");
 if (pole1.value=="") {
     alert("Введите текст в первое поле!");
 }
 else {
 pole2.value=pole1.value;
 }
}
function delet(){
 var 
 pole1=document.getElementById('pole1'); 
 pole1.value="";
 pole2=document.getElementById('pole2');
 pole2.value="";
}
function table() {
 var 
 a=document.getElementById('row').value;
 b=document.getElementById('col').value;
     tbody = document.getElementById('form1');
 if (a>=1,b>=1) {
     tbody = document.getElementById('table1');
         for (i=1;i<=a;i++) {
             row = document.createElement("TR");
             for (j=1;j<=b;j++) {
                 td1 = document.createElement("TD");
                 td1.appendChild(document.createTextNode(Math.round(Math.random() * 10)));
                 row.appendChild(td1);
                 tbody.appendChild(row);
             }
         
         }
 }
 else {
     alert('Введите значения > 0	');
 }
}