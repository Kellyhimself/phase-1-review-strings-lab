// Write your code in this file!
// Write your code in this file!
const currentUser = 'Grace Hopper';
let welcomeMessage="Welcome to Flatbook, "
welcomeMessage = `Welcome to Flatbook, ${currentUser}!`

let excitedWelcomeMessage = 'WELCOME TO FLATBOOK, '
excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${currentUser.toUpperCase()}!`

let shortGreeting= "Welcome, "
const firstInitial = currentUser[0];
const restOfName = currentUser.slice(1);

shortGreeting=`Welcome, ${firstInitial}!`