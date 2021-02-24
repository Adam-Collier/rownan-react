import addImageTransformations from '../../lib/addImageTransformations'

const SaleCategoryTemplate = (categories, territory) => {
  let categoryTitle = () => {
    switch (territory.identifier) {
      case 'DE': {
        return 'Nach Kategorie shoppen'
      }
      case 'PL': {
        return 'Kupuj według kategorii'
      }
      case 'FR': {
        return 'Soldes sur les catégorie'
      }
      case 'ES': {
        return 'Comprar por categoría'
      }
      default: {
        return 'Shop by Sale Category'
      }
    }
  }

  let saleCategoryStyles = () => /*html*/ `
    <style>
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
  `

  return /*html*/ `
    ${saleCategoryStyles()}
    <div class="categories-sale__by-category">
      <h2 class="categories-sale__title">${categoryTitle()}</h2>
      <div class="categories-sale__grid">
        ${categories
          .map(
            (category) => `
          <a href="${category.url}">
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
          </a>
        `
          )
          .join('')}
      </div>
    </div>
  `
}

export default SaleCategoryTemplate
