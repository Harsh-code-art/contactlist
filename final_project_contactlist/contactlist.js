const addcontact = document.querySelector(".addcontact");
const new_contact = document.querySelector(".add_contacts");
const save_button = document.querySelector(".saves");
const first_name = document.querySelector("#details");
const last_name = document.querySelector(".details");
const mobile_info = document.querySelector(".hide_detail");
const mobile_info2 = document.querySelector(".hide_details");
const email_info = document.querySelector(".email");
const email_info2 = document.querySelector("#email");
const enterselection = document.querySelector(".select_sim");
const showcontacts = document.querySelector(".selection");
const show_details = document.querySelector(".contact_list");
const back_button = document.querySelector(".back_img");
const insert_image = document.querySelector("#inputfile");
const image_display = document.querySelector(".camera");
const search_contact = document.querySelector(".searching");
const detail_box = document.querySelector(".detail_box");
const access_detail = document.querySelector(".new_div");
const user_detail = document.querySelector(".all_detailss");

// search_contact.addEventListener('keypress',searchcontact);
insert_image.addEventListener("change", displayimage);
showcontacts.addEventListener("change", displaycontacts);
addcontact.addEventListener("click", addcontacts);

var inserting_image;
function displayimage(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function (e) {
      inserting_image = e.target.result;
      image_display.style.backgroundImage = `url(${inserting_image})`;
      image_display.textContent = "";
    };
    reader.readAsDataURL(file);
  }
}

back_button.addEventListener("click", () => {
  new_contact.style.display = "none";
  first_name.value = "";
  last_name.value = "";
  mobile_info.value = "";
  mobile_info2.value = "";
  email_info.value = "";
  email_info2.value = "";
  image_display.style.backgroundImage = "";
  inserting_image = "";
});
var sim1 = [];
let sim2 = [];
let first_names, last_names;
save_button.addEventListener("click", () => {
  first_names = first_name.value.trim();
  last_names = last_name.value.trim();
  let mobile_information = mobile_info.value.trim();
  let mobile_information2 = mobile_info2.value.trim();
  let email_information = email_info.value.trim();
  let email_information2 = email_info2.value.trim();

  // if (
  //   first_names == "" ||
  //   last_names == "" ||
  //   mobile_information == "" ||
  //   email_information == "" ||
  //   email_information2 == "" ||
  //   mobile_information2 == ""
  // ) {
  //   alert("please enter all details");
  //   return;
  // }

  let newcontacts = {
    first_names,
    last_names,
    mobile_information,
    email_information,
    email_information2,
    mobile_information2,
    inserting_image,
  };
  let trim_selection = enterselection.value;
  if (trim_selection == "sim1") {
    sim1.push(newcontacts);
    console.log(sim1);
  } else {
    sim2.push(newcontacts);
  }

  new_contact.style.display = "none";
  first_name.value = "";
  last_name.value = "";
  mobile_info.value = "";
  mobile_info2.value = "";
  email_info.value = "";
  email_info2.value = "";
  image_display.style.backgroundImage = "";
  inserting_image = "";
  displaycontacts();
});

let contactlist, click_div, simselection;
function displaycontacts() {
  simselection = showcontacts.value;
  show_details.innerHTML = "";
  contactlist = simselection === "SIM1" ? sim1 : sim2;

  if (contactlist.length == 0) {
    show_details.innerHTML = "<li>No contacts</li>";
  } else {
    contactlist.forEach((contact) => {
      click_div = document.createElement("span");
      click_div.classList.add("clicks");
      let image_div = document.createElement("div");
      image_div.classList.add("newdiv");
      let li = document.createElement("li");

      if (contact.inserting_image) {
        image_div.style.backgroundImage = `url(${contact.inserting_image})`;
      }

      let span = document.createElement("span");
      span.classList.add("span");
      span.textContent = `${contact.first_names} ${contact.last_names}`;

      span.appendChild(click_div);
      li.appendChild(image_div);
      li.appendChild(span);
      li.appendChild(click_div);
      show_details.appendChild(li);
    });

    click_div.addEventListener("click", () => {
      detail_box.style.display = "none";
      access_detail.style.display = "block";
      user_detail.innerHTML = "";
      contactlist = simselection === "SIM1" ? sim1 : sim2;

      if (contactlist.length == 0) {
        user_detail.innerHTML = "no details";
      } 
      else {
        contactlist.forEach((contact) => {
          let new_li = document.createElement("li");
          new_li.textContent = `

          ${contact.first_names} 
          ${contact.last_names} 
          ${contact.mobile_information} 
          ${contact.mobile_information2} 
          ${contact.email_information} 
          ${contact.email_information2}
          `;

          user_detail.appendChild(new_li);
        });
      }
    });
  }
}

function addcontacts() {
  new_contact.style.display = "block";
}
