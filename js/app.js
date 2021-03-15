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
