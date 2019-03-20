function copyEmail() {
  var copyText = document.getElementById("email");
  var textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  
  alert("Text Copied: erik.m.pohle@gmail.com")
}