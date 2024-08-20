import { useSwiper } from 'swiper/react'
import Button from '../shared-ui/button.component'
import Section from './section.component'
import { useNavigate } from 'react-router-dom'

export default function Hero() {
  const swiper = useSwiper()
  const router = useNavigate()
  const handleButtonClick = (type: 'parking' | 'pantry') => {
    if (type === 'parking') {
      router(`/${1}`)
    }
    if (type === 'pantry') {
      router(`/${3}`)
    }
    if (window.innerWidth >= 1024) {
      swiper.slideNext()
      return
    }
    const parkingPlanElement = document.querySelector('#parking-plan')
    if (parkingPlanElement) {
      parkingPlanElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <Section className="relative bg-hero bg-cover bg-left lg:bg-center flex items-center px-5 lg:px-[8.1rem]">
      <img src="/images/hero-logo.png" alt="" className="w-full lg:w-[53.95rem]" />
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex flex-col lg:flex-row gap-5">
        <Button
          className="py-4 lg:text-xl uppercase shadow-md w-80 lg:w-[25rem]"
          onClick={() => handleButtonClick('parking')}
        >
          Купить машино-место
        </Button>
        <Button
          className="py-4 lg:text-xl uppercase shadow-md w-80 lg:w-[25rem]"
          onClick={() => handleButtonClick('pantry')}
        >
          Купить кладовое помещение
        </Button>
      </div>
    </Section>
  )
}
