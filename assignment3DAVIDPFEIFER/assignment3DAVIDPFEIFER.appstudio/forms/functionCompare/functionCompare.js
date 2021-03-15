function  compPass(pass1, pass2) {
  if (pass1 == pass2) {
  return true
} else { 
  return false
  }
    }

var pass1 = prompt("Enter your password:")
var pass2 = prompt("Re-Enter your password:")
var n = pass1.localeCompare(pass2)

if (results == true) {
console.log("The passwords are the same.")
} else {
  console.log("The passwords are not the same.")
}
