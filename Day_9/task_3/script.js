let container = document.getElementById("container");

for (let i = 0; i < 36; i++) {
  let box = document.createElement("div");
  box.className = "box";
  container.appendChild(box);
}

let boxes = document.querySelectorAll(".box");

var bookedSeat = 0
var remaningSeat = 36

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    
    
      e.target.classList.toggle("booked");
      console.log(e.path[0].className);
      if (e.path[0].className=="box"){
        bookedSeat=bookedSeat-1
        remaningSeat=remaningSeat+1
      }else{
        bookedSeat=bookedSeat+1
        remaningSeat=remaningSeat-1
      }
      document.getElementById("bookedSeat").innerHTML = bookedSeat
      document.getElementById("remaningSeat").innerHTML = remaningSeat







  });
});