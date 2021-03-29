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
alert.innerHTML = `<p><strong>You have 2 unread messages</strong></p>
<p class="close">X</p>`;

const closeButton = document.querySelector(".close");

//Close alert box
closeButton.addEventListener("click", (e) => {

  alert.style.display = "none";
});


//Create modal window popup for messages
const bellDiv = document.querySelector("#bell-div");
const modal = document.querySelector("#modal");
const notify = document.querySelector(".notification");

bellDiv.addEventListener("click", (e) => {
  notify.style.display = "none";
  modal.innerHTML = `<p class="closeButton">X</p>
    <p class="modalMessages">Ron Weasley left you a message</p>
    <p class="modalMessages">New comment on your article</p>`;
  if (e.target !== modal) {
    modal.classList.toggle("hide");
    alert.style.display = "none";
  }
  e.stopPropagation();
});

//Close modal window
document.addEventListener("click", (e) => {
  if (e.target.textContent == "X") {
    modal.classList.add("hide");
  }
});

/********************************************************************
                   CODE FOR AUTOCOMPLETE DROPDOWN 
                Following code functions borrowed from
          https://www.w3schools.com/howto/howto_js_autocomplete.asp 
 
 ***********************************************************************/

function autocomplete(inp, arr) {
  /*the autocomplete function takes two arguments,
  the text field element and an array of possible autocompleted values:*/
  var currentFocus;
  /*execute a function when someone writes in the text field:*/
  inp.addEventListener("input", function (e) {
    var a, b, i, val = this.value;
    /*close any already open lists of autocompleted values*/
    closeAllLists();
    if (!val) {
      return false;
    }
    currentFocus = -1;
    /*create a DIV element that will contain the items (values):*/
    a = document.createElement("DIV");
    a.setAttribute("id", this.id + "autocomplete-list");
    a.setAttribute("class", "autocomplete-items");
    /*append the DIV element as a child of the autocomplete container:*/
    this.parentNode.appendChild(a);
    /*for each item in the array...*/
    for (i = 0; i < arr.length; i++) {
      /*check if the item starts with the same letters as the text field value:*/
      if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) {
        /*create a DIV element for each matching element:*/
        b = document.createElement("DIV");
        /*make the matching letters bold:*/
        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
        b.innerHTML += arr[i].substr(val.length);
        /*insert a input field that will hold the current array item's value:*/
        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
        /*execute a function when someone clicks on the item value (DIV element):*/
        b.addEventListener("click", function (e) {
          /*insert the value for the autocomplete text field:*/
          inp.value = this.getElementsByTagName("input")[0].value;
          /*close the list of autocompleted values,
          (or any other open lists of autocompleted values:*/
          closeAllLists();
        });
        a.appendChild(b);
      }
    }
  });
  /*execute a function presses a key on the keyboard:*/
  inp.addEventListener("keydown", function (e) {
    var x = document.getElementById(this.id + "autocomplete-list");
    if (x) x = x.getElementsByTagName("div");
    if (e.keyCode == 40) {
      /*If the arrow DOWN key is pressed,
      increase the currentFocus variable:*/
      currentFocus++;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 38) { //up
      /*If the arrow UP key is pressed,
      decrease the currentFocus variable:*/
      currentFocus--;
      /*and and make the current item more visible:*/
      addActive(x);
    } else if (e.keyCode == 13) {
      /*If the ENTER key is pressed, prevent the form from being submitted,*/
      e.preventDefault();
      if (currentFocus > -1) {
        /*and simulate a click on the "active" item:*/
        if (x) x[currentFocus].click();
      }
    }
  });

  function addActive(x) {
    /*a function to classify an item as "active":*/
    if (!x) return false;
    /*start by removing the "active" class on all items:*/
    removeActive(x);
    if (currentFocus >= x.length) currentFocus = 0;
    if (currentFocus < 0) currentFocus = (x.length - 1);
    /*add class "autocomplete-active":*/
    x[currentFocus].classList.add("autocomplete-active");
  }

  function removeActive(x) {
    /*a function to remove the "active" class from all autocomplete items:*/
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("autocomplete-active");
    }
  }

  function closeAllLists(elmnt) {
    /*close all autocomplete lists in the document,
    except the one passed as an argument:*/
    var x = document.getElementsByClassName("autocomplete-items");
    for (var i = 0; i < x.length; i++) {
      if (elmnt != x[i] && elmnt != inp) {
        x[i].parentNode.removeChild(x[i]);
      }
    }
  }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {
    closeAllLists(e.target);
  });
}
/********************************************************************* 
                END OF AUTOCOMPLETE DROPDOWN CODE          
***************************************************************** */



