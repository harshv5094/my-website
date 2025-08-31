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
      className="inline-flex items-center justify-center hover:bg-accent dark:hover:bg-accent hover:text-theme-bg dark:hover:text-theme-bg p-2 rounded-full transition-colors"
      aria-label="social-media-buttons"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default SocialIcons
