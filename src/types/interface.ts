export interface Photo {
  likes: number
  id: string
  title: string
  description: string
  color: string
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
}
