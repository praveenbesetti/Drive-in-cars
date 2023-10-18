 
 const  home=document.querySelector(".home");
 const about=document.querySelector(".about");
 const self=document.querySelector(".self");
 const taxi=document.querySelector('#taxi');
 const booking=document.querySelector(".booking");
 let valuesDisplay=document.querySelectorAll(".num");

 let interval=5000;
   valuesDisplay.forEach((valuesDisplay)=>{
    let startValue=0;
    let endValue=parseInt(valuesDisplay.getAttribute("data-val"));
    console.log(endValue);
    let duration= Math.floor(interval / endValue);
    let counter =setInterval(function(){
        startValue +=1;
        valuesDisplay.textContent =startValue;
        if(startValue==endValue)
        {
            clearInterval(counter);
        }
    } ,duration);
   });
 function btn1()
 {
     home.style.display="block";
     about.style.display="none";
     self.style.display="none";
     taxi.style.display="none";
     booking.style.display="none";
     
 }
 function btn2()
 {
    about.style.display="block";
     home.style.display="none";
     self.style.display="none";
     taxi.style.display="none";
     booking.style.display="none";

 }
 function btn3()
 {
    about.style.display="none";
     home.style.display="none";
     self.style.display="block";
     taxi.style.display="none";
     booking.style.display="none";

 }

function btn4()
{
   about.style.display="none";
    home.style.display="none";
    self.style.display="none";
    taxi.style.display="block";
    booking.style.display="none";

}
function btn5()
{
   about.style.display="none";
    home.style.display="none";
    self.style.display="none";
    taxi.style.display="none";
    booking.style.display="block";

}

function validateForm() {
  const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const name = document.querySelector('input[name="name"]').value;
    const phone = document.querySelector('input[name="phone"]').value;
    const mail = document.querySelector('input[name="email"]').value;
    const pickupDate = document.querySelector('input[name="pickup_date"]').value;
    const returnDate = document.querySelector('input[name="return_date"]').value;
    const numberValue = parseFloat(phone);
    const len=phone.length;
  
    const namePattern = /^[A-Za-z ]+$/;
           
      if (name=="") {
        alert('Please enter your name.');
        return false;
      }
    
      if (phone=="") {
        alert('Please enter your phone number.');
        return false;
      }
    
      if (mail=="") {
        alert('Please enter your email address.');
        return false;
      }
    
      if (pickupDate=="") {
        alert('Please select a pickup date.');
        return false;
      }
    
      if (returnDate=="") {
        alert('Please select a return date.');
        return false;
      }
    
      sender(name,numberValue,mail,pickupDate,returnDate);
 }
  
  // Submit the form if it is valid
  document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  
    if (validateForm()) {
      this.submit();
    }
  });
  
  function sender(name,numberValue,mail,pickupDate,returnDate)
  {

  var msgbody=("name:"+name+"<br> number:"+numberValue+"<br> pickup-date:"+pickupDate+"<br>return-date:"+returnDate);
  
    Email.send({
      SecureToken : "ayoa ekmv bchd cxwe",
      To : 'praveenbesetti09@gmail.com',
      From : "praveenbesetti0@gmail.com",
      Subject : "This is the subject",
      Body : msgbody
  }).then(
    message => alert(message)
  );
  }
  
  