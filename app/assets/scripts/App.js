import "particles.js";
import { WOW } from "wowjs";
import "./modules/ParticleConfig";
import "./modules/IconHover";

new WOW().init();

var scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  offset: 350
});
