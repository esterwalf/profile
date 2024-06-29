const messageInput = document.getElementById("message-input");
    const result = document.getElementById("result");
    const checkMessageButton = document.getElementById("check-message-btn");

    const helpRegex = /please help|assist me/ig;//please help or assist me
    const dollarRegex = /[0-9]+ (?:hundred|thousand|million|billion|trillion)? dollars|pounds/ig;//0-9 followed by words then currency
    const freeRegex = /(?:^|\s)fr[e3][e3] m[o0]n[e3]y(?:$|\s)/ig;//free money
    const stockRegex = /(?:^|\s)[s5][t7][o0][c{[(]k [a@4]l[e3]r[t7](?:$|\s)/ig;//stock alerts
    const dearRegex = /(?:^|\s)d[e3][a@4]r fr[i1|][e3]nd(?:$|\s)/ig;// dear friend

    const denyList = [helpRegex, dollarRegex, freeRegex, stockRegex, dearRegex];

    const isSpam = (msg) => denyList.some((regex) => regex.test(msg));

    checkMessageButton.addEventListener("click", () => {
      if (messageInput.value === "") {
        alert("Please enter a message.");
        return;
      }

      result.textContent = isSpam(messageInput.value)
        ? "Oh no! This looks like a spam message."
        : "This message does not seem to contain any spam.";
      messageInput.value = "";
    });