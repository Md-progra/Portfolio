
const app = document.querySelector("#app");
const delay = ms => new Promise(res => setTimeout(res, ms));
    
    
app.addEventListener("keypress", async function(event){
  if(event.key === "Enter"){
    await delay(150);
   getInputValue();
   
    removeInput();
    await delay(150);
    new_line();
  }
});

app.addEventListener("click", function(event){
  const input = document.querySelector("input");
  input.focus();
})


async function open_terminal(){
  // Display image first
  await showImage();
  await delay(3000);

  createText("Welcome to Angel's");
  await delay(700);
  createText("Starting the server...");
  await delay(1500);
  createText("You can run several commands:");
 
  createCode("about me", "Who am I");
  createCode("all", "See all  possible commands.");
  createCode("social -a", "Connect with me!");
  createCode('projects', "My github page with my projects. Follow me there ;)");
  createCode("What do I do for fun?", "I love to build things with lego blocks and also upcycle clothes");

  await delay(500);
  new_line();
}


function new_line(){
  
  const p = document.createElement("p");
  const span1 = document.createElement("span");
  const span2 = document.createElement("span");
  p.setAttribute("class", "path")
  p.textContent = "# user";
  span1.textContent = " in";
  span2.textContent = " ~/angel_antwi";
  p.appendChild(span1);
  p.appendChild(span2);
  app.appendChild(p);
  const div = document.createElement("div");
  div.setAttribute("class", "type")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const input = document.createElement("input");
  div.appendChild(i);
  div.appendChild(input);
  app.appendChild(div);
  input.focus();
  
}

function removeInput(){
  const div = document.querySelector(".type");
  app.removeChild(div);
}

async function getInputValue(){
  
  const value = document.querySelector("input").value;
  if(value === "all"){
    trueValue(value);
    
    createCode("projects", "My github page with my projects. Follow me there ;)");
    createCode("about me", "Who am I.");
    createCode("social -a", "Connect with me!");
    createCode("clear", "Clean the terminal.");
    createCode("What do I do for fun?", "I love to build things with lego blocks and also upcycle clothes");
    createCode("resume", "My resume");
  }
  else if(value === "projects"){
    trueValue(value);
    createHTMLText("<a href='https://github.com/Md-progra' target='_blank' class='github-link'><i class='fab fa-github white'></i>github.com/Angel</a>")
  }
  else if(value === "about me"){
    trueValue(value);
    createText("Hi, My name is Angel Antwi-Mensah;)")
    createText("I am currently a sophomore at Grambling State University, pursuing a degree in Computer Science.");
    createText("I am passionate about programming, technology and I love to create solutions that make life easier.");
    createText("I am currently building an ML-based sentiment analysis tool and also prepping for Summer 2026 recruitment;) wish me luck!");
    createText("Feel free to reach out if you want to know more!");
    createText("You can bring some lego blocks and we can build something cool together!");
    createText("You can also check out my projects on my github page.");
  }
  else if(value === "social -a"){
    trueValue(value);
    createHTMLText("<a href='https://github.com/Md-progra' target='_blank' class='github-link'><i class='fab fa-github white'></i> github.com/Angel</a>")
    createHTMLText("<a href='https://www.linkedin.com/in/angelantwi77/' target='_blank' class='linkedin-link'><i class='fab fa-linkedin-in white'></i> linkedin.com/in/angelantwi</a>")
    createHTMLText("<a href='https://www.instagram.com/_theangelantwi/' target='_blank' class='instagram-link'><i class='fab fa-instagram white'></i> instagram.com/_theangelantwi</a>")
    createHTMLText("and you can also email me at: <a href='mailto:antwiangel77@icloud.com' class='email-link'>antwiangel77@icloud.com</a>")
  }
  else if(value === "resume"){
    trueValue(value);
    createHTMLText("My <a href='https://docs.google.com/document/d/1wTDqQmsjfCkKLhwURLi5XsEfhxeVHf5qIazAV-85iKA/edit?usp=sharing' target='_blank' class='resume-link'>resume</a> is available here:")
  }
  else if(value === "social"){
    trueValue(value);
    createText("Didn't you mean: social -a?")
  }
  
  else if(value === "clear"){
    document.querySelectorAll("p").forEach(e => e.parentNode.removeChild(e));
    document.querySelectorAll("section").forEach(e => e.parentNode.removeChild(e));
  }
  else{
    falseValue(value);
    createErrorText(`command not found: ${value}`)
  }
}

function trueValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "sucess")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function falseValue(value){
  
  const div = document.createElement("section");
  div.setAttribute("class", "type2")
  const i = document.createElement("i");
  i.setAttribute("class", "fas fa-angle-right icone error")
  const mensagem = document.createElement("h2");
  mensagem.setAttribute("class", "error")
  mensagem.textContent = `${value}`;
  div.appendChild(i);
  div.appendChild(mensagem);
  app.appendChild(div);
}

function createText(text, classname){
  const p = document.createElement("p");
  
  // Use textContent for plain text to prevent XSS
  p.textContent = text;
  app.appendChild(p);
}

function createHTMLText(htmlContent, classname){
  const p = document.createElement("p");
  
  // Only use innerHTML for trusted, predefined HTML content
  // This function should only be used for known safe HTML like your social links
  p.innerHTML = htmlContent;
  app.appendChild(p);
}

function createCode(code, text){
  const p = document.createElement("p");
  p.setAttribute("class", "code");
  // This is safe because code and text are controlled/predefined content
  p.innerHTML = `${code} <br/><span class='text'> ${text} </span>`;
  app.appendChild(p);
}

function createErrorText(text) {
  const p = document.createElement("p");
  p.innerText = text;
  app.appendChild(p);
}

async function showImage() {
  const imgContainer = document.createElement("div");
  imgContainer.className = "image-container";
  
  const img = document.createElement("img");
  img.src = "Stacked Up Summit Day 2 Station 27957.JPG"; // Updated to use your actual image
  img.alt = "Angel Antwi-Mensah";
  img.className = "profile-image";
  
  imgContainer.appendChild(img);
  app.appendChild(imgContainer);
  
  // Wait for image to load and display
  await delay(2000);
  
  // Remove the image after display
  app.removeChild(imgContainer);
}

// Create sprinkles
function createSprinkles() {
  const body = document.body;
  const sprinkleCount = 20;
  
  for (let i = 0; i < sprinkleCount; i++) {
    const sprinkle = document.createElement('div');
    sprinkle.className = 'sprinkle';
    sprinkle.style.left = Math.random() * 100 + 'vw';
    sprinkle.style.animationDelay = Math.random() * 3 + 's';
    sprinkle.style.animationDuration = (Math.random() * 2 + 3) + 's';
    body.appendChild(sprinkle);
  }
}

// Initialize sprinkles
createSprinkles();

open_terminal();
