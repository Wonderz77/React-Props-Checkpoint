FIFA Player Cards

A React application that displays FIFA player cards using React, React-Bootstrap, and JSON data. Each card shows a player’s name, team, nationality, jersey number, age, and image.

Features

Displays player cards dynamically from a JSON array.

Uses React-Bootstrap Cards for styling.

Fully responsive layout using Bootstrap grid (Container, Row, Col).

Default props set for missing player attributes.

Inline styling for card customization.

Technologies Used

React

React-Bootstrap

Bootstrap 5

JavaScript (ES6)

Project Structure
fifa-player-cards/
│
├─ src/
│   ├─ App.js
│   ├─ players.js          # JSON data of players
│   ├─ Player.js           # Individual player card component
│   ├─ PlayersList.js      # Renders list of players
│   └─ index.js
│
├─ public/
│   └─ index.html
│
├─ package.json
└─ README.md

How it Works

players.js contains an array of JSON objects with player details.

Player.js renders a single player as a React-Bootstrap card, using props for each attribute.

PlayersList.js maps through the player array and renders all players using the Player component.

App.js imports PlayersList and displays it.

Customization

Add or remove players by editing players.js.

Change the card styles in Player.js using the cardStyle object.

Modify default props if needed.

License

This project is open-source and free to use.