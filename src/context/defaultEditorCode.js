export default `<style>
  .title1,
  .title3,
  .subtitle1,
  .subtitle3,
  .container .button {
    text-transform: none;
  }
  @media (min-width: 768px) {
    .row button.button {
      background: rgb(255, 255, 255);
      color: rgb(50, 50, 50);
      border-color: rgb(255, 255, 255);
    }
    .row svg{
      margin-bottom: 40px;
      filter: drop-shadow(0 0 10px rgba(0,0,0,0.3));
    }
    .row .subtitle1{
      margin-bottom: 20px;
      text-shadow: 0 0 10px rgba(0,0,0,0.3);
    }
    .row .banner_content {
      width: 100%;
    }
    .row1 .title1,
    .row2 .title1,
    .row3 .title1 {
      display: none;
    }
    .row .subtitle1 {
      margin-top: 20px;
    }
  }
  @media (max-width: 767px) {
    .row svg {
      display: none;
    }
  }
</style>`
