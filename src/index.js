console.log("Hello, is me, a Mario! im an italian short fella");

const content = document.querySelector("#content");

// Add Page Content
addPageContent();

function addPageContent() {
  const heading = document.createElement("h1");
  heading.textContent("Welcome to FNS!");
  heading.classList.add("heading");
  content.appendChild(heading);
}

document.body.appendChild(content);
