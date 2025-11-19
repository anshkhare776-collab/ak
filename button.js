const btn = document.querySelectorAll("button");
const no = document.querySelector(".no");
const count = document.querySelector(".count");
const clown = document.querySelector(".joker");
let hovercount = 0;
btn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.style.backgroundColor === "red") {
      item.style.backgroundColor = "black";
      item.innerHTML = "BYE";
      item.style.color = "white";
      
    
    }
    else if(item.style.backgroundColor === "black")2
    {
        item.style.backgroundColor = "";
        item.innerHTML = "YES";
        item.style.color = "black";
        clown.style.opacity = 0;
    } 
    else {
      item.style.backgroundColor = "red";
      item.innerHTML = "Eww";
      clown.style.opacity = 1;
    }
  });
  if (item.className == "no") {
    no.addEventListener("mouseenter", () => {
      const newPositionX =
        Math.random() * (window.innerWidth - item.offsetWidth);
      const newPositionY =
        Math.random() * (window.innerHeight - item.offsetHeight);
      no.style.position = "absolute";
      no.style.left = newPositionX + "px";
      no.style.top = newPositionY + "px";
      count.innerHTML = hovercount += 1;
    });
  }
});
