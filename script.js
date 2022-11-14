var datatbase = [
    {
        username: "Percy",
        password: "super123"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeLine: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeLine: "This is so coool"
    }
];

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

function signIn(user, pass) {
    if (user === datatbase[0].username && 
        pass === datatbase[0].password) {
        console.log(newsFeed); 
    } else {
        alert("Sorry, wrong username and password!");
    }
}

signIn(userNamePrompt, passwordPrompt);