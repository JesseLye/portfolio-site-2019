var listChildren = document.getElementById("icons").children;

for(var i = 0; listChildren.length > i; i++){
  listChildren[i].addEventListener("mouseover", addClass.bind(this, listChildren[i]));
  listChildren[i].addEventListener("mouseout", removeClass.bind(this, listChildren[i]));
}

function addClass(element){
  element.classList.add("colored");
  element.classList.remove("no-color");
}

function removeClass(element){
  element.classList.add("no-color");
  element.classList.remove("colored");
}
