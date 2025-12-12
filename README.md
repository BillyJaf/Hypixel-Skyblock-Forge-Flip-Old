# BEFORE READING
This project was great to get working with React and creating an application that is usable. While the app is functional, upon revisiting it I have noticied that there are several features that I would like to rewrite/change completely now that I have more knowledge. These features include (but are not limited to):
- Predefining Internal Data Structures: I currently store/use the data that is sent directly to me from the Hypixel API and as a result, I am at their mercy. The result of this is the example/default bazaar data consisting of 226,642 lines of JSON (as can be seen [here](https://github.com/BillyJaf/Hypixel-Skyblock-Forge-Flip-Old/blob/main/src/data/exampleMarkets/exampleBazaar.json)).
- Providing Filter Context: I currently wrap the application in a FilterContext component yet still drill the props to child components (as can be seen [here](https://github.com/BillyJaf/Hypixel-Skyblock-Forge-Flip-Old/blob/main/src/App.tsx#L45-L59)).
- Inconsistent Use of Libraries: I abstracted several of the components (such as the search bar) to pre-made react components, yet decided to create my own for other components seemingly randomly. It would be better to search for a library (such as MUI) and use their components consistently.
- Impossible to Debug Logic: The code is littered with logic that, as I revisit several months later, is near impossible to debug (as can be seen [here](https://github.com/BillyJaf/Hypixel-Skyblock-Forge-Flip-Old/blob/main/src/components/display/Card.tsx#L12-L76)).
- General File Structure: The file structure is fine, but there are some misplaced files. This can be seen in conjuction with the 'impossible ot debug logic' - better abstraction and centralisation of logic would help this.
- General UI: There are some minor features that I would fix - such as the scroll bar always being present.

Furthermore, this application is currently not deployable despite it working. Giving the user the option to refresh/request data from the Hypixel API allows for easy absue and an enormous bill to my AWS account. A better solution would be to have an external program that runs once a day and updates a database which the frontend can read. This would provide the user with fresh-enough prices while not costing me a fortune and could most likely be accomplished with an AWS lambda and an eventbridge scheduler.   

Combining the above, this repository now serves as the legacy version of the updated/refactored Hypixel Skyblock Forge Flipper. Users can still clone and use the program on their own machine, however this version of the project is no longer maintained. At the time of writing (12/12/2025) the application still functions.

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