/*An array containing members of Hogwarts community:*/
const members = [
  "Harry Potter", "Ron Weasley", "Hermione Granger", "Severus Snape (Prof)", "Minerva McGonagall (Prof)", "Luna Lovegood", "Nevell Longbottom", "Draco Malfoy", "Rubeus Hagrid", "Alastor 'Mad-Eye' Moody (Prof)", "Albus Dumbledore (Headmaster)", "Fred Weasley", "George Weasley", "Ginny Weasley", "Percy Weasley", "Lavender Brown", "Parvati Patil", "Cedric Diggory", "Remus Lupin (Prof)", "Pansy Parkinson", "Seamus Finnigan", "Vincent Crabbe", "Gregory Goyle", "Cho Chang", "Roger Davies"
];

/*initiate the autocomplete function on the "myInput" element, and pass along the members array as possible autocomplete values:*/
autocomplete(document.getElementById("myInput"), members);



/* Code to pop up an alert message if the user tries to send a message with input fields left blank */
const memberName = document.getElementById("myInput");
const memberMessage = document.getElementById("myMessage");
const sendMessage = document.getElementById("sendMessage");

sendMessage.addEventListener("click", () => {
  if(memberName.value == "") {
    window.alert("The member name can not be blank. Please enter the name of user you want to send a message to");
  } else if(memberMessage.value == "") {
    window.alert(`The message field can not be blank. Please enter the message you want to send to ${memberName.value.toUpperCase()}`);
  } else {
    messageSent();
  }
});


//message sent confirmation and reset input fields
function messageSent() {
  window.alert(`Your message has been sent to ${memberName.value}`);
  memberMessage.value = "";
  memberName.value = "";
}

//settings section variables
const emailToggle = document.getElementById("email-toggle");
const profileToggle = document.getElementById("profile-toggle");
const timezone = document.getElementById("timezone");
const save = document.getElementById("save");
const cancel = document.getElementById("cancel");

//add event listener to save button to save settings to local storage
save.addEventListener("click", () => {
  emailToggle.checked == true ? localStorage.setItem("email", "checked") : localStorage.setItem("email", "unchecked");

  profileToggle.checked == true ? localStorage.setItem("profile", "checked") : localStorage.setItem("profile", "unchecked");

  index = timezone.selectedIndex;
  localStorage.setItem("timezone" , index);

  window.alert("Your settings have been saved");

});

cancel.addEventListener("click", resetSettings);

//load settings based on local storage values
function loadSettings() {
  if (localStorage.getItem("email") == "checked") {
    emailToggle.checked = true;
  }

  if (localStorage.getItem("profile") == "checked") {
    profileToggle.checked = true;
  }

  timezone.selectedIndex = parseInt(localStorage.getItem("timezone"));
}

// function to reset settings if cancel button is pressed
function resetSettings() {
  localStorage.removeItem("email");
  localStorage.removeItem("profile");
  localStorage.removeItem("timezone");
  
  emailToggle.checked = false;
  profileToggle.checked = false;
  timezone.selectedIndex = 0;

  window.alert("Your settings have been removed");
}

//call the function that loads previously saved preferences
loadSettings();
