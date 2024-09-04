$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

const signUpButton=document.getElementById('signUpButton');
const signInButton=document.getElementById('signInButton');
const signInForm=document.getElementById('signIn');
const signUpForm=document.getElementById('signup');

document.addEventListener("DOMContentLoaded", function() {
    const signUpButton = document.getElementById('sign-up');
    const signInForm = document.getElementById('main');  // Assuming this is the form for sign in
    const signUpForm = document.getElementById('create-acct');  // Assuming this is the form for sign up
  
    if (signUpButton && signInForm && signUpForm) {
      signUpButton.addEventListener('click', function() {
        signInForm.style.display = "none";
        signUpForm.style.display = "block";
      });
    } else {
      console.error("One or more elements are missing from the DOM.");
    }
  });

  
  