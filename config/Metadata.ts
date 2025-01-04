const AUTHOR = 'Khanh Nguyen'
const TITLE = 'CLB Hỗ trợ lập trình'
const DESCRIPTION = 'CLB Hỗ trợ lập trình SPIT'
const KEYWORDS = ['SPIT']
const NAME = 'CLB SPIT'
const URL = 'http://localhost:3000'
interface Metadata {
  title?: string
  description?: string
  path?: string
}
const METADATA = ({ title, description, path }: Metadata) => {
  let tempTitle = TITLE
  if (path) {
    if (title) {
      tempTitle = `${title}`
    } else {
      tempTitle = `${path} - ${TITLE}`
    }
  }
  return {
    title: tempTitle,
    description: description || DESCRIPTION,
    keywords: KEYWORDS,
    author: AUTHOR,
    robots: 'index, follow',
    openGraph: {
      type: 'website',
      url: URL,
      title: TITLE,
      description: DESCRIPTION,
      siteName: NAME,
      images: [
        {
          url: '',
          alt: TITLE,
        },
      ],
      locale: 'vi_VN',
    },
  }
}
export default METADATA
