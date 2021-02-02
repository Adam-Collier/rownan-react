const InfoStripTemplate = (blocks) => {
  return `
  <style>
    .info-strip {
      height: 48px;
      margin-bottom: 2em;
    }

    .info-strip .info {
      margin: 0;
      padding: 0.5em;
      background: #fee0e2;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .info-strip .info a {
      display: block;
      width: 100%;
      height: 100%;
    }

    .info-strip .info h3 {
      margin: 0.25em;
      padding: 0;
      font-size: 16px;
      line-height: 28px;
    }

    @media (max-width: 767px) {
      .info-strip {
        margin-bottom: 60px;
      }

      .info-strip .info h3 {
        text-transform: lowercase;
        font-size: 15px;
        font-size: 0.9375rem;
      }
    }

    @media (max-width: 320px) {
      .info-strip .info h3 {
        font-size: 10px;
      }
    }

    @media (min-width: 1600px) {
      .info-strip .info h3 {
        font-size: 20px;
      }
    }
  </style>
  <div class="info-strip">${blocks
    .map(
      (block) => `
    <div class="info">
      <a href="${block.url}">
        <h3 id="delivery-message">
          ${block.title}
        </h3>
      </a>
    </div>`
    )
    .join('')}
  </div>
  <script>
    (function ($) {
      jQuery(document).ready(function () {
        jQuery(".info-strip").slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          arrows: false,
          adaptiveHeight: true,
          fade: true,
          cssEase: "linear"
        });
      });
    })(jQuery);
  </script>`
}

export default InfoStripTemplate
