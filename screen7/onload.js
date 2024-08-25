// Add event listeners to pre blocks and send the code
document.querySelectorAll(".codeBlock").forEach((p) => {
  p.addEventListener("mousedown", () => {
    sendPre(event)
  });
});
