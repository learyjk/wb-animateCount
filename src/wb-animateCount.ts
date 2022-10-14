import { EasingFunctions } from "./easings";

/*
REQUIRED
[wb-data="animate-count"]

OPTIONAL
duration // in ms
ease
reverse
  countDownTo

TODO
margin
threshold
*/

const init = () => {
  const elementsToAnimate = document.querySelectorAll(
    '[wb-data="animate-count"]'
  );
  if (elementsToAnimate.length === 0) {
    console.error('No elements with attribute wb-data="animate-count" found!');
    return;
  }
  const observer = new IntersectionObserver(
    (elementsToAnimate) => {
      elementsToAnimate.forEach((el) => {
        if (el.isIntersecting) {
          // el is in view
          countUp(el.target);
          observer.unobserve(el.target);
        } else {
          // entry is out of view
        }
      });
    },
    {
      threshold: 0, // 0 (default) - element must be totally offscreen, 0.5 - 50%, 1 - element fully on screen
      rootMargin: "0px", // provides an offset
      // root: null // specifiy the container, defaults to window
    }
  );
  elementsToAnimate.forEach((el) => {
    observer.observe(el);
  });
};

const countUp = (elementToAnimate) => {
  const DEFAULT_DURATION = 2000; // duration in miliseconds
  const FPS = 60; // i.e. 60 fps
  const frameDuration = 1000 / FPS;
  const duration = parseInt(
    elementToAnimate.getAttribute("duration") || DEFAULT_DURATION.toString(),
    10
  );
  const totalFrames = Math.round(duration / frameDuration);
  const easing =
    EasingFunctions[elementToAnimate.getAttribute("ease")] ||
    EasingFunctions.easeOutQuart;
  const isCountDown = elementToAnimate.getAttribute("reverse") || false;

  let frame = 0;
  let countTo = parseInt(elementToAnimate.textContent);

  const counter = setInterval(() => {
    frame++;
    const progress = easing(frame / totalFrames); // 0 to 1

    if (!isCountDown) {
      let currentCount = Math.round(countTo * progress);
      if (parseInt(elementToAnimate.textContent, 10) !== currentCount) {
        elementToAnimate.textContent = currentCount;
      }
    } else {
      let finalNumber =
        parseInt(elementToAnimate.getAttribute("count-down-to"), 10) || 0;
      let currentCount = Math.round(countTo * (1 - progress));
      if (parseInt(elementToAnimate.textContent, 10) !== finalNumber) {
        elementToAnimate.textContent = currentCount;
      }
    }
    if (frame === totalFrames) {
      clearInterval(counter);
    }
  }, frameDuration);
};

document.addEventListener("DOMContentLoaded", init);
