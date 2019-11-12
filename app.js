

window.onload = function(){
  /*
  let button = document.getElementById("search");

  button.addEventListener("click",function(){
    let xmls = new XMLHttpRequest();
    xmls.onreadystatechange =function(){
      if(this.readyState === 4)
      {
        if(this.status === 200){
          //var response = httprequest.responseText;
          alert("well Done");
        }
        else{
          console.log(error);
        }
      }
    }
    xmls.open('GET', url);
    xmls.send();
  })
  */
  let button = document.getElementById("search");
  fetch('http://localhost:8080/info2180-lab6/superheroes.php').then(response => response.text())
  .then(data => {
    console.log(alert(data));
  }).catch(error => {
    console.log(error);
  });

}
