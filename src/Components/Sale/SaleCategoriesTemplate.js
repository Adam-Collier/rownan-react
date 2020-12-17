let SaleSwitch = territory => {
  switch (territory.identifier) {
    case 'AU': {
      return /* html */ `<div class="categories-sale__by-category">
          <h2 class="categories-sale__title">Shop by Sale Category</h2>
          <div class="categories-sale__grid">
            <a href="/sale/sale-dresses">
              <picture>
                <source
                  type="image/webp"
                  data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
                <source data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true" />
                <img
                  class="category-tile__image lazyload"
                  data-src="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
              </picture>
            </a>
            <a href="/sale/sale-tops">
              <picture>
                <source
                  type="image/webp"
                  data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
                <source data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true" />
                <img
                  class="category-tile__image lazyload"
                  data-src="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
              </picture>
            </a>
            <a href="/sale/sale-swimwear">
              <picture>
                <source
                  type="image/webp"
                  data-srcset="https://media.missguided.com/i/missguided/Swim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
                <source data-srcset="https://media.missguided.com/i/missguided/Swim_SALE_categories?w=275&fmt.jpeg.interlaced=true" />
                <img
                  class="category-tile__image lazyload"
                  data-src="https://media.missguided.com/i/missguided/Swim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
              </picture>
            </a>
            <a href="/sale/sale-skirts">
              <picture>
                <source
                  type="image/webp"
                  data-srcset="https://media.missguided.com/i/missguided/Skirts_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
                <source data-srcset="https://media.missguided.com/i/missguided/Skirts_SALE_categories?w=275&fmt.jpeg.interlaced=true" />
                <img
                  class="category-tile__image lazyload"
                  data-src="https://media.missguided.com/i/missguided/Skirts_SALE_categories?w=275&fmt.jpeg.interlaced=true"
                />
              </picture>
            </a>
          </div>
        </div>`
    }
    case 'DE': {
      return /* html */ `<div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Nach Kategorie shoppen</h2>
  <div class="categories-sale__grid">
    <a href="/de/sale/kleider">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/DE_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/DE_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/DE_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/de/sale/oberteile">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/DE_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/DE_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/DE_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/de/kooperationen/playboy">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/DE_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/DE_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/DE_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/de/sale/denim">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/DE_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/DE_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/DE_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>`
    }
    case 'ES': {
      return /* html */ `
      <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Comprar por categoría</h2>
  <div class="categories-sale__grid">
    <a href="/es/rebajas/vestidos">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/ES_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/ES_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/ES_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/es/rebajas/sale-tops">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/ES_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/ES_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/ES_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/es/rebajas/pantalones">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/ES_Trousers_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/ES_Trousers_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/ES_Trousers_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/es/rebajas/zapatos">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/ES_Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/ES_Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/ES_Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    case 'EU': {
      return /* html */ `
      <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Shop by Sale Category</h2>
  <div class="categories-sale__grid">
    <a href="/sale/sale-dresses">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-tops">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/collaborations/playboy">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-denim">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    case 'IE': {
      return /*html*/ `
        <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Shop by Sale Category</h2>
  <div class="categories-sale__grid">
    <a href="/ie/sale/sale-dresses">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/ie/sale/sale-tops">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/ie/sale/sale-footwear">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/ie/sale/sale-plus-size">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    case 'PL': {
      return /*html*/ `
        <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Kupuj według kategorii</h2>
  <div class="categories-sale__grid">
    <a href="/pl/wyprzedaz/wyprzedaz-sukienek">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/PL_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/PL_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/PL_Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/pl/wyprzedaz/wyprzedaz-topy">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/PL_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/PL_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/PL_Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/pl/wspolpraca/playboy">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/PL_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/PL_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/PL_Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/pl/wyprzedaz/wyprzedaz-denim">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/PL_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/PL_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/PL_Denim_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    case 'UK': {
      return /*html*/ `
      <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Shop by Sale Category</h2>
  <div class="categories-sale__grid">
    <a href="/sale/sale-dresses">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-tops">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-footwear">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Footwear_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-plus-size">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Plus_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    case 'US': {
      return /*html*/ `
        <div class="categories-sale__by-category">
  <h2 class="categories-sale__title">Shop by Sale Category</h2>
  <div class="categories-sale__grid">
    <a href="/sale/sale-dresses">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Dresses_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-tops">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Tops_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/collaborations/playboy">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Playboy_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
    <a href="/sale/sale-petite">
      <picture>
        <source
          type="image/webp"
          data-srcset="https://media.missguided.com/i/missguided/Petite_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <source
          data-srcset="https://media.missguided.com/i/missguided/Petite_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
        <img
          class="category-tile__image lazyload"
          data-src="https://media.missguided.com/i/missguided/Petite_SALE_categories?w=275&fmt.jpeg.interlaced=true"
        />
      </picture>
    </a>
  </div>
</div>
      `
    }
    default: {
      return 'no sale items'
    }
  }
}

let SaleCategoriesTemplate = territory => /*html*/ `<style>
    .categories-sale__by-category {
      background: #f6dbde;
    }
    .categories-sale__grid {
      max-width: 1060px;
      margin: 0 auto;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 1rem;
      padding: 2rem 1rem 3rem;
      justify-content: center;
    }
    .categories-sale__grid img {
      width: 100%;
    }
    @media (max-width: 767px) {
      .categories-sale__grid {
        grid-template-columns: 1fr 1fr;
      }
    }
  </style>
  ${SaleSwitch(territory)}
  `

export default SaleCategoriesTemplate
