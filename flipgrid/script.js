const MAX_CARDS = 8; //How many cards can feasibly fit on the screen
const MAX_CARDS_PER_ROW = 4; //How many cards can fit in one row

const availableCards = Math.min(settings.cards.length, MAX_CARDS);
const maxCardsPerRow = Math.min(settings.cardsPerRow, MAX_CARDS_PER_ROW);

//Function that fills in the DOM with cards, based on information from config
let populator = () => {
  console.log("Running populator...");

  //Put in the prompt information
  if(settings.promptText !== undefined) document.getElementById("promptText").innerHTML = settings.promptText;
  if(settings.promptImage !== undefined) document.getElementById("promptImage").src = "assets/" + settings.promptImage;
  if(settings.promptText === undefined && settings.promptImage == undefined) document.getElementsByClassName("prompt-container")[0].style.display = "none"; //Hide the prompt area if no prompt is included

  let cardContainer = document.getElementsByClassName("card-container")[0]; //Identifies where to put the cards in the DOM. (Note that we make the assumption there is only one instance on the page, hence [0])
  let stylingData = document.querySelector(':root').style; //Gets the stylesheet

  if(settings.fancyFlip) stylingData.setProperty("--transform", "rotateX(180deg) rotate(180deg)");
  else stylingData.setProperty("--transform", "rotateY(180deg)");

  if(settings.forceRow) stylingData.setProperty("--wrapContainer", "nowrap");
  else stylingData.setProperty("--wrapContainer", "wrap");

  stylingData.setProperty("--cardsPerRow", maxCardsPerRow);


  //Iterate through all cards (cards over the max are ignored)
  for(let i = 0; i < availableCards; i++) {
    const card = settings.cards[i];

    //Create the container for the card
    let outerCard = document.createElement("div");
    outerCard.classList.add("flip-card");

    let innerCard = document.createElement("div");
    innerCard.classList.add("flip-card-inner");

    //Create the front of the card
    let frontCard = document.createElement("div");
    frontCard.classList.add("flip-card-front");

    //Apply custom color
    if(card.color !== undefined) {
      frontCard.style.backgroundColor = card.color;
    }

    if(card.title !== undefined) {
      let frontTitle = document.createElement("h1");
      frontTitle.innerHTML = card.title;
      frontCard.appendChild(frontTitle);
    }

    if(card.text !== undefined) {
      let frontText = document.createElement("p");
      frontText.innerHTML = card.text;
      frontCard.appendChild(frontText);
    }

    if(card.image !== undefined) {
      let image = document.createElement("img");
      image.src = "assets/" + card.image;
      frontCard.appendChild(image);
    }

    //Create the back of the card
    let backCard = document.createElement("div");
    backCard.classList.add("flip-card-back");

    //Apply custom color
    if(card.backsideColor !== undefined) {
      backCard.style.backgroundColor = card.backsideColor;
    }

    if(card.backsideTitle !== undefined) {
      let backTitle = document.createElement("h1");
      backTitle.innerHTML = card.backsideTitle;
      backCard.appendChild(backTitle);
    }

    if(card.backsideText !== undefined) {
      let backText = document.createElement("p");
      backText.innerHTML = card.backsideText;
      backCard.appendChild(backText);
    }

    if(card.backsideImage !== undefined) {
      let backImage = document.createElement("img");
      backImage.src = "assets/" + card.backsideImage;
      backCard.appendChild(backImage);
    }


    //Add the two side information to the card
    innerCard.appendChild(frontCard);
    innerCard.appendChild(backCard);

    //Combine the inner and outer sections
    outerCard.appendChild(innerCard);


    //Add the card to the document
    cardContainer.appendChild(outerCard);

    //Add the responsiveness
    if(settings.clickFlip) {
      outerCard.addEventListener("click", () => {

        //Unflip all flipped cards
        if(settings.flipSingle) {
          Array.from(document.getElementsByClassName("doFlip")).forEach((item, i) => {
            item.classList.remove("doFlip");
          });
        }

        outerCard.classList.toggle("doFlip");
      });
    }
    else {
      outerCard.addEventListener("mouseenter", () => {
        outerCard.classList.add("doFlip");
      });
      outerCard.addEventListener("mouseleave", () => {
        outerCard.classList.remove("doFlip");
      });
    }



  }

  console.log("Population complete!");
}

populator();
