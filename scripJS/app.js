var openMenu = document.querySelector('.openMenu');
var closeMenu = document.querySelector('.closeMenu');
var mainMenu = document.querySelector('.mainMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show(){
  mainMenu.style.display = 'block';
  closeMenu.style.display = 'block';
  openMenu.style.display = 'none';
}

function close(){
  mainMenu.style.display = 'none';
  closeMenu.style.display = 'none';
  openMenu.style.display = 'inline-block';
  
}

// send contact to email
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(event){
  event.preventDefault();
  
  //Get the values inputs
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let msg = document.querySelector(".msg").value;

  document.querySelector(".form-contact").reset(); 
  saveInfoContact(name, email, msg); // for the database
  sendInfoToEmail(name, email, msg); 
  
}


function sendInfoToEmail(name, email, msg){
  email.send({
    Host: "smtp.gmail.com",
    Username: "wadleyp96@gmail.com",
    Password:"46597633Wad.",   

    To: "wadleyp96@gmail.com",
    From: "wadleyp96@gmail.com",
    Subject: `${name} à contactez LIM`,
    Body: `Nom: 💂‍♂️ ${name} </br> Email: 📚 ${email} </br> Message: 📩 ${msg}`,
  }).then((message) => alert("Email send successfully"));
} 