import { type IconType } from 'react-icons'

interface SocialIconsProps {
  url: string
  Icon: IconType
}

function SocialIcons({ url, Icon }: SocialIconsProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default SocialIcons
