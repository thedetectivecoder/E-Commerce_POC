//create an array of objects of users. 
//store the new user in that 
// for checking the user login info, retrive the array from localstorage and find the useremail and corresponding password. 


var users = []


//storing new user in localstorage
function registerUser(){

    let userName = document.getElementById("uname").value;
    let password = document.getElementById("pw").value;
    console.log(userName, password)
    let userObj = {
        username: userName,
        password: password
    }
    console.log("UserObj : ", userObj);
    users.push(userObj)
    console.log("Users: ", users)

    localStorage.setItem("userInfo", JSON.stringify(users))
}

function verifyUser(){
    let username = document.getElementById("userName").value;
    let password = document.getElementById("userPw").value;
    let users = JSON.parse(localStorage.getItem("userInfo"))
    let loginFlag = false;
    console.log("U in check ", users)
    users.forEach(user =>{
        console.log(user);
        if(username == user.username && password == user.password ){
            loginFlag = true;
        }
    })

    if(loginFlag){
        alert("Logged In!!")
    }else{
        alert("User Not Found")
    }
}