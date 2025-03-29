let age = 92

if (age>=14 && age<=90){
    console.log(true)
} else{
    console.log(false)
}

let login = prompt("Please enter who you are:")
let password
if(login == "Admin"){
    password = prompt("Enter password:")
} else if(login == ""){
    alert("Cancelled")
} else{
    alert("I don't know.")
}

if(password){
    if(password == "TheMaster"){
        alert("Welcome!")
    }else if(password == ""){
        alert("Cancelled")
    }else{
        alert("Wrong password.")
    }
}