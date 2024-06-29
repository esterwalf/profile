const userNumberuserInputValue = document.getElementById("number");
      const convertNumberToRomanNumerals = document.getElementById("convert-btn");
      const DOMOutput = document.getElementById("output");
      let tempRomanNumeral = ""
      const romanDigits = [
        { value: 1000, numeral: "M" },
        { value: 900, numeral: "CM" },
        { value: 500, numeral: "D" },
        { value: 400, numeral: "CD" },
        { value: 100, numeral: "C" },
        { value: 90, numeral: "XC" },
        { value: 50, numeral: "L" },
        { value: 40, numeral: "XL" },
        { value: 10, numeral: "X" },
        { value: 9, numeral: "IX" },
        { value: 5, numeral: "V" },
        { value: 4, numeral: "IV" },
        { value: 1, numeral: "I" }
      ]
      //validation
      convertNumberToRomanNumerals.addEventListener("click", () => {
        //clear tempRomanNumeral
        tempRomanNumeral = ""
        //a number has to be provided
        if (userNumberuserInputValue.value === "") {
          DOMOutput.innerText = "Please enter a valid number"
          return
        }
        else if (userNumberuserInputValue.value < 0) {
          //number has to be positive
          DOMOutput.innerText = "Please enter a number greater than or equal to 1"
          return
        }
        else if (userNumberuserInputValue.value > 3999) {
          //number needs to be less than 4000
          DOMOutput.innerText = "Please enter a number less than or equal to 3999"
          return
        }
        else {
          console.log(`here's the userNumberuserInputValue ${userNumberuserInputValue.value}`)
          decimalToRoman(userNumberuserInputValue.value);
          console.log(`Roman Numeral is ${tempRomanNumeral}`)
          DOMOutput.innerText = tempRomanNumeral
        }
      });

      const decimalToRoman = (userNumberuserInputValue) => {
        let result = "";
        let remaining = userNumberuserInputValue;
        for (const { value, numeral } of romanDigits) {
          while (remaining >= value) {
            result += numeral;
            remaining -= value;
          }
        }
        tempRomanNumeral = result;
        return result;
      };