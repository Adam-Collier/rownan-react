import defaultEditorCode from './defaultEditorCode'

const initialState = {
  appDownload: {
    link: '',
    title: '',
    subtitle: '',
  },
  saleTextBanner: {
    link: '',
    headline: '',
    tagline: '',
    cta: '',
    terms: '',
  },
  categories: Array(5).fill({ url: '', title: '', image: '' }),
  saleCategories: Array(4).fill({ url: '', image: '' }),
  contentBlocks: [],
  contentView: true,
  editorCode: defaultEditorCode,
  outputHTML: `${defaultEditorCode}
<div class="container">
  <div id="homeSlider">
  </div>
  <div class="slick-three">
    <div class="blocker"></div>
    
  </div>
</div>
  `,
  promoBlocks: [],
  territory: {
    identifier: 'UK',
    url: 'https://www.missguided.co.uk/',
  },
  tickerText: '',
  savedFilePath: '',
}

export default initialState
