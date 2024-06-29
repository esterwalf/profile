 // Set Up Constants

 const useruserInputValue = document.getElementById("user-input");
 const checkBtn = document.getElementById("check-btn-number");
 const clearBtn = document.getElementById("clear-btn");
 const resultsDiv = document.getElementById("results-div");

 // Set Up Event Listeners
 checkBtn.addEventListener("click", () => {
   const userInputValue = useruserInputValue.value;

   // Check if there is user userInputValue
   if (userInputValue.length === 0) {
     alert("Please provide a phone number");
   } else {
     checkValidNumber(userInputValue);
     useruserInputValue.value = '';
   }
 });

 useruserInputValue.addEventListener("keydown", (e) => {
   if (e.key === "Enter") {
     checkValidNumber(useruserInputValue.value);
     useruserInputValue.value = "";

   }
 });

 clearBtn.addEventListener("click", () => {
   resultsDiv.innerHTML = "";
 });

 // Function to Check if Phone Number is Valid
 function checkValidNumber(userInputValue) {
   const countryCode = '^(1\\s?)?';
   const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
   const spacesDashes = '[\\s\\-]?';
   const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
   const phoneRegex = new RegExp(`${countryCode}${areaCode}${spacesDashes}${phoneNumber}`);
   phoneRegex.test(userInputValue) ? (resultsDiv.style.color = 'white') : (resultsDiv.style.color = 'white');//changed font colour from red to white 13/06/2024
   resultsDiv.innerHTML = `${phoneRegex.test(userInputValue) ? "Valid" : "Invalid"} US number: ${userInputValue}`;
   resultsDiv.style.fontSize = '24px'//made the font bigger in the result
 }