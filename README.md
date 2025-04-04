# Hypixel Skyblock Forge-Flipper

In Hypixel skyblock, players can put items into the forge, wait for a few hours and then collect their newly forged item.
As skyblock is a free market, each of the ingredients can be bought from players on the auction house or by placing buy orders in the bazaar. All items that are forged can also be sold.
This application fetches all the relevant data, calculates the cost of buying all the ingredients and tells the user what is the best item to forge for profit.
The application allows for the filtering of bazaar / auction items as well as gemstones, reforge stones, pets and tools. The user can also toggle quick forge and cole-quick forge times and toggle between profit-per-hour and profit-per-forge.

The API is here: [https://api.hypixel.net/](https://api.hypixel.net/)

# Demonstration

![image](https://github.com/user-attachments/assets/6a4ac85c-f33f-4d59-b84f-1cb9554c8e4a)

![image](https://github.com/user-attachments/assets/7b624f84-3094-48c0-895b-7064824ef14d)


# Installation

To have the ability to refresh the data, you need an API key from here: [https://developer.hypixel.net/dashboard/](https://developer.hypixel.net/dashboard/)

1. Clone the repo.
2. Install dependencies: `npm install`
3. Create a file named `.env` in the root of the project.
4. Add the following line: `VITE_HYPIXEL_API_KEY=your_api_key_here`
5. Start the server: `npm run dev`
