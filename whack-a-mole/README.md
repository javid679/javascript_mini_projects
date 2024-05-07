
Whack-a-Mole Game Description:

This is a simple web-based Whack-a-Mole game created using HTML, CSS, and JavaScript. The objective of the game is to hit the mole as many times as possible within the given time frame. Here's an overview of the components and functionalities:

**HTML:**
The HTML structure includes elements for displaying the player's score, time left, and buttons to start and stop the game. It also contains a grid of squares where the moles will appear.

**CSS:**
The CSS styles define the layout and appearance of the game elements. It sets up a grid layout for the game board and defines styles for the mole and dirt pile images.

**JavaScript:**
The JavaScript code controls the game logic and behavior. Here's what it does:

1. **Initialization:** It initializes variables for tracking the score, countdown timer, and mole movement.
2. **Random Square Generation:** The `randomSquare()` function randomly selects a square on the grid and moves the mole to that position.
3. **Mole Movement:** The `moveMole()` function repeatedly calls `randomSquare()` at regular intervals to move the mole around the grid.
4. **Score Tracking:** It listens for mouse clicks on the grid squares and updates the player's score accordingly.
5. **Countdown Timer:** The `countDownTimer()` function decrements the countdown timer at intervals and stops the game when the time runs out.
6. **Game Controls:** It provides functionality for starting and stopping the game using the respective buttons.

Overall, this game demonstrates the use of event handling, DOM manipulation, and interval timers to create an interactive gaming experience.

![Image Alt text](whack-a-mole/gaemoutput.png)

