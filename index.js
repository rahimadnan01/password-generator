let password_box = document.querySelector("#password-box");
let btn = document.querySelector(".btn-lft");
let copy_icon = document.querySelector("#sync")
function password() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
  let newPassword = '';
  const passwordLength = 12;
  for (let i = 0; i < passwordLength; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    newPassword += characters[randomIndex];
  }
  
  console.log(characters.length)
  password_box.value = newPassword; // Set the generated password to the input field
}
btn.addEventListener("click", function(){
  password(); // Call the password function when the button is clicked
});

copy_icon.addEventListener("click", function(){
  navigator.clipboard.writeText(password_box.value);
});
