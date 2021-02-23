const MegaBannerWidget = (territory) => {
  switch (territory.identifier) {
    case 'AU': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="4fe96810-f02c-44e7-a5d2-0d0b32df53eb"}}`
    }
    case 'DE': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="f5738206-ff50-4d7b-97df-6674f0e3aa83"}}`
    }
    case 'ES': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="325c2eb7-dda9-425a-9df7-935d8c32899d"}}`
    }
    case 'EU': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="166c89ce-a158-4ff2-9482-8327420b2e4d"}}`
    }
    case 'FR': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="5ddd291a-d65d-4ea8-b2c9-65aaebd5301b"}}`
    }
    case 'IE': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="eec0023c-d971-4b24-9ed8-ab8773b4eb34"}}`
    }
    case 'PL': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="a175e592-7318-4deb-a32c-ecc7dbcb413e"}}`
    }
    case 'UK': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="77fabc67-63ea-4a53-b426-d5ded712fffb"}}`
    }
    case 'US': {
      return `{{widget type="missguided_widget/widget_contentService" slot_id="e9baec40-8fc3-4e64-ac41-69ecca100c96"}}`
    }

    default: {
      return 'no widget has been added'
    }
  }
}

export default MegaBannerWidget
