const MegaBannerWidget = (text) => {
  return `
<style>
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
  .promo-ticker {
    background: #101111;
    position: relative;
    height: 56px;
    color: #FFD4CA;
    font-family: titling-gothic-fb-wide, missguided, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.25rem;
    padding: 0.5rem 0;
    overflow: hidden;
  }
  .promo-ticker div {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
    display: flex;
  }
  .promo-ticker div > span {
    margin-bottom: 0;
    animation: marquee 15s linear infinite;
    will-change: transform;
    display: flex;
    align-items: center;
  }
  .promo-ticker svg {
    height: 38px;
    padding: 0 4rem;
  }

  .promo-ticker span > span {
    font-weight: 400;
  }
</style>
<div class="promo-ticker">
  <div>
    <span>
      ${text}  &#xa0; ${text}  &#xa0; ${text}  &#xa0;
    </span>
    <span>
      ${text}  &#xa0; ${text}  &#xa0; ${text}  &#xa0;
    </span>
    <span>
      ${text}  &#xa0; ${text}  &#xa0; ${text}  &#xa0;
    </span>
  </div>
</div>
  `
}

export default MegaBannerWidget
