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
  .friday-ticker {
    background: #101111;
    position: relative;
    height: 72px;
    color: #FFD4CA;
    font-family: titling-gothic-fb-wide, missguided, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1.25rem;
    padding: 0.5rem 0;
    overflow: hidden;
  }
  .friday-ticker div {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
    top: 50%;
    transform: translatey(-50%);
  }
  .friday-ticker div > span {
    margin-bottom: 0;
    display: inline-block;
    animation: marquee 15s linear infinite;
    will-change: transform;
  }

  .friday-ticker span > span {
    font-weight: 400;
  }
</style>
<div class="friday-ticker">
  <div>
    <span>
      ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0;
    </span>
    <span>
      ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0;
    </span>
    <span>
      ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0; ${text} &#xa0; - &#xa0;
    </span>
  </div>
</div>
  `
}

export default MegaBannerWidget
