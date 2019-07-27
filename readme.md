# steps to run the project

1. git clone 
2. run npm install
3. run npm start in the root

# Steps to config test enviorment

1. Install jest and jest-expo (npm install jest --save-dev && npm install jest-expo --save-dev).
2. Install Enzyme and enzyme-adapter-react-16 (npm install enzyme --save-dev && npm install enzyme-adapter-react-16 --save-dev).
3. Add this object in package.json  ```"preset": "jest-expo",
    "coveragePathIgnorePatterns": [
      "/app/test/",
      "/app/constants/",
      "index.js",
      "/app/AppNavigator.js",
      "/app/config/Routes.js",
      "/app/store.js"
    ],
    "collectCoverageFrom": [
      "app/**/*.{js,jsx}"
    ],
     "coverageThreshold": {
      "global": {
        "statements": 40
      }
    },
    "setupFilesAfterEnv": [
      "<rootDir>/app/test/setup.js"
    ] ```

4. Define the testing plan and project structure for it
 

 # MOCKS DATA

 - pokemons = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    name: 'charmander',
    url: "https://pokeapi.co/api/v2/pokemon/4/"
  }
];

 - pokemonDetail = {
    name: "bulbasaur",
    sprites: {
      front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    height: 115,
    weight: 200,
    types: [
      {
        type: {
          name: "water"
        }
      }
    ],
    moves: [
      {
        move: {
          name: "water"
        }
      },
      {
        move: {
          name: "swords-dance"
        }
      }
    ]
  }

