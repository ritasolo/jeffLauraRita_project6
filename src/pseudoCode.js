//user arrives on page.
//they see a hero image with text and a "start" button.
//user presses start button and they are scrolled down the the page to the filter.
//user interacts with filter and can select price range.
//ranges are $6-$10, $10-$14, $14-$18, $18-$22.
//user selects range. set state of price to users price range choice (default price $6-$10)
//user selects color. set state of color to users color choice (defaalt all colors).
//user presses submit to enter thir selection. on submit users parameters to narrow down wine array go through filter.
//6 results are returned to the page in the form of cards.
//each card includes product image, name, price, and if it's on sale. 
//cards cards are clickable and link to "routed product page.
//product page contains larger image of wine, wine name, price, if its on sale, price per L, description, size, alcohol volume, etc. 
//product page also displays a button that allows user to interact with it to find stock of that wine at an lcbo near them.
//when button pressed user is asked to share their "geo location"
//once geolocation is gathered, its compared against lcbo store data.
//the closest store is returned (maybe with stock?)
//user has the option to go back to the the search
