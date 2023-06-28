# 18/06/23 RR13 Lucky 13 🎮
## 🔖 Introduction
Welcome to Lucky 13, a personalised version of the famous 2048 game! In this exciting adaptation, I've attempted to make the game even more enjoyable. The name "Lucky 13" stems from the fact that incorporated are 13 unique strategies to conquer the game and achieve the elusive 2048 tile.

## 🕹️ Play the Game
Are you ready to test your luck and skills? Embark on an adventure in Lucky 13 by visiting the following link: [Lucky 13 - 2048 Game](https://2048-game-react.netlify.app/)

## 🛠️ Built With:

* [VSCode](https://code.visualstudio.com/)
* [React](https://reactjs.org/) 
* [SASS](https://sass-lang.com/) 
## 💡 Game Logic
Let's dive into the world of Lucky 13 and its nuts and bolts.

The heart of Lucky 13 lies in the `board.js` file, where I implemented the game's logic. Initially, the code was clean and straightforward. However, to add movement animations, I had to save additional state information for each tile on the board.

## 🎨 Views
In the `index.js` file, you'll find the view logic of Lucky 13. The main component, `BoardView`, holds the game board as a stateful `Board` object. It handles events by forwarding them to the `Board`, ensuring a seamless gaming experience. By harnessing React, I achieved an absence of direct DOM manipulation. I also attached the `keyDown` event listener to the `window` object, allowing interactions throughout the entire page.

## ✨ Visuals
Every world needs user-friendly visuals, and that's where the `TileView` and `Cell` components come into play. The `Cell` component provides a lighter grey background when a tile is absent. Meanwhile, the `TileView` component is where the real magic happens. It takes a `Tile` object as a prop to determine whether it's a new tile or a moving tile. Then it sets the appropriate CSS classes in order to trigger the correct animations.

## 🪄  CSS Animations
To weave an interactive experience, I used CSS3 animations in Lucky 13. The `style.scss` file, leveraged by SASS, facilitated the generation of dynamic CSS classes for tile movements. Rather than generating a separate animation for each possible movement, I categorised movements into row and column movements, reducing the number of required animations. This optimisation shrunk the generated CSS size from a bulky 70KB down to 10KB, resulting in faster loading times and smoother gameplay.

## 🌟 Conclusion
Congratulations! You've now entered the realm of Lucky 13. Brace yourself for an immersive experience filled with user-friendly animations, strategic gameplay, and discovering 13 lucky ways to achieve the legendary 2048 tile. Embark on this journey and let your luck guide you to victory!

> "In the realm of Lucky 13, the possibilities are endless, and luck favours the bold!" 🔮
