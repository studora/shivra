function createFrame(url) {
  const iframe = document.createElement("iframe");
  if (url) iframe.src = url;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.style.display = "none";
  content.appendChild(iframe);
  return iframe;
}
