# Hypixel Skyblock Forge-Flipper

In Hypixel skyblock, players can put items into the forge, wait for a few hours and then collect their newly forged item.
As skyblock is a free market, each of the ingredients can be bought from players on the auction house or by placing buy orders in the bazaar. All items that are forged can also be sold.
This application fetches all the relevant data, calculates the cost of buying all the ingredients and tells the user what is the best item to forge for profit.
The application allows for the filtering of bazaar / auction items as well as gemstones, reforge stones, pets and tools. The user can also toggle quick forge and cole-quick forge times and toggle between profit-per-hour and profit-per-forge.

The Hypixel API is [here](https://api.hypixel.net/).

# Installation

1. Clone the repo.
2. Install dependencies: `npm install`. If you don't have `npm` then install it from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). The `node` version that I used when creating the application was `v18.17.0` and the `npm` version was `9.6.7`.
3. Start the server: `npm run dev`

At the date of creation (16/6/2025), the Hypixel API no longer requires a key to access public data, such as auction information.<br>
Despite this, if you use your key (that you can sign up for [here](https://developer.hypixel.net/dashboard/)), you can refresh the data at a higher rate. <br>
If you wish to use your API key, do the following: 

1. Create a file named `.env` in the root of the project.
2. Add the following line: `VITE_HYPIXEL_API_KEY=your_api_key_here`

# Usage

The application is initially preloaded with data that does not accurately represent the current market, but has represented the market at one point:

![image](https://github.com/user-attachments/assets/6a4ac85c-f33f-4d59-b84f-1cb9554c8e4a)

To reload the data, press the reload button on the top right:

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/3cad6dca-166c-4761-9bd0-207a0541a1c3" />

To filter the items, press the filter button on the top left and then toggle the filters you want to apply:

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/798cedf6-ef42-4385-9af9-d9f179ff57d1" />

![image](https://github.com/user-attachments/assets/7b624f84-3094-48c0-895b-7064824ef14d)

To see a specific item, search for it with the search bar at the top:

<img width="1271" alt="image" src="https://github.com/user-attachments/assets/873c86fa-a34c-4de2-b337-0db30282c5b3" />

<img width="1280" alt="image" src="https://github.com/user-attachments/assets/160389f5-24c8-466e-ab0b-8748d4b2ee76" />





