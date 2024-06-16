const form = document.getElementById("userDataForm");

async function fetchAndRenderData() {
  const response = await fetch();
  // `https://guestbookassignment-client.onrender.com/userdata` // want server url on render local while testing
  const ourList = await response.json();
  const listDiv = document.getElementById("display");
  listDiv.innerHTML = "";
  ourList.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.className = "userSubmittedContentDisplay";
    // would user comment be better split into two divs, info and message?
    itemDiv.innerHTML = `<p> ID: ${item.id}, Name ${item.name}, City: ${item.city}, Favourite Colour: ${item.fav_colour}, Favourite Number: ${item.fav_number}, Message: ${item.message}</p>`; //match these to data input and add Aria lebels here
    itemDiv.ariaLabel = `${item.name} from ${item.city} ,who likes the colour ${item.fav_colour}, says ${item.message}.`;
    //adding delete and like buttons would be done here, complete with governing logic.maybe create itemDiVText and itemDivButtons to seperate and control layout and flow
    listDiv.appendChild(itemDiv);
  });
}
fetchAndRenderData();
form.addEventListener("submit", submitButton);

async function submitButton(event) {
  event.preventDefault();
  const formData = new FormData(form);
  const formValues = Object.fromEntries(formData);
  try {
    const response = await fetch(
      `https://guestbookassignment-client.onrender.com/userdata`, //change for site
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(formValues),
      }
    );

    const data = await response.json();

    if (data.success) {
      console.log("Data saved - nice one");
      fetchAndRenderData();
    } else {
      console.log("fluffed it");
    }
  } catch (error) {
    console.log("erroneous", error);
  }
}
