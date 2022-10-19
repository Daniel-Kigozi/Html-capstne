const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const programm = document.querySelector('.main-speakers');


hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    navMenu.classList.remove('active');
  }));


  const displayPrograms = ({name, details, image, role})=>{
    let div = document.createElement('div');
    div.className ="speakers";
    div.innerHTML = `
    
    <img id="img-feature" src="${image}"/>
    <div class="inner-speaker">
        <p class="speaker-name">${name}</p>
        <p class="speaker-role">${role}</p>
        <div class="under-line-1"></div>
        <p class="speaker-decrip">${details}</p>
    </div>
       `;
    return div;

  }
  
  const getPrograms = async()=>{
    const response = await fetch('./main.json');
    try {
      const data = await response.json();
      data.forEach((project) =>{
        programm.append(displayPrograms(project))
      })
    } catch (error) {
      
    } 
  }
  getPrograms();



