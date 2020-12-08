import addImageTransformations from '../../lib/addImageTransformations'

const CategoryTemplate = (categories, territory) => {
  let categoryTitle = () => {
    switch (territory.identifier) {
      case 'DE': {
        return 'Shoppe nach'
      }
      case 'PL': {
        return 'sprawdź nasze'
      }
      case 'FR': {
        return 'parcourir les catégories'
      }
      case 'ES': {
        return 'Ver categorías'
      }
      default: {
        return 'browse categories'
      }
    }
  }

  return `
  <style>
    .categories-container--mobile {
      display: block;
    }

    .categories-container--desktop {
      display: none;
    }

    .categories-container__heading {
      text-align: center;
      padding-bottom: 32px;
      padding-top: 70px;
      margin-bottom: 0;
    }

    .categories-carousel {
      margin: 0 auto 20px auto;
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      padding-right: 20px;
    }

    .categories-carousel::-webkit-scrollbar {
      display: none;
    }

    .category-tile__link {
      width: 100%;
      margin-left: 16px;
    }

    .category-tile__heading {
      padding-top: 8px;
      text-align: center;
    }

    @media (min-width: 1200px) {
      .categories-carousel {
        max-width: 1060px;
        padding-right: 40px;
        padding-left: 20px;
      }
    }

    @media (min-width: 768px) {
      .categories-container--mobile {
        display: none;
      }

      .categories-container--desktop {
        display: block;
      }
    }

    @media (max-width: 768px) {
      .categories-container__heading {
        padding: 0px 40px 30px 40px;
      }

      .categories-container {
        position: relative;
      }

      .categories-container:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        height: 10px;
        width: 100%;
        background: #fef5f0;
      }

      .categories-carousel {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        padding-bottom: 40px;
      }

      .category-tile__link:last-of-type {
        padding-right: 16px;
      }

      .category-tile__image {
        max-width: none;
        width: 180px;
      }
    }

    @media (max-width: 660px) {
      .category-tile__image {
        width: 38vw;
      }
    }
  </style>
  <div class="categories-container categories-container-- modifier">
    <h2 class="categories-container__heading">${categoryTitle()}</h2>
    <div class="categories-carousel">
      ${categories
        .map(
          category =>
            `<a class="category-tile__link" href="${category.url}">
          <div class="category-tile">
            <picture>
              <source type="image/webp" data-srcset="${addImageTransformations(
                category.image,
                '200',
                'category',
                true
              )}" >
              <source data-srcset="${addImageTransformations(
                category.image,
                '200',
                'category',
                false
              )}" >
              <img class="category-tile__image lazyload" data-src="${addImageTransformations(
                category.image,
                '100',
                'category'
              )}" />
            </picture>
            <h3 class="category-tile__heading">${category.title}</h3>
          </div>
        </a>`
        )
        .join('')} 
    </div>
  </div>`
}

export default CategoryTemplate
