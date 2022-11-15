var datatbase = [
    {
        username: "Percy",
        password: "super123"
    },
    {
        username: "Michelle",
        password: "1tr6"
    },
    {
        username: "Micheal",
        password: "Fast110"
    },
];

var newsFeed = [
    {
        username: "Bobby",
        timeLine: "So tired from all that learning"
    },
    {
        username: "Sally",
        timeLine: "This is so coool"
    },
    {
        username: "Calvin",
        timeLine: "Do you want to know?"
    }
];

function isUserValid(username, password) {
    for (var i=0; i < datatbase.length; i++) {
        if (datatbase[i].username === username &&
            datatbase[i].password === password) {
            return true;
        }
    }
    return false;
}

function signIn(username, password) {
    if (isUserValid(username, password)) {
        console.log(newsFeed); 
    } else {
        alert("Sorry, wrong username and password!");
    }
}

var userNamePrompt = prompt("What's your username?")
var passwordPrompt = prompt("What's your password?")

signIn(userNamePrompt, passwordPrompt);
