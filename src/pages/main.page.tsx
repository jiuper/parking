import { useMediaQuery } from '@mantine/hooks'
import { Mousewheel } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import AboutPlace from '../components/about-place.component'
import AboutUs from '../components/about-us.component'
import Footer from '../components/footer.component'
import GeoPosition from '../components/geo-position.component'
import Header from '../components/header.component'
import Hero from '../components/hero.component'
import NewsProject from '../components/news-project.component'
import ParkingPlan from '../components/parking-plan.component'
import PhotoGallery from '../components/photo-gallery.component'
import ScrollControls from '../components/scroll-controls.component'
import { useParams } from 'react-router-dom'

export default function MainPage() {
  const isDesktop = useMediaQuery('(min-width: 1024px)')
  const { id } = useParams()
  return (
    <>
      {isDesktop ? (
        <Swiper
          modules={[Mousewheel]}
          direction="vertical"
          mousewheel={true}
          speed={1000}
          style={{ width: '100vw', height: '100vh' }}
        >
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <Header />
            <Hero />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <ParkingPlan count={Number(id === undefined ? 1 : id)} />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <AboutUs />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <AboutPlace />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <GeoPosition />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <NewsProject />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <PhotoGallery />
          </SwiperSlide>
          <SwiperSlide style={{ width: '100vw', height: '100vh' }}>
            <Footer />
          </SwiperSlide>
          <ScrollControls />
        </Swiper>
      ) :  <>
        <Header />
        <Hero />
        <ParkingPlan count={Number(id === undefined ? 1 : id)} />
        <AboutUs />
        <AboutPlace />
        <GeoPosition />
        <PhotoGallery />
        <NewsProject />
        <Footer />
      </>}
    </>
  )
}
