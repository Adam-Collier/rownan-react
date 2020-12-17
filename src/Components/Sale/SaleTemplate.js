const SaleTemplate = blocks => {
  return blocks
    .map((block, index) => {
      return /*html*/ `
      <style>
        .categories-sale__container, #homeSlider  {
          background: #f6dbde;
        }

        .categories-sale__container__last{
          padding-bottom: 3rem;
        }

        .categories-sale__container:last-of-type {
          margin-bottom: 5rem;
        }

        .categories-sale__heading {
          padding-top: 3rem;
          padding-bottom: 0.75rem;
        }

        .categories-sale__title {
          font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
          font-weight: 700;
          text-transform: none;
          margin-bottom: 0;
        }

        .categories-sale__ctas {
          display: flex;
          flex-wrap: wrap;
          width: calc(100% - 2rem);
          max-width: 1100px;
          margin: 0 auto;
          align-items: flex-start;
          justify-content: center;
        }

        .categories-sale__ctas button.button {
          font-family: 'titling-gothic-fb-wide', missguided, arial, sans-serif;
          margin-left: 0.5rem;
          margin-right: 0.5rem;
          background: #d53a40;
          border-color: #d53a40;
        }

        @media(min-width: 768px){
          .categories-sale__title{
            font-size: 1.75rem;
          }
        }
      </style>
      <div class="categories-sale__container ${
        index === blocks.length - 1 ? 'categories-sale__container__last' : ''
      }">
        <h2 class="categories-sale__heading categories-sale__title">${
          block.title
        }</h2>
        <div class="categories-sale__ctas">
          ${block.ctas
            .map(
              cta => /*html*/ `
            <a href="${cta.url}">
              <button class="button">${cta.text}</button>
            </a>
          `
            )
            .join('')}
        </div>
      </div>
  `
    })
    .join('')
}

export default SaleTemplate
