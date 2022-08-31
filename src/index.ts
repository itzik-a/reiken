require("./styles.css");

const chatButton = document.getElementById("chatButton");
const numberInput = document.getElementById("numberInput") as HTMLInputElement;

function chatRedirect() {
  window.location.href = `https://api.whatsapp.com/send?phone=972${numberInput.value}`;
}

chatButton.onclick = (e) => chatRedirect();
numberInput.onkeyup = (e) => {
  if (e.key === "Enter") {
    chatRedirect();
  }
};
