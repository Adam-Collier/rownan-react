const MegaBannerWidget = text => {
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
    background: #d53a40;
    position: relative;
    height: 40px;
    color: #fff;
    font-family: titling-gothic-fb-wide, missguided, sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    padding: 0.5rem 0;
    overflow: hidden;
  }
  .friday-ticker div {
    margin: 0 auto;
    white-space: nowrap;
    overflow: hidden;
    position: absolute;
  }
  .friday-ticker span {
    margin-bottom: 0;
    display: inline-block;
    animation: marquee 15s linear infinite;
    will-change: transform;
  }
</style>
<div class="friday-ticker">
  <div>
    <span>
      ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0;
    </span>
    <span>
      ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0;
    </span>
    <span>
      ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0; ${text} &#xa0; &#183; &#xa0;
    </span>
  </div>
</div>
  `
}

export default MegaBannerWidget
