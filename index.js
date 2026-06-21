import { initGlassesAnimation } from "./helpers/animation.js";

//https://dev.to/natclark/checking-for-reduced-motion-preference-in-javascript-4lp9
const isReducedMotion = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!isReducedMotion) {
    initGlassesAnimation();
}

