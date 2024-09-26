import { useSwiper } from 'swiper/react'
import Button from '../shared-ui/button.component'
import Section from './section.component'
import {  useNavigate } from 'react-router-dom'
import cnBind from "classnames/bind"
import styles from "./index.module.scss"
import hero from "../../public/images/hero.jpeg"
import clsx from 'clsx'
const cx = cnBind.bind(styles)
export default function Hero() {
  const swiper = useSwiper()
  const router = useNavigate()
  const handleButtonClick = (type: 'parking' | 'pantry') => {
    if (type === 'parking') {
      router(`/5`)
    }
    if (type === 'pantry') {
      router(`/3`)
    }
    if (window.innerWidth >= 1024) {
      swiper.slideNext()
      return
    }

    window.scrollTo({
      top: 1000,
      behavior: 'smooth'
    });

  }

  return (
    <Section className="w-full h-full">
      <div className={cx("wrapper")}>
        <div className={cx("image-wrapper")}>
          <img className={cx('image')} src={hero} alt="hero" />
        </div>

        <div className={cx('parking-main')}>
          <div className={'flex flex-col items-start lg:items-start gap-5 max-w-[36rem] w-full'}>
            <h1 className={clsx(cx("caption","uppercase text-white font-bold text-3xl sm:text-4xl sm:leading-[119%] lg:text-[3.2rem] lg:leading-[121%] mt-12"))}>
              машино-места
              И КЛАДОВЫЕ
              ПОМЕЩЕНИЯ В ЖК
              “ЧИСТОЕ НЕБО”
            </h1>
            <div className={cx("dividing-line")} />
            <span className={clsx(cx("title","uppercase text-white text-2xl font-bold lg:text-3xl"))}>комендантский пр. 66 к.2</span>
          </div>
          <div
            className={clsx(cx("buttons",'left-1/2 flex lg:lex-col lg:justify-start justify-center lg:flex-row gap-5 lg:w-full'))}>
            <Button
              className="py-2 lg:flex-none flex-initial basis-full text-[0.65rem] sm:text-[0.75rem] lg:text-[0.9rem] uppercase shadow-md w-[14rem]"
              onClick={() => handleButtonClick('parking')}
            >
              Купить машино-место
            </Button>
            <Button
              className="py-2 lg:flex-none flex-initial basis-full text-[0.65rem] sm:text-[0.75rem] lg:text-[0.9rem] uppercase shadow-md max-w-[14rem] w-full"
              onClick={() => handleButtonClick('pantry')}
            >
              Купить кладовое помещение
            </Button>
          </div>
        </div>
      </div>
    </Section>
  )
}
