document.addEventListener("DOMContentLoaded", function () {
  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeseburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];

  cardArray.sort(() => 0.5 - Math.random());

  // sorted method explained:
  // https://www.w3schools.com/js/js_array_sort.asp

  //step-2, appending all the images to the div using for loop

  const gridDisplay = document.querySelector("#grid");
  const resultDisplay = document.querySelector("#result");
  let cardsChosen = [];
  let cardsChosenId = [];
  let cardsWon = [];

  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      card.addEventListener("click", flipCard);
      gridDisplay.appendChild(card);
    }
  }

  createBoard();

  //1.observe, data-id here, it kind of serves like index numbers
  //if you want, you can check div in elements in console.
  //2.try cslog cardArray[cardId].name
  /*
    what are we doing here?
    1. we get data-id, which are literally the index of the images in cardArray object/
    2. we created an empty array called cardschosen and we pushed names of images into it.
    3. and we passed images into it using setAttribute, by giving src and it's path as value
    cuz literally our image names are their respective names 
    and thus it becomes something like:
    images/imagename.png
    */

  // please try to understand the working of this keyword
  //.img directly accesses the image's path

  //function to show flipped cards:

  function flipCard() {
    let cardId = this.getAttribute("data-id");
    //console.log(cardArray[cardId].name);
    //console.log(cardId) <-- try this to see what happens
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenId.push(cardId);
    //console.log(cardsChosenId);
    //console.log(cardArray[cardId].img);
    this.setAttribute("src", cardArray[cardId].img);
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }

  //function to check for matches
  function checkForMatch() {
    //console.log(cardsChosenId);
    //console.log(cardsChosenId[0]);
    const cards = document.querySelectorAll("img");
    const optionOneId = cardsChosenId[0];
    const optionTwoId = cardsChosenId[1];
    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("You have clicked the same image twice !");
    } else if (cardsChosen[0] === cardsChosen[1]) {
      alert("You have found a Match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cards[optionOneId].removeAttribute("click", flipCard);
      cards[optionTwoId].removeAttribute("click", flipCard);
      cardsWon.push(cardsChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
    }
    cardsChosen = [];
    cardsChosenId = [];
    resultDisplay.textContent = cardsWon.length;
    if (cardsWon.length === cardArray.length / 2) {
      resultDisplay.textContent = "Congratulations! You found them all!";
    }
  }
});
