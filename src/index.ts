require("./styles.css");

const chatButton = document.getElementById("chatButton");
const numberInput = document.getElementById("numberInput") as HTMLInputElement;

function chatRedirect() {
  window.location.href = `https://wa.me/972${numberInput.value}`;
}

chatButton.onclick = () => chatRedirect();
numberInput.onkeyup = (e) => {
  if (e.key === "Enter") {
    chatRedirect();
  }
};
