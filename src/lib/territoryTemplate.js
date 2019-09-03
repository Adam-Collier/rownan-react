const fs = window.require('fs-extra')
const fetch = require('node-fetch')
const cheerio = require('cheerio')
const { dialog } = window.require('electron').remote

export const territoryTemplate = async () => {
  try {
    dialog.showOpenDialog({ properties: ['openDirectory'] }, async function(
      directory
    ) {
      if (directory) {
        let response = await fetch('https://www.missguided.co.uk')
        let data = await response.text()
        const $ = cheerio.load(data)

        $('.main').html(territoryPicker())

        data = $.html()

        await fs.outputFile(`${directory}/index.html`, data)

        // require the module as normal
        let bs = window.require('browser-sync').create()

        // .init starts the server
        bs.init({
          watch: true,
          server: `${directory}`,
          index: `/index.html`,
          ghostMode: false,
          port: 1234
        })

        // Now call methods on bs instead of the
        // main browserSync module export
        bs.reload('*.html')

        // Listen to change events on HTML and reload
        bs.watch('*.html').on('change', bs.reload)
      }
    })
  } catch (err) {
    console.log(err)
  }
}

let territoryPicker = () => `
<style>
  .site-header,
  .primary-nav,
  .topCat,
  .top-promos-wrapper,
  .newsletter-lightbox-content,
  .footer-container {
    display: none;
  }

  .std {
    height: 100vh;
    padding-top: 10%;
    background: #d3cce3; /* fallback for old browsers */
    background: -webkit-linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    );
    background: linear-gradient(
      to right,
      #e9e4f0,
      #d3cce3
    );
  }

  .text-cont {
    max-width: 960px;
    margin: 0 auto;
    padding: 30px;
    text-align: center;
  }

  .button-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    max-width: 75%;
    margin: 0 auto;
  }

  .button-container button.button {
    font-size: 1.5em;
    text-transform: uppercase;
    color: #323232;
    background: #fff;
    border: none;
    padding: 15px 20px 20px;
    margin: 5px;
    border-radius: 5px;
    box-shadow: 0 5px 5px rgba(104, 104, 104, 0.1);
    transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);
  }

  .button-container button.button:hover {
    background: black;
    color: #fff;
    box-shadow: none;
    transform: translateY(2.5px);
  }

  button.button.done {
    color: white;
    background: #29cea9;
  }

  button.button.not-done {
    color: white;
    background: #df4141;
  }

  button.button:hover {
    border: none;
  }
</style>

<div data-include="your-html"></div>
<div class="text-cont">
  <h2>🙋🏼‍♀️ check out your homepages below.</h2>
</div>

<div class="button-container">
  <button data-terr="UK" class="button done">UK</button>
  <button data-terr="IE" class="button done">IE</button>
  <button data-terr="EU" class="button done">EU</button>
  <button data-terr="US" class="button done">US</button>
  <button data-terr="AU" class="button done">AU</button>
  <button data-terr="FR" class="button done">FR</button>
  <button data-terr="DE" class="button done">DE</button>
  <button data-terr="ES" class="button done">ES</button>
  <button data-terr="PL" class="button done">PL</button>
</div>
<script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.15/lodash.core.min.js"></script>
<script type="text/javascript">
  document.querySelectorAll("button.button").forEach(x => {
    console.log(x);
    x.addEventListener("click", el => {
      console.log(el);
      let territory = el.target.dataset.terr.toLowerCase();
      let includes = document.querySelector("[data-include]");
      let file = "./" + territory + ".html";

      document.querySelector("html").setAttribute('lang', territory)

      fetch(file)
        .then(response => response.text())
        .then(data => (document.querySelector(".main").innerHTML = data));

      setTimeout(() => {
        let homeScript =
          '!function(e){e(document).ready(function(){e("#homeSlider").slick({infinite:!0,adaptiveHeight:!0,autoplay:!0,autoplaySpeed:5e3,pauseOnHover:!1,dots:!0,slide:".fullwidth",slidesToShow:1,slidesToScroll:1,responsive:[{breakpoint:1e3,settings:{slidesToShow:1,slidesToScroll:1}},{breakpoint:768,settings:"unslick"}]}),e(".slick-three").slick({infinite:!0,adaptiveHeight:!1,slide:":not(.blocker)",dots:!1,slidesToShow:3,slidesToScroll:1,arrows:!0,centerMode:!0,centerPadding:"0",responsive:[{breakpoint:768,settings:{slidesToShow:1,slidesToScroll:1},centerMode:!0,centerPadding:"50",variableWidth:!0}]}),e(".info-strip").slick({slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:2e3,arrows:!1,adaptiveHeight:!0,fade:!0,cssEase:"linear"})}),e(window).on("resize orientationchange",function(){e("#homeSlider").slick("resize"),e(".slick-three").slick("resize")}),e(window).scroll(_.debounce(function(){if(e(window).width()<767){var i=e(this).scrollTop();console.log(i),i>e(".slick-three").offset().top-400&&(e(".slick-three .slick-slide").css("animation","swipe 1200ms ease-in-out forwards"),setTimeout(function(){e(".blocker").css("display","none")},1600))}},100))}(jQuery);';

        let script = document.createElement("script");
        script.innerHTML = homeScript;
        document.body.appendChild(script);
      }, 500);
    });
  });
</script>`
