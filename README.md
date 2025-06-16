# Hypixel Skyblock Forge-Flipper

In Hypixel skyblock, players can put items into the forge, wait for a few hours and then collect their newly forged item.
As skyblock is a free market, each of the ingredients can be bought from players on the auction house or by placing buy orders in the bazaar. All items that are forged can also be sold.
This application fetches all the relevant data, calculates the cost of buying all the ingredients and tells the user what is the best item to forge for profit.
The application allows for the filtering of bazaar / auction items as well as gemstones, reforge stones, pets and tools. The user can also toggle quick forge and cole-quick forge times and toggle between profit-per-hour and profit-per-forge.

The Hypixel API is [here](https://api.hypixel.net/).

![image](https://github.com/user-attachments/assets/6a4ac85c-f33f-4d59-b84f-1cb9554c8e4a)

![image](https://github.com/user-attachments/assets/7b624f84-3094-48c0-895b-7064824ef14d)


# Installation

1. Clone the repo.
2. Install dependencies: `npm install`. If you don't have `npm` then install it from [here](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). The `node` version that I used when creating the application was `v18.17.0` and the `npm` version was `9.6.7`.
3. Start the server: `npm run dev`

At the date of creation (16/6/2025), the Hypixel API no longer requires a key to access public data, such as auction information.<br>
Despite this, if you use your key (that you can sign up for [here](https://developer.hypixel.net/dashboard/)), you can refresh the data at a higher rate. <br>
If you wish to use your API key, do the following: 

1. Create a file named `.env` in the root of the project.
2. Add the following line: `VITE_HYPIXEL_API_KEY=your_api_key_here`
