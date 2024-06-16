// import { db } from "../server/server";

const form = document.getElementById("userDataForm");

// async function updateLikes(updatedItem) {
//   const dataUpdate = { id: item.id, likes: item.likes };

//   try {
//     const response = await fetch(
//       `https://guestbookassignment-client.onrender.com/userdata`, //change for site
//       {
//         method: "POST",
//         headers: {
//           "content-type": "application/json",
//         },
//         body: JSON.stringify(dataUpdate),
//       }
//     );

//     const data = await response.json();

//     if (data.success) {
//       console.log("Data saved - nice one");
//       return true;
//     } else {
//       console.log("fluffed it");
//       return false;
//     }
//   } catch (error) {
//     console.log("erroneous", error);
//     return false;
//   }
// }

async function fetchAndRenderData() {
  ///creates display on site after submission
  const response = await fetch(
    `https://guestbookproject.onrender.com/userdata`
  ); // want server url on render local while testing
  const ourList = await response.json();
  const listDiv = document.getElementById("display"); //main box
  listDiv.innerHTML = "";
  ourList.forEach((item) => {
    const itemDiv = document.createElement("div"); //box for submitted data, maybe redundant
    itemDiv.className = "userSubmittedContentDisplay";
    const submittedDataDiv = document.createElement("div"); //box for user profile and message
    submittedDataDiv.className = "submitted-data-div";
    const dataDiv = document.createElement("div"); //profile data
    dataDiv.className = "data-div";
    dataDiv.innerHTML = `<p> ID: ${item.id} <br> Name ${item.name} <br> City: ${item.city}<br> Favourite Colour: ${item.fav_colour} <br> Favourite Number: ${item.fav_number}</p>`; //switch commas for breaks, maybe revert
    const messageDiv = document.createElement("div"); //user messsage
    messageDiv.className = "message-div";
    messageDiv.innerHTML = `<p>Message: ${item.message}</p>`;
    itemDiv.ariaLabel = `${item.name} from ${item.city} ,who likes the colour ${item.fav_colour}, says ${item.message}.`;
    submittedDataDiv.appendChild(dataDiv);
    submittedDataDiv.appendChild(messageDiv);
    const buttonsDiv = document.createElement("div"); //butons prepped but not appended
    buttonsDiv.className = "buttons-div";
    buttonsDiv.innerText = `Likes: ${item.likes} `;
    const likeButton = document.createElement("button");
    likeButton.className = "like-button";
    let beenLiked = false;
    likeButton.innerHTML = `Likes: ${item.likes}`;
    likeButton.addEventListener("click", () => {
      //if likes break it's in here
      if (beenLiked === false) {
        item.likes = item.likes + 1;
        // let result = updateLikes(item);
        if (result === true) {
          beenLiked = true;
          likeButton.innerHTML = `Likes: ${item.likes + 1}`;
        }
      }
    });

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.innerText = "Delete"; // ideally set up a system to password check deletion

    // would user comment be better split into two divs, info and message?
    //match these to data input and add Aria lebels here

    //adding delete and like buttons would be done here, complete with governing logic.maybe create itemDiVText and itemDivButtons to seperate and control layout and flow
    itemDiv.appendChild(submittedDataDiv);
    //buttons in here on itemDiv
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
      `https://guestbookproject.onrender.com/userdata`, //change for site
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
