import { Helmet } from 'react-helmet-async'

interface SEOTypes {
  title?: string
  description?: string
}

const titleDefault: string = 'Harsh Vapari'

const descriptionDefaultText: string =
  'Hello, This website belongs to Harsh Vyapari, A software developer from india. My favorite hobbies are books and computers.'

function SEO({
  title = titleDefault,
  description = descriptionDefaultText
}: SEOTypes) {
  return (
    <Helmet>
      {/* Standard metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
    </Helmet>
  )
}

export default SEO
