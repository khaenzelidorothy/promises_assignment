
// You are building a system that sends email reminders to users 5 seconds after they 
// register. Create an async function sendReminder(email) that waits 5 seconds using 
// setTimeout and then logs "Reminder sent to [email]". Simulate sending a reminder to 3 users.

async function sendReminder(email) {
    setTimeout(() =>{
        console.log(`Reminder sent to ${email}`); 
    },5000);
}

function simulateReminder(){
    const allEmails = ['mercyline@gmail.com', 'yusuf@gmail.com','eucabeth@gmail.com'];
    for(const email of allEmails){
        sendReminder(email);
    }
}
simulateReminder();

// You want to simulate a login system that tries to log in a user. The first two
//  attempts fail, but the third succeeds. Write a function tryLogin() that uses
//  a counter and Promises. Use setTimeout to simulate a 1-second delay between 
// attempts. Log "Login successful" or "Login failed after 3 attempts" based on
//  whether login succeeds.

function tryLogin(){
    let attempts = 0;
    function attempting(resolve,reject){
        setTimeout(()=>{
            attempts++
            if(attempts<3){
            console.log(`Attempt ${attempts}: Login has failed`);
            attempting(resolve,reject);
            }else if(attempts ===3){
                console.log("Login successfull");
                resolve()
            }
        },1000);
    }
    return new Promise((resolve,reject) =>{
        attempting(resolve,reject);
    })
}
tryLogin();

// Build a countdown timer that counts down from 5 to 0, displaying one number
//  per second using setInterval. When the countdown reaches 0, stop the interval 
// and log "Time's up!".

 function countDown(){
    let count = 5;
    const makeInterval = setInterval(() =>{
        console.log({count});
        count--;
        if(count ===0){
            clearInterval(makeInterval)
            console.log({count},"Time's up!");
            
        }
    },1000)
 }
 countDown();

// You are simulating a page that loads data in stages. Create an async function 
// called loadPage() that: logs "Loading header...", waits 1 second; logs "Loading 
// content...", waits 2 seconds; logs "Loading footer...", waits 1 second; and 
// finally logs "Page fully loaded". Use setTimeout inside Promises and await them 
// in sequence.

async function loadPage(){
    console.log("Loading header....");
    await new Promise(resolve =>
        setTimeout(resolve,1000)
    )
      console.log("Loading content....");
    await new Promise(resolve =>
        setTimeout(resolve,2000)
    )
      console.log("Loading footer....");
    await new Promise(resolve =>
        setTimeout(resolve,1000)
    )
    console.log("Page fully loaded");  
}

// You are simulating fetching stock prices with delays. Write a function fetchPrice
// (symbol) that returns a Promise which resolves after 2 seconds with the message 
// "Price for [symbol] retrieved". Use async/await to call it for two different stocks 
// ("AAPL" and "GOOG") and log the messages in order.


function fetchPrice(symbol){
    return new Promise((resolve) =>{
        setTimeout(() =>{
            resolve(`Price for ${symbol} retrieved`);
        },2000)
    })
}
async function callStocks() {
    const stock1 = await fetchPrice("AAPL")
    console.log({stock1});
    const stock2 = await fetchPrice("GOOG")
    console.log({stock2});
}
callStocks();
