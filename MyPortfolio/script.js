//Mouse Circle
const mouseCircle = document.querySelector('.mouse-circle');
const mouseDot = document.querySelector('.mouse-dot');
const mouseCircleFn = (x, y) => {
  mouseCircle.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
//end of Mouse circle

// Animated circles
const circles = document.querySelectorAll('.circle');
const mainImg = document.querySelector('.main-circle img');
let mX = 0;
let mY = 0;
const z = 100;
const animatedCircles = (e, x, y) => {
  if (x < mX) {
    circles.forEach((circle) => {
      circle.style.left = `${z}px`;
    });
    mainImg.style.left = `${z}px`;
  } else if (x > mX) {
    circles.forEach((circle) => {
      circle.style.left = `-${z}px`;
    });
    mainImg.style.left = `-${z}px`;
  }
  if (y < mY) {
    circles.forEach((circle) => {
      circle.style.top = `${z}px`;
    });
    mainImg.style.top = `${z}px`;
  } else if (y > mY) {
    circles.forEach((circle) => {
      circle.style.top = `-${z}px`;
    });
    mainImg.style.top = `-${z}px`;
  }
  mX = e.clientX;
  mY = e.clientY;
};
// End of animated circles;
document.body.addEventListener('mousemove', (e) => {
  let x = e.clientX;
  let y = e.clientY;
  mouseCircleFn(x, y);
  animatedCircles(e, x, y);
});

document.body.addEventListener('mouseleave', () => {
  mouseCircle.style.opacity = '0';
  mouseDot.style.opacity = '0';
});

// Main Button
const mainBtns = document.querySelectorAll('.main-btn');
mainBtns.forEach((btn) => {
  let ripple;
  btn.addEventListener('mouseenter', (e) => {
    const left = e.clientX - e.target.getBoundingClientRect().left;
    const top = e.clientY - e.target.getBoundingClientRect().top;

    ripple = document.createElement('div');
    ripple.classList.add('ripple');
    ripple.style.left = `${left}px`;
    ripple.style.top = `${top}px`;
    btn.prepend(ripple);
  });
  btn.addEventListener('mouseleave', () => {
    btn.removeChild(ripple);
  });
});

// End of Main Button
//About me Text
const aboutMeText = document.querySelector('.about-me-text');
const aboutMeTextContent =
  'I sit before flowers hoping they will train me in the art of opening up. I stand on mountain tops believing that avalanches will teach me to let go. I know nothing, but I am here to learn. --Shane L. Koyczan';
//convert string to array, for each character in the paragraph array, create a span element
Array.from(aboutMeTextContent).forEach((char) => {
  const span = document.createElement('span');
  span.textContent = char;
  aboutMeText.appendChild(span);

  span.addEventListener('mouseenter', (e) => {
    e.target.style.animation = 'aboutMeTextAnim 10s infinite';
  });
});
//End of About me Text
//Projects
const container = document.querySelector('.container');
const projects = document.querySelectorAll('.project');
const projectHideBtn = document.querySelector('.project-hide-btn');

projects.forEach((project) => {
  project.addEventListener('mouseenter', () => {
    project.firstElementChild.style.top = `-${
      project.firstElementChild.offsetHeight - project.offsetHeight + 20
    }px`;
  });
  project.addEventListener('mouseleave', () => {
    project.firstElementChild.style.top = '2rem';
  });

  // Big Project Image
  project.addEventListener('click', () => {
    const bigImgWrapper = document.createElement('div');
    bigImgWrapper.className = 'project-img-wrapper';
    container.appendChild(bigImgWrapper);

    const bigImg = document.createElement('img');
    bigImg.className = 'project-img';
    const imgPath = project.firstElementChild.getAttribute('src').split('.')[0];
    bigImg.setAttribute('src', `${imgPath}-big.jpg`);
    bigImgWrapper.appendChild(bigImg);
    document.body.style.overflowY = 'hidden';

    projectHideBtn.classList.add('change');
    projectHideBtn.onclick = () => {
      projectHideBtn.classList.remove('change');
      bigImgWrapper.remove();
      document.body.style.overflowY = 'scroll';
    };
  });
  // End of Big Project Image
});

//Section 5
//Form
const formHeading = document.querySelector('.form-heading');
const formInputs = document.querySelectorAll('.contact-form-input');

formInputs.forEach((input) => {
  input.addEventListener('focus', () => {
    formHeading.style.opacity = '0';
    setTimeout(() => {
      formHeading.textContent = `Your ${input.placeholder}`;
      formHeading.style.opacity = '1';
    }, 300);
  });

  input.addEventListener('blur', () => {
    formHeading.style.opacity = '0';
    setTimeout(() => {
      formHeading.textContent = "Let's Talk";
      formHeading.style.opacity = '1';
    }, 300);
  });
});
// End of Form
// Slideshow
const slideshow = document.querySelector('.slideshow');

setInterval(() => {
  const firstIcon = slideshow.firstElementChild;
  firstIcon.classList.add('faded-out');
  setTimeout(() => {
    slideshow.removeChild(firstIcon);
    slideshow.appendChild(firstIcon);
    setTimeOut(() => {
      firstIcon.classList.remove('faded-out');
    });
  }, 500);
}, 3000);
// End of Slideshow
// End of Section 5

//End of Projects
