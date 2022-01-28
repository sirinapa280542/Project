 async function loadTable() {

     const Respone = await fetch('http://localhost/project/');
     const json = await Respone.json();


     document.getElementById("c").innerHTML = trHTML;

 }
 loadTable();