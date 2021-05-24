const defaultEditorCode = `<style>
  .row-placeholder {
    position: relative;
    overflow: hidden;
    height: 0;
    width: 100%;
    background-color: #ECECF2;
    padding-top: 44.79%;
  }
  .row img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      max-width: none;
      transform: translateZ(0);
      transition: opacity 0.5s linear;
      will-change: opacity;
  }
  @media(max-width: 767px){
      .row-placeholder {
          padding-top: 100%;
      }
  }
  .title1,
  .title3,
  .subtitle1,
  .subtitle3,
  .container .button {
    text-transform: none;
  }
  .row button.button {
    margin-left: 0.5rem;
    margin-right: 0.5rem;
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
    .row .banner_content {
      top: auto;
    }
  }
</style>`

export default defaultEditorCode
