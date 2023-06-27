# 18/06/23 Lucky 13 🎮

# Lucky 13 - 2048 Game

![Lucky 13 Banner](link-to-your-banner-image)

## 🎉 Introduction
Welcome to Lucky 13, a personalized version of the famous 2048 game! In this exciting adaptation, I have infused my own creativity and added a touch of magic to make the game even more enjoyable. The name "Lucky 13" stems from the fact that I have discovered and incorporated 13 unique strategies to conquer the game and achieve the elusive 2048 tile.

## 🕹️  Play the Game
Are you ready to test your luck and skills? Embark on an adventure in Lucky 13 by visiting the following link: [Lucky 13 - 2048 Game](https://2048-game-react.netlify.app/)

## 🛠️ Built With
To create this enchanting game, I utilized the following tools and technologies:

* [VSCode](https://code.visualstudio.com/) - My trusty code editor where the magic began.
* [React](https://reactjs.org/) - A powerful JavaScript frontend library that brought life to the game.
* [SASS](https://sass-lang.com/) - A magical CSS preprocessor that added charm to the game's visual style.

## Implementation Details
Let's dive into the captivating world of Lucky 13 and discover how I brought it to life.

### 💡 Game Logic
The heart of Lucky 13 lies in the `board.js` file, where I meticulously implemented the game's logic. Initially, the code was clean and straightforward. However, to add mesmerizing movement animations, I had to save additional state information for each tile on the board.

### 🎨 Captivating Views
In the `index.js` file, you will find the captivating view logic of Lucky 13. The main component, `BoardView`, holds the game board as a stateful `Board` object. It handles events by  forwarding them to the `Board`, ensuring a seamless gaming experience. By harnessing React, I achieved an absence of direct DOM manipulation. I  attached the `keyDown` event listener to the `window` object, allowing  interactions throughout the entire page.

### ✨ Visual Magic
Every enchanting world needs captivating visuals, and that's where the `TileView` and `Cell` components come into play. The `Cell` component provides a lighter grey background when a tile is absent, creating a sense of mystery and anticipation. Meanwhile, the `TileView` component is where the real magic happens. It takes a `Tile` object as a prop to determine whether it's a new tile or a moving tile. By employing CSS classes, it orchestrates user-friendly animations.

### 🪄  Spellbinding CSS Animations
To weave a spellbinding experience, I employed the power of CSS3 animations in Lucky 13. The `style.scss` file, enchanted by SASS, facilitated the generation of dynamic CSS classes for tile movements. Rather than generating a separate animation for each possible movement, I made a clever observation. By categorizing movements into row and column movements, I reduced the number of required animations. This magical optimization shrunk the generated CSS size from a bulky 70KB down to a mere 10KB, resulting in faster loading times and smoother gameplay.

## 🌟  Conclusion
Congratulations! You've now entered the enchanting realm of Lucky 13, my personalized version of the mesmerizing 2048 game. Brace yourself for an immersive experience filled with captivating animations, strategic gameplay, and the thrill of discovering 13 lucky ways to achieve the legendary 2048 tile. Embark on this magical journey and let your luck guide you to victory!

> "In the realm of Lucky 13, the possibilities are endless and luck favors the bold!" 🔮


# 18/06/23 Lucky 13 🎮

# Lucky 13 - 2048 Game

![Lucky 13 Banner](link-to-your-banner-image)

## 🎉 Introduction
Welcome to Lucky 13, a personalised version of the famous 2048 game! In this exciting adaptation, I've infused my own creativity and added a touch of magic to make the game even more enjoyable. The name "Lucky 13" stems from the fact that I've discovered and incorporated 13 unique strategies to conquer the game and achieve the elusive 2048 tile.

## 🕹️ Play the Game
Are you ready to test your luck and skills? Embark on an adventure in Lucky 13 by visiting the following link: [Lucky 13 - 2048 Game](https://2048-game-react.netlify.app/)

## 🛠️ Built With
To create this enchanting game, I utilised the following tools and technologies:

* [VSCode](https://code.visualstudio.com/) - My trusty code editor where the magic began.
* [React](https://reactjs.org/) - A powerful JavaScript frontend library that brought life to the game.
* [SASS](https://sass-lang.com/) - A magical CSS preprocessor that added charm to the game's visual style.

## Implementation Details
Let's dive into the captivating world of Lucky 13 and discover how I brought it to life.

### 💡 Game Logic
The heart of Lucky 13 lies in the `board.js` file, where I meticulously implemented the game's logic. Initially, the code was clean and straightforward. However, to add mesmerising movement animations, I had to save additional state information for each tile on the board.

### 🎨 Captivating Views
In the `index.js` file, you'll find the captivating view logic of Lucky 13. The main component, `BoardView`, holds the game board as a stateful `Board` object. It handles events by forwarding them to the `Board`, ensuring a seamless gaming experience. By harnessing React, I achieved an absence of direct DOM manipulation. I even attached the `keyDown` event listener to the `window` object, allowing interactions throughout the entire page.

### ✨ Visual Magic
Every enchanting world needs captivating visuals, and that's where the `TileView` and `Cell` components come into play. The `Cell` component provides a lighter grey background when a tile is absent, creating a sense of mystery and anticipation. Meanwhile, the `TileView` component is where the real magic happens. It takes a `Tile` object as a prop to determine whether it's a new tile or a moving tile. By employing CSS classes, it orchestrates user-friendly animations.

### 🪄 Spellbinding CSS Animations
To weave a spellbinding experience, I employed the power of CSS3 animations in Lucky 13. The `style.scss` file, enchanted by SASS, facilitated the generation of dynamic CSS classes for tile movements. Rather than generating a separate animation for each possible movement, I made a clever observation. By categorising movements into row and column movements, I reduced the number of required animations. This magical optimisation shrunk the generated CSS size from a bulky 70KB down to a mere 10KB, resulting in faster loading times and smoother gameplay.

## 🌟 Conclusion
Congratulations! You've now entered the realm of Lucky 13, my personalised version of the mesmerising 2048 game. Brace yourself for an immersive experience filled with user-friendly animations, strategic gameplay, and the thrill of discovering 13 lucky ways to achieve the legendary 2048 tile. Embark on this magical journey and let your luck guide you to victory!

> "In the realm of Lucky 13, the possibilities are endless, and luck favours the bold!" 🔮
