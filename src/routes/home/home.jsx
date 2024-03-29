/** @jsx h */
import { h, Component } from "preact";
import Helmet from "preact-helmet";
import * as timeago from "timeago.js";
import lozad from "lozad";

export default class Home extends Component {
  componentDidMount() {
    window.scroll({ top: 0, left: 0, behavior: 'smooth' });
    const observer = lozad(".lazy", {
      loaded: function (el) {
        el.classList.add("is-loaded");
      },
      rootMargin: "10px 0px",
      threshold: 0.4
    });
    observer.observe();

    const elem = document.querySelector(".masthead-video")
    // Set necessary styles to position video "center center"
    elem.style.width = "100%";
    elem.style.height = "100%";
    elem.style.objectFit = "cover";
    elem.style.objectPosition = "center";


    // Get image defined on poster attribute of video
    const posterImage = elem.getAttribute("poster");

    // Remove poster to disable
    elem.removeAttribute("poster");

    // Set poster image as a background cover image on parent element
    elem.parentNode.style.background = `black url(${posterImage}) no-repeat center`;
    elem.parentNode.style.backgroundSize = "cover";

    // Check for video support
    //let supportsVideo = typeof elem.canPlayType != "undefined" ? true : false;
    
        // Check if mobile
        let isMobile = false;
        if (
          navigator.userAgent.match(/Android/i) ||
          navigator.userAgent.match(/webOS/i) ||
          navigator.userAgent.match(/iPhone/i) ||
          navigator.userAgent.match(/iPad/i) ||
          navigator.userAgent.match(/iPod/i) ||
          navigator.userAgent.match(/BlackBerry/i) ||
          navigator.userAgent.match(/Windows Phone/i)
        ) {
          isMobile = true;
        }
  
    // Remove video if not supported or mobile
    if (isMobile) {
      elem && elem.parentNode && elem.parentNode.removeChild(elem);
    }

    elem.play();

    window.addEventListener("scroll", this.handleOpacity);
    window.addEventListener('scroll', this.handleParallax);
    this.handleAnimation();

  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleOpacity);
    window.removeEventListener('scroll', this.handleParallax);
    this.handleAnimation();
  }

  handleParallax = () => {
    const target = document.querySelectorAll('[data-rate]');
    target.forEach(function (element) {
      let pos = window.pageYOffset * element.dataset.rate;
      element.style.transform = 'translate(0, ' + pos + 'px)';
    });
  }

  handleOpacity = () => {
    const target = document.querySelectorAll('[data-opacity]')
    target.forEach(function (element) {
      let pos = parseInt(element.dataset.opacity);
      element.style.opacity = 1 - Math.max(0, window.pageYOffset / pos);
    })
  };

  handleAnimation = () => {
    const target = document.querySelectorAll('[data-timeout], [data-delay]')
    target.forEach((element) => {
      let timeout = parseInt(element.dataset.timeout) || 0;
      let delay = parseInt(element.dataset.delay) || 0;
      document.documentElement.style.setProperty('--fade-in__delay', `${element.dataset.delay}ms`);
      document.documentElement.style.setProperty('--fade-in__duration', `${element.dataset.timeout}ms`);
      element.classList.add("fade-in");
      setTimeout(() => { element.classList.remove("fade-in") }, delay + timeout)
    })
  };

  

  render() {
    return (
      <main>

        <Helmet title="My Title Hay James" />
        <header>
        <div class="video-header">
          <video class="masthead-video" src={require("../../video/intro2.mp4")} autoplay loop playsinline muted poster={require("../../img/s3-news-tmp-77017-pulp-fiction-053--2x1--940.jpg").src}></video>
          </div>
        <div data-opacity="250" data-delay="1000" data-timeout="1200" class="masthead-arrow">
          <svg viewBox="0 0 32 32">
            <title>arrow</title>
            <path fill="#f5f5f5" d="M16 32c8.859 0 16-7.141 16-16s-7.141-16-16-16-16 7.141-16 16 7.141 16 16 16z"></path>
            <path fill="#100" d="M23.955 13.921c-0.271-0.271-0.723-0.362-0.994-0.090l-6.96 5.785-6.96-5.785c-0.271-0.271-0.723-0.271-0.994 0.090-0.271 0.271-0.181 0.723 0.090 0.994l7.412 6.147c0.090 0.090 0.271 0.181 0.452 0.181s0.362-0.090 0.452-0.181l7.412-6.147c0.362-0.271 0.362-0.723 0.090-0.994z"></path>
          </svg>
        </div>
        
        </header>


        <div>
          <h3>Exercise where you want, when you want. Get healthier, stronger and more confident.</h3>
          <p>Let’s face it, getting in shape can be hard.</p>
          <p>Our PTs will create and deliver personalized 1-2-1 workouts, we will show you what to do, and support you every step of the way!</p>
        </div>

        <img
          //style="z-index:-1"
          class="lazy"
          data-sizes="auto"
          src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 650 300'%3E%3C/svg%3E"
          data-srcset={require("../../img/strength-training-exercise-routines.jpg").srcSet}
          alt=""
        />
      </main>
    );
  }
}
