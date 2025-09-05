import type { related } from './related'

export type Photo = {
  likes: number
  id: string
  title: string
  description: string
  alt_description: string
  alternative_slugs: string
  color: string
  views: number
  links: {
    download: string
    download_location: string
    html: string
    self: string
  }
  urls: {
    raw: string
    full: string
    regular: string
    small: string
    thumb: string
  }
  user: {
    id: string
    name: string
    username: string
    portfolioUrl: string
    profile_image: {
      small: string
      medium: string
      large: string
    }
  }
  tags: [
    {
      type: string
      title: string
    },
  ]
  topics: [
    {
      id: string
      title: string
    },
  ]
  related_collections: {
    total: number
    type: string
    links: {
      html: string
    }
    results: related[]
  }
}
