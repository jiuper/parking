import { BASE_API_URL } from '../constants/env-vars.constant'
import { INewsPost } from '../types/news-post.type'
import { memo } from 'react'
import { Image } from '@mantine/core'

interface INewsPostCardProps {
  post: INewsPost
}
const NewsPostCard = ({post}: INewsPostCardProps) => {

  const { title, description, createdAt, imagePath } = post

  return (
    <div className="bg-white text-black rounded-3xl pt-5 pb-9 px-5 h-[37rem]">
      <h2 className="mb-2 text-2xl font-bold">{title}</h2>
      <p className="mb-4 text-gray text-sm font-bold">{new Date(createdAt).toLocaleDateString('ru')}</p>
      <Image
        src={`${BASE_API_URL}/image?imageName=${imagePath}`}
        alt=""
        className="w-full aspect-video rounded-xl mb-5 object-cover object-center"
      />
      <p className="text-sm">{description}</p>
    </div>
  )
}
export default memo(NewsPostCard)