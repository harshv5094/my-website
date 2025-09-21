import { Helmet } from 'react-helmet-async'

// Type declaration for SEO
interface SEOTypes {
  title?: string
  description?: string
}

// Default title if none is passed
const titleDefault: string = 'Harsh Vapari'

// Default Description if none is passed
const descriptionDefaultText: string =
  'Hello, This website belongs to Harsh Vyapari, A software developer from india. My favorite hobbies are books and computers.'

function SEO({
  title = titleDefault,
  description = descriptionDefaultText
}: SEOTypes) {
  return (
    <Helmet>
      <title>{title}</title>
      {/* Standard metadata tags */}
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <meta property="og:title" content="Harsh Vyapari - Software Developer" />
      <meta
        property="og:description"
        content="Linux and Open Source enthusiast"
      />
    </Helmet>
  )
}

export default SEO
