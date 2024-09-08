import { Modal } from '@mantine/core'
import { useState } from 'react'
import Button from '../shared-ui/button.component'
import ContactForm from './contact-form.component'
import Section from './section.component'
import hero from '../../public/images/Design Description_5 1.png'
import cnBind from 'classnames/bind'
import styles from "./index.module.scss"
import clsx from 'clsx'

const cx = cnBind.bind(styles)

enum ModalTypes {
  Form,
  Success,
  Error,
}

export default function AboutUs() {
  const [openedModalType, setOpenedModalType] = useState<ModalTypes | null>(null)

  return (
    <Section className="w-full h-full">
      <div className={cx("wrapper")}>
        <div className={cx("image-wrapper")}>
          <img className={cx("image",'image-about')} src={hero} alt="hero" />
        </div>

        <div className={cx('parking-main', "about-main")}>
          <div className={clsx(cx('flex flex-col items-start lg:items-start gap-[70px] max-w-[36rem] w-full'))}>
            <h2 className={clsx(cx("caption-about","uppercase text-white font-bold"))}>О нас</h2>
            <div className={"flex flex-col gap-[20px]"}>
              <p className={clsx(cx('title-about', ' text-white'))}>
                Мы - группа компаний, занимающаяся переустройством нежилых зданий в
                Санкт-Петербурге и Ленинградской области.
              </p>
              <p className={clsx(cx('title-about', ' text-white'))}>
                Наша команда активно работает с 2015
                года и имеет на счету уже более 15 реализованных проектов. Мы предоставляем
                новые возможности как для жильцов, так и для бизнеса. За 9 лет работы мы помогли
                более ста арендаторам найти помещения для своего бизнеса, инвесторам получить
                возможность иметь пассивный доход, и более тысячи жильцов получили возможность
                приобрести парковочные и кладовые места в собственность.
              </p>
            </div>

          </div>

          <div className={clsx(cx('buttons', 'flex justify-center lg:block'))}>
            <Button
              className="py-4 px-12 lg:text-xl uppercase shadow-md"
              onClick={() => setOpenedModalType(ModalTypes.Form)}
            >
              Связаться с нами
            </Button>
          </div>
        </div>
      </div>


      <Modal
        opened={openedModalType === ModalTypes.Form}
        title="Оставьте свои данные, и наш менеджер свяжется с вами"
        centered
        zIndex={1000}
        size="xl"
        classNames={{
          content: 'rounded-[2rem]',
          header: 'py-[2.05rem] pl-[3.4rem] pr-[2.9rem]',
          title: 'text-[2rem]',
          body: 'pb-[2.75rem] pl-[3.4rem] pr-[4.1rem]'
        }}
        closeButtonProps={{ size: 'xl' }}
        onClose={() => setOpenedModalType(null)}
      >
        <ContactForm
          onSubmit={() => setOpenedModalType(ModalTypes.Success)}
          onError={() => setOpenedModalType(ModalTypes.Error)}
        />
      </Modal>
    </Section>

  )
}
