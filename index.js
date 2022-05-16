
const dob=document.querySelector("#date-of-birth");
const lucky=document.querySelector("#lucky-number");
const checkButton=document.querySelector("#check-number");
const txtarea = document.querySelector("#output-box");

// checkbtn.addEventListener("click" , () => {
//     console.log("clicked");
// })

function birthdayLucky() {
    // console.log("clicked");
    const date = dob.value;
    const num = lucky.value;

    if(date&&num){
        let sum = getSumOfDate(date);
        if(sum%num === 0){
            txtarea.innerText ="your birthday is lucky!!";            
        }else{
            txtarea.innerText = "your birthday is unLucky!!";
        }
    }
    else{
        txtarea.innerText = "please fill the areas!!"
    }
    
}

function getSumOfDate(date) {
      date = date.replaceAll("-","");
      let sum = 0;
      for(let index=0;index<date.length;index++){
        sum = sum + Number(date.charAt(index));
      }
      return sum;
    }

checkButton.addEventListener("click", birthdayLucky)
































// const dateOfBirth = document.querySelector("#date-of-birth");
// const luckyNumber = document.querySelector("#lucky-number");
// const checkButton = document.querySelector("#check-number");
// const outputBox = document.querySelector("#output-box");

// function checkLuckyNumber() {
//   //Initialise values
//   const date = dateOfBirth.value;
//   const numberToCheck = luckyNumber.value;
//   //Check if we don't get empty values
//   if(date&&numberToCheck){
//     //Processing part!
//     const sum = getSumOfDate(date);
//     //Check Lucky Number:
//     if(sum%numberToCheck===0) {
//       outputBox.value=`${numberToCheck} is a lucky number 🥳`;
//     }else {
//       outputBox.value=`${numberToCheck} is not a lucky number 🤒`;
//     }
//   }
//   // Exception.
//   else {
//     outputBox.value="Please enter both the input fields! 😡";
//   }
// }

// function getSumOfDate(date) {
//   date = date.replaceAll("-","");
//   let sum = 0;
//   for(let index=0;index<date.length;index++){
//     sum = sum + Number(date.charAt(index));
//   }
//   return sum;
// }

// checkButton.addEventListener("click", checkLuckyNumber)