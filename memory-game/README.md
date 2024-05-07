# Memory Game

This is a classic memory game built using HTML, CSS, and JavaScript. The game consists of a grid of cards, each containing an image. The objective is to match pairs of identical images by flipping the cards over.

## HTML
The HTML structure includes elements for displaying the score and the game grid. It links to an external stylesheet for styling and an external JavaScript file for the game logic.

## CSS
The CSS styles define the layout and appearance of the game grid. It sets up a flexbox layout to arrange the cards in a grid format.

## JavaScript
The JavaScript code controls the game functionality. Here's what it does:

### Initialization
Upon DOM content load, the script initializes an array of card objects, each containing a name and an image path. It shuffles the cards randomly using the Fisher-Yates shuffle algorithm.

### Game Board Creation
The `createBoard()` function dynamically creates the game board by appending images to the grid container. Each card is initially set to display a blank image.

### Card Flipping
When a card is clicked, the `flipCard()` function is triggered. It flips the card to reveal the associated image and adds the card's name to an array of chosen cards.

### Matching Logic
After two cards are flipped, the `checkForMatch()` function compares their names to determine if they match. If they match, the cards remain flipped and are marked as found. If they don't match, the cards are flipped back to their original state.

### Win Condition
The game ends when all pairs of cards have been found. At this point, a congratulatory message is displayed to the player.

Overall, this game demonstrates the use of event handling, array manipulation, and DOM manipulation to create a fun and interactive memory-testing experience.

##Output:

![Memory-Game](https://github.com/javid679/javascript_mini_projects/blob/main/memory-game/gameoutput.png)
