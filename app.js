const process = () =>
{
  var s = "blank";
  if(document.getElementById("inp").value)
  {
    s=document.getElementById("inp").value
  }

  showResult(s);
}
function showResult(str) {
  if (str.length==0) {
    document.getElementById("searchResult").innerHTML="";
    document.getElementById("searchResult").style.border="0px";
    return;
  }

  xmlhttp=new XMLHttpRequest();
  xmlhttp.onreadystatechange=function() {
    if (this.readyState==4 && this.status==200) {
      document.getElementById("searchResult").innerHTML=this.responseText;
      document.getElementById("searchResult").style.border="none";

    }
  }
  xmlhttp.open("GET","superheroes.php?query="+str,true);
  xmlhttp.send();
}
