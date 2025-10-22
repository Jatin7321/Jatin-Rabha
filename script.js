/*function checkDesktopAccess() {
    const ua = navigator.userAgent;
    const isMobile = /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(ua);
    const viewportWidth = window.innerWidth;
    
    if (!isMobile || viewportWidth >= 1024) return;
    
    document.body.innerHTML = `
      <div style="display:flex;justify-content:center;align-items:center;height:100vh;text-align:center;font-family:sans-serif;">
        <h3>Sorry! This site is only designed for desktop view.<br>
        Please switch your mobile browser to Desktop Mode.</h3>
      </div>
    `;
}

window.addEventListener('load', checkDesktopAccess);
window.addEventListener('resize', checkDesktopAccess);*/

window.addEventListener("load", function() {
    setTimeout(() => {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("contents").style.display = "block";
    }, 3000);
});

function playButtonClickSound() {
    const audio = document.getElementById('click-sound');

    if (!audio) return; 
    audio.currentTime = 0; 
    
    audio.play()
        .catch(error => {
            console.warn("Could not play sound:", error);
        });
}

function setupAllButtonSounds() {
    const buttons = document.querySelectorAll('button'); 

    buttons.forEach(button => {
        button.addEventListener('click', playButtonClickSound);
    });
}

document.addEventListener('DOMContentLoaded', setupAllButtonSounds);

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth"});
  document.querySelector("#header .menu").classList.remove("active");
}

function toggleMenu() {
  document.querySelector("#header .menu").classList.toggle("active");
}

function showDiv(id) {
  document.querySelectorAll('.content').forEach(div => {
    div.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

const minecraftGround = document.getElementById('minecraft-ground');
const blockImages = [
    '/blocks/stone.png',
    '/blocks/coal.png',
    '/blocks/stone.png',
    '/blocks/redstone.png',
    '/blocks/stone.png',
    '/blocks/iron.png',
    '/blocks/stone.png',
    '/blocks/gold.png',
    '/blocks/stone.png',
    '/blocks/diamond.png',
    '/blocks/stone.png'
];

function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * blockImages.length);
    return blockImages[randomIndex];
}

function generateBlocks(count) {
    for (let i = 0; i < count; i++) {
        const block = document.createElement('div');
        block.classList.add('block');
        block.style.backgroundImage = `url(${getRandomImage()})`;
        minecraftGround.appendChild(block);
    }
}

generateBlocks(300); 


function showDiv(tabId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const buttons = document.querySelectorAll('.me-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}


function showTab(tabId) {
    const contents = document.querySelectorAll('.tab-content');
    contents.forEach(content => {
        content.style.display = 'none';
    });
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
}


const btn = document.getElementById("feedbackBtn");
const popup = document.getElementById("feedbackPopUp");
const close = document.getElementById("closePopUp");
btn.onclick = (e) => {
    e.preventDefault();
    popup.style.display = "flex";
};



window.onscroll = function() {
    let btn = document.getElementById("scrollBtn");
    let frogWrapper = document.getElementById("frogWrapper");
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
        frogWrapper.style.display = "block";
    } else {
        btn.style.display = "none";
        frogWrapper.style.display = "none";
    }
};
close.onclick = () => popup.style.display = "none";
window.onclick = e => { if( e.target === popup) popup.style.display = "none";}

function scrollDragon() {
    let dragonWrapper = document.getElementById("dragonWrapper");
    
    let dragonSound = document.getElementById("dragon-sound");
    
    dragonWrapper.style.display = "block";
    dragonWrapper.classList.add("fly");
    
    dragonSound.play().catch(e => console.error("Could not play sound:", e));
    
    let scrollStep = -window.scrollY / 200;
    let scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
    
    setTimeout(() => {
        dragonWrapper.style.display = "none";
        dragonWrapper.classList.remove("fly");
        dragonSound.pause();
        dragonSound.currentTime = 0;
    }, 5000);
}

    const audio = document.getElementById('background-audio');
    
    function startAudio() {
        audio.play().catch(error => {
            console.log("Audio playback failed:", error);
        });

        document.removeEventListener('click', startAudio);
        document.removeEventListener('keydown', startAudio);
    }

    document.addEventListener('click', startAudio);
    
    document.addEventListener('keydown', startAudio);
    
    document.addEventListener('DOMContentLoaded', function() {
  const loadingOverlay = document.getElementById('loading-overlay');
    loadingOverlay.style.display = 'none'; 
  const navButtons = document.querySelectorAll('.tab-content li a'); 
  navButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault(); 
      loadingOverlay.style.display = 'flex';
      const destination = this.href; 
      setTimeout(() => {
        window.location.href = destination;
      }, 1800);
    });
  });
});

window.addEventListener('pageshow', function(event) {
  const loadingOverlay = document.getElementById('loading-overlay');
  
  if (event.persisted) { 
    loadingOverlay.style.display = 'none';
  }
});


const frogWrapper = document.getElementById('frogWrapper'); 

function makeFrogJump() {
  if (!frogWrapper) return;
  frogWrapper.classList.remove('jump-and-fall');
  void frogWrapper.offsetWidth; 
  frogWrapper.classList.add('jump-and-fall');
}
document.addEventListener('DOMContentLoaded', function() {
    const scrollButton = document.getElementById('scrollBtn');
    if (scrollButton) {
        scrollButton.addEventListener('click', function() {
            makeFrogJump();
        });
    }
});


var form = document.getElementById("my-form");

async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset()
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                }
            })
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
    });
}
form.addEventListener("submit", handleSubmit)