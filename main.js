const hamburgerMenu = document.querySelector('.hamburger-menu');
const navMenu = document.querySelector('.nav-menu');
const body = document.querySelector('body');
const programm = document.querySelector('.main-speakers');
const showMoreBtn = document.querySelector(".show-speakers");
let speakerCount = 2;
const arrayobject=[
  {
      "name":"Yochai Benkler",
      "role":"Berkman Professor",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/yochai benkler.png"
  },
  {
      "name":"Julia Leda",
      "role":"Motivational speaker",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/julia-leda.png"
  },
  {
      "name":"Kilman Chon",
      "role":"Head of Sales Google",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/Kilman-chon.png"
  },
  {
      "name":"Lila Trekikov",
      "role":"Financial advisor, Base Investments ltd",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/lila-tretikov.png"
  },
  {
      "name":"Ryan Merkley",
      "role":"CEO World Bank",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/Ryan-merkley.png"
  },
  {
      "name":"Sohyeong Noh",
      "role":"MIT Professor",
      "details":"Learn modern ways of protecting your system",
      "image": "./assets/project/sohyeong-Noh.png"
  }
  
  ]


  window.onload =() => {
    
    hamburgerMenu.addEventListener('click', () => {
      hamburgerMenu.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
    document.querySelectorAll('.nav-link').forEach((navLink) => navLink.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      navMenu.classList.remove('active');
    }));

  const displayPrograms = ()=>{
    for(let i=0; i<speakerCount; i++){
      let div = document.createElement('div');
    div.className ="speakers";
    div.innerHTML = `
    
    <img id="img-feature" src="${arrayobject[i].image}"/>
    <div class="inner-speaker">
        <p class="speaker-name">${arrayobject[i].name}</p>
        <p class="speaker-role">${arrayobject[i].role}</p>
        <div class="under-line-1"></div>
        <p class="speaker-decrip">${arrayobject[i].details}</p>
    </div>
       `;
    programm.append(div);
    }
    

  }

  showMoreBtn.addEventListener('click', ()=>{
    if(speakerCount === 2){
      speakerCount = arrayobject.length;
      programm.innerHTML = ``;
      showMoreBtn.textContent = 'Show Less';
      displayPrograms();
    } else {
      speakerCount = 2;
      programm.innerHTML = ``;
      showMoreBtn.textContent = 'Show More';
      displayPrograms();
    }
  })

  if(window.innerWidth>786){
    speakerCount = arrayobject.length;
    displayPrograms();
  } else {
    displayPrograms();
  }
  
 

  
  }

  



