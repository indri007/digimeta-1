export default {
  titleTemplate: '%s | DigimetaShop',
  defaultTitle: 'DigimetaShop | Toko Buku & Ebook Terlengkap (PDF, Kindle, Mobi)',
  description: 'Belanja eBook dan buku eksklusif lebih dari 5000 koleksi hanya di DigimetaShop. Fast, fun, and full of inspiration!',
  canonical: 'https://www.digimetashop.com/',
  
  // Additional meta tags
  additionalMetaTags: [
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    },
    {
      name: 'keywords',
      content: 'ebook, buku digital, PDF, Kindle, Mobi, toko buku online, buku murah, download buku'
    },
    {
      name: 'author',
      content: 'DigimetaShop'
    },
    {
      name: 'robots',
      content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
    },
    {
      name: 'theme-color',
      content: '#A7D8FF'
    },
    {
      name: 'msapplication-TileColor',
      content: '#A7D8FF'
    }
  ],
  
  // Language and locale
  languageAlternates: [
    {
      hrefLang: 'id',
      href: 'https://www.digimetashop.com/'
    },
    {
      hrefLang: 'x-default',
      href: 'https://www.digimetashop.com/'
    }
  ],
  
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: 'https://www.digimetashop.com/',
    title: 'DigimetaShop | Toko Buku & Ebook Terlengkap (PDF, Kindle, Mobi)',
    description: 'Belanja eBook dan buku eksklusif lebih dari 5000 koleksi hanya di DigimetaShop. Fast, fun, and full of inspiration!',
    images: [
      {
        url: 'https://www.digimetashop.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DigimetaShop - Toko Buku & Ebook Terlengkap',
        type: 'image/png'
      }
    ],
    site_name: 'DigimetaShop'
  },
  
  twitter: {
    handle: '@digimetashop',
    site: '@digimetashop',
    cardType: 'summary_large_image'
  },
  
  // JSON-LD structured data
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico'
    },
    {
      rel: 'apple-touch-icon',
      href: '/logo.png',
      sizes: '180x180'
    },
    {
      rel: 'manifest',
      href: '/manifest.json'
    }
  ]
}
