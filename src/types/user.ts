import type { Photo } from './photo'

export type User = {
  user_id: string
  userImage: string
  id: string
  name: string
  email: string
  image: string
  username: string
  bio: string
  location: string
  website: string
  company: string
  profile_image: {
    small: string
    medium: string
    large: string
  }
  photos: Photo[]
}
