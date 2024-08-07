import { useMediaQuery } from '@mantine/hooks'
import clsx from 'clsx'
import { memo, useState } from 'react'
import ImageViewer from './image-viewer.component'
import Section from './section.component'
import { Image } from '@mantine/core'

const Photos = [
  '/images/photos/photo-1.webp',
  '/images/photos/photo-2.webp',
  '/images/photos/photo-3.webp',
  '/images/photos/photo-4.webp',
  '/images/photos/photo-5.webp',
  '/images/photos/photo-6.webp',
  null,
  null,
  '/images/photos/photo-7.webp',
  '/images/photos/photo-8.webp',
  '/images/photos/photo-9.webp',
  '/images/photos/photo-10.webp',
]

export const PhotoGallery = () =>  {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState<number | null>(null)

  const selectedPhoto =
    selectedPhotoIndex !== null ? Photos[selectedPhotoIndex] ?? '' : ''

  const handlePreviousPhotoClick = () => {
    if (selectedPhotoIndex === null) return

    const newIndex = selectedPhotoIndex <= 0 ? Photos.length - 1 : selectedPhotoIndex - 1
    setSelectedPhotoIndex(newIndex === 5 ? 8 : newIndex)
  }

  const handleNextPhotoClick = () => {
    if (selectedPhotoIndex === null) return

    const newIndex = selectedPhotoIndex >= Photos.length - 1 ? 0 : selectedPhotoIndex + 1
    setSelectedPhotoIndex(newIndex === 8 ? 5 : newIndex)
  }

  return (
    <Section
      id="photo-gallery"
      className="pt-24 lg:pt-0 bg-additional flex flex-col justify-center items-center"
    >
      <h2 className="w-full px-5 lg:px-[8.1rem] mb-16 text-5xl lg:text-4xl font-bold text-white">
        Фотогалерея
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-5">
        {Photos.map((photo, index) => (
          <>
            {photo ? (
              <>
                {isDesktop ? (
                  <button
                    className={clsx('cursor-pointer', index === 1 && 'lg:col-start-2 lg:col-end-4 lg:row-start-1 lg:row-end-3')}
                    onClick={() => setSelectedPhotoIndex(index)}
                  >
                    <Image
                      src={photo}

                      className="w-full object-cover object-center"
                      alt=""
                    />
                  </button>
                ) : (
                  <Image
                    src={photo}

                    className="w-full object-cover object-center"
                    alt=""
                  />
                )}
              </>
            ): <div/>}
          </>
        ))}
      </div>

      <ImageViewer
        imageSrc={selectedPhoto}
        isOpen={selectedPhotoIndex !== null}
        onClose={() => setSelectedPhotoIndex(null)}
        onPrevious={handlePreviousPhotoClick}
        onNext={handleNextPhotoClick}
      />
    </Section>
  )
}
export default memo(PhotoGallery)