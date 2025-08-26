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
      className="inline-flex items-center justify-center hover:bg-gruvbox-aqua dark:hover:bg-gruvbox-aqua hover:text-gruvbox-bg dark:hover:text-gruvbox-bg p-2 rounded-full transition-colors"
    >
      <Icon className="h-5 w-5" />
    </a>
  )
}

export default SocialIcons
