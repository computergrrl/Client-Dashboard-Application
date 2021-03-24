const trafficLinks = document.querySelectorAll(".traffic-nav-link");
const alert = document.getElementById("alert");


//first loop to add event listener to all the chart nav links
for (let link of trafficLinks) {
  link.addEventListener("click", (e) => {

    //nested loop to remove and add classes when link is clicked
    for (let link of trafficLinks) {
      if (link.textContent === e.target.textContent) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }

  });
}

//create alert message 
alert.innerHTML = `<p><strong>You have unread messages</strong></p>
<p class="close">X</p>`;

const closeButton = document.querySelector(".close");

//Close alert box
closeButton.addEventListener("click" , (e)=>{

  alert.style.display = "none";
} );

const bellDiv = document.querySelector("#bell-div");
const modal = document.querySelector("#modal");

bellDiv.addEventListener("click", (e) => {
  modal.innerHTML = `<p class="closeButton">X</p>
    <p class="modalMessages">Ron Weasley left you a message</p>
    <p class="modalMessages">New comment on your article</p>`;
  if(e.target !== modal) {
    modal.classList.toggle("hide");
  }
  e.stopPropagation();
});


document.addEventListener("click", (e) => {
  if (e.target.textContent == "X") {
    modal.classList.add("hide");
  }
});