import { type IconType } from 'react-icons'

interface SocialIconsProps {
  url: string
  Icon: IconType
  label?: string
}

function SocialIcons({
  url,
  Icon,
  label = 'social-media-buttons'
}: SocialIconsProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center justify-center hover:bg-accent dark:hover:bg-accent hover:text-theme-bg dark:hover:text-theme-bg p-2 rounded-full transition-colors"
      aria-label={label}
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default SocialIcons
