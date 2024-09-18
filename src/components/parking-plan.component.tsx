import { Image, Loader, Modal, NumberFormatter } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import { useQuery } from '@tanstack/react-query'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { getPantryPlaces } from '../api/get-pantry-places'
import { getParkingPlaces } from '../api/get-parking-places'
import { FloorRecord, FloorRecordEntries } from '../constants/floors-record.constant'
import { PantryPlaceStatusMarkings } from '../constants/pantry-place-status-markings.constant'
import { ParkingPlaceStatusMarkings } from '../constants/parking-place-status-markings.constant'
import { ParkingPlaceTypesRecord } from '../constants/parking-place-types-record.constant'
import { ParkingPlanImagesRecord } from '../constants/parking-plan-images-record'
import Button from '../shared-ui/button.component'
import Link from '../shared-ui/link.component'
import { useFloorStore } from '../stores/use-floor-store.hook'
import { IPantryPlace } from '../types/pantry-place.type'
import { IParkingPlace } from '../types/parking-place.type'
import PantryPlace from './pantry-place.component'
import ParkingPlace from './parking-place.component'
import PlaceBookingForm from './place-booking-form.component'
import Section from './section.component'
import { useNavigate } from 'react-router-dom'
import { ParkingPlaceMobileComponents } from './parking-place-mobile.components.tsx'
import { PantryPlaceMobileComponent } from './pantry-place-mobile.component.tsx'
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch'
import styles from "./index.module.scss"
import cnBind from 'classnames/bind'

const cx = cnBind.bind(styles)

enum ModalTypes {
  ParkingForm,
  PantryForm,
  Success,
  Error,
}
type ParkingPlan = {
  count: number
}
const listFloor = ["Парковочные места", "Парковочные места","Кладовые помещения", "Кладовые помещения","Парковочные места"]
export default function ParkingPlan({count}:ParkingPlan) {
  const isDesktop = useMediaQuery('(min-width: 1024px)')

  const setFloor = useFloorStore((store) => store.setFloor)
  const router = useNavigate()
  const [openDropDown, setOpenDropDown] = useState(false)
  const {
    data: parkingPlaces,
    isLoading: isParkingPlacesLoading,
    isError: isParkingPlacesError,
  } = useQuery({
    queryKey: ['parking-places'],
    queryFn: getParkingPlaces,
  })
  const handelHref = (num:number) =>{
    setSelectedFloor(num)
    router(`/${num}`)
  }
  const {
    data: pantryPlaces,
    isLoading: isPantryPlacesLoading,
    isError: isPantryPlacesError,
  } = useQuery({
    queryKey: ['pantry-places'],
    queryFn: getPantryPlaces,
  })

  const [isOpenParking, setIsOpenParking] = useState(false);
  const [parkingPlaceId, setParkingPlaceId] = useState<number | null>(null);
  const handleParkingClick = (id: number | null) => {
    setIsOpenParking(true);
    setParkingPlaceId(id);
  }

  const [isOpenPantry, setIsisOpenPantry] = useState(false);
  const [pantryPlaceId, setPantryPlaceId] = useState<number | null>(null);
  const handlePantryClick = (id: number | null) => {
    setIsisOpenPantry(true);
    setPantryPlaceId(id);
  }
  const [selectedFloor, setSelectedFloor] = useState(1)
  const [selectedPlaceInfo, setSelectedPlaceInfo] = useState<{
    id: number
    type: 'parking' | 'pantry'
  } | null>(null)
  const [openedModalType, setOpenedModalType] = useState<ModalTypes | null>(null)
  const [zoom] = useState(0.5)

  useEffect(() => {
    if (count === null) {
      return
    }
    setSelectedFloor(count)
    setFloor(null)
  }, [count, setFloor])

  if (isParkingPlacesLoading || isPantryPlacesLoading) {
    return (
      <Section id="parking-plan" className="flex flex-col justify-center items-center">
        <Loader color="#F9B004" />
      </Section>
    )
  }

  if (!parkingPlaces || isParkingPlacesError || !pantryPlaces || isPantryPlacesError) {
    return (
      <Section id="parking-plan" className="flex flex-col justify-center items-center">
        <h2 className="text-3xl mb-2">Похоже, что возникла какая-то ошибка</h2>
        <p className="text-xl mb-6">
          Пожалуйста, оставьте заявку с помощью формы, и мы свяжемся с вами позже
        </p>
        <Button className="py-[0.8rem] px-[1.75rem]">Оставить заявку</Button>
      </Section>
    )
  }

  const selectedFloorInfo = FloorRecord[selectedFloor]

  const parkingPlanImage = ParkingPlanImagesRecord[selectedFloor]

  const floorParkingPlaces = parkingPlaces.filter((place) => {
    return place.floor === selectedFloor
  })

  const floorPantryPlaces = pantryPlaces.filter((place) => {
    return place.floor === selectedFloor
  })

  const StatusMarkings =
    selectedFloor !== 3 && selectedFloor !== 4
      ? ParkingPlaceStatusMarkings
      : PantryPlaceStatusMarkings

  const selectedPlace: IParkingPlace | IPantryPlace | undefined =
    selectedPlaceInfo?.type === "parking"
      ? floorParkingPlaces.find((place) => place.id === selectedPlaceInfo.id)
      :  selectedPlaceInfo?.type === "pantry"
        ? floorPantryPlaces.find((place) => place.id === selectedPlaceInfo.id)
        : undefined

  const selectedPlaceType: string | undefined =
    selectedPlaceInfo?.type === 'parking' && selectedPlace && 'type' in selectedPlace
      ? ParkingPlaceTypesRecord[selectedPlace.type as keyof typeof ParkingPlaceTypesRecord]
      : undefined

  const handlePlaceSelect = (id: number, type: 'parking' | 'pantry') => {
    setSelectedPlaceInfo({ id, type })
    setOpenedModalType(type === 'parking' ? ModalTypes.ParkingForm : ModalTypes.PantryForm)
  }


  return (
    <>
      {isDesktop ? (
        <Section className="px-[8.05rem] flex justify-center items-center">
          <div className="flex justify-center items-end gap-x-[7.25rem]">
            {selectedFloor === 4 ? (
              <Image
                src="/images/plans/fourth-floor-plan-placeholder.jpg"
                alt=""
                className="w-[53.3rem]"
              />
            ) : (
              <div className="relative">
                <Image src={parkingPlanImage} alt="" className="w-[53.3rem]" />
                {selectedFloor !== 3 &&
                  selectedFloor !== 4 &&
                  floorParkingPlaces.map((parkingPlace) => (
                    <ParkingPlace
                      key={parkingPlace.id}
                      parkingPlace={parkingPlace}
                      className="absolute"
                      onSelect={() => handlePlaceSelect(parkingPlace.id, 'parking')}
                    />
                  ))}
                {floorPantryPlaces.map((pantryPlace) => (
                  <PantryPlace
                    key={pantryPlace.id}
                    pantryPlace={pantryPlace}
                    className="absolute"
                    onSelect={() => handlePlaceSelect(pantryPlace.id, 'pantry')}
                  />
                ))}
              </div>
            )}
            <div className="w-fit">
              <div className="mb-[1.05rem] flex gap-x-[1.4rem]">
                {FloorRecordEntries.map(([floor]) => (
                  <div key={floor} className="flex flex-col items-center gap-y-[0.7rem]">
                    <Button
                      className={clsx(
                        'h-[3.55rem] w-[3.55rem] rounded-full flex justify-center items-center text-[2rem]',
                        Number(floor) === selectedFloor &&
                        'bg-steel border-steel hover:text-steel hover:border-steel'
                      )}
                      onClick={() => handelHref(Number(floor))}
                    >
                      {Number(floor) + 1}
                    </Button>
                    <p className="uppercase">ЭТАЖ</p>
                  </div>
                ))}
              </div>
              <p className="text-3xl mb-6">{selectedFloorInfo.title}</p>
              <div className="h-[2px] my-5 bg-black" />
              <p className="mb-6 text-3xl">Условные обозначения</p>
              {StatusMarkings.map((placeStatusMarking) => (
                <div
                  key={placeStatusMarking.title}
                  className="mb-4 flex items-center gap-x-5"
                >
                  <div
                    className="h-[1.80rem] w-[1.80rem] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: placeStatusMarking.color }}
                  >
                    {placeStatusMarking.iconText ? (
                      <p className="text-xs text-white ">{placeStatusMarking.iconText}</p>
                    ) : (
                      <img
                        src={placeStatusMarking.icon}
                        alt={placeStatusMarking.title}
                        className="w-[1.075rem]"
                      />
                    )}
                  </div>
                  <p>{placeStatusMarking.title}</p>
                </div>
              ))}
              <div className="h-[2px] mt-10 mb-4 bg-black" />
              <div className="flex justify-between items-center gap-x-5">
                <Link
                  href="tel:+79117751111"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl"
                >
                  +7 (911) 775-11-11
                </Link>
                {/* <DownloadPdfButton /> */}
                <div className="flex gap-x-3">
                  <a
                    href="https://wa.me/79117751111"
                    target="_blank"
                    rel="noreferrer"
                    className="block cursor-pointer"
                  >
                    <img
                      src="/icons/whatsapp-colored-icon.svg"
                      alt="Whats App"
                      className="h-10 w-10"
                    />
                  </a>
                  <a
                    href="https://t.me/+79117751111"
                    target="_blank"
                    rel="noreferrer"
                    className="block cursor-pointer"
                  >
                    <img
                      src="/icons/telegram-colored-icon.svg"
                      alt="Whats App"
                      className="h-10 w-10"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Section>
      ) : null}

      {!isDesktop ? (
        <Section id="parking-plan" className="py-14 px-5">
          <div className="pt-5 px-5 bg-grey-1 rounded-3xl">
            <div className={clsx(openDropDown ? "bg-white border-b-none rounded-t-3xl p-[25px]" : "rounded-full",'relative flex flex-col border border-grey-2 py-2 w-full mb-[25px]')}>
              <div className={clsx(cx("select-value","items-center justify-center flex", openDropDown  && "pb-[8px] border-b-grey-3 border-b-[1px]" ))} onClick={() => setOpenDropDown(!openDropDown)}>Этаж {selectedFloor + 1} - {listFloor[Number(selectedFloor) - 1]}</div>
              <div className={clsx(openDropDown ? "border-t-0 rounded-b-3xl px-[25px] gap-[12px] z-10" : "px-2","py-2 absolute bg-white left-[-1px] border border-grey-2 w-[100.5%]  top-[100%] items-start justify-center flex-col", openDropDown ? "flex" : "hidden")}>
              {FloorRecordEntries.map(([floor]) => (
                    <div key={floor} onClick={() => {
                      handelHref(Number(floor))
                      setOpenDropDown(!openDropDown)
                    }} className={cx("select-value")}>
                      Этаж {Number(floor) + 1} - {listFloor[Number(floor) - 1]}
                  </div>
              ))}
            </div>
            </div>
            <div className={clsx(cx("record"))}>
              {StatusMarkings.map((placeStatusMarking) => (
                <div
                  key={placeStatusMarking.title}
                  className="mb-4 flex items-center gap-x-5"
                >
                  <div
                    className="h-[1.80rem] w-[1.80rem] flex-[1_0_auto] rounded-full flex items-center justify-center"
                    style={{ backgroundColor: placeStatusMarking.color }}
                  >
                    {placeStatusMarking.iconText ? (
                      <p className="text-xs text-white">{placeStatusMarking.iconText}</p>
                    ) : (
                      <img
                        src={placeStatusMarking.icon}
                        alt={placeStatusMarking.title}
                        className="w-[1.075rem]"
                      />
                    )}
                  </div>
                  <p className={clsx("text-[0.75rem] flex-[1_0_80%]")}>{placeStatusMarking.title}</p>
                </div>
              ))}
            </div>
            <TransformWrapper>
              {({ zoomIn, zoomOut }) => (

                <>
                  <TransformComponent wrapperStyle={{ width: '100%', height: '100%' }}>
                    {selectedFloor === 4 ? (
                      <img
                        src="/images/plans/fourth-floor-plan-placeholder.jpg"
                        alt=""
                      />
                    ) : (
                      <>
                        <img
                          src={parkingPlanImage}
                          alt=""
                        />
                        {selectedFloor !== 3 &&
                          selectedFloor !== 4 &&
                          floorParkingPlaces.map((parkingPlace) => (
                            <ParkingPlaceMobileComponents
                              key={parkingPlace.id}
                              parkingPlace={parkingPlace}
                              zoom={zoom}
                              className="absolute"
                              onSelect={() => handlePlaceSelect(parkingPlace.id, 'parking')}
                              isOpen={parkingPlaceId === parkingPlace.id && isOpenParking}
                              onOpen={handleParkingClick}
                              onClose={() => setIsOpenParking(false)}
                            />
                          ))}
                        {floorPantryPlaces.map((pantryPlace) => (
                          <PantryPlaceMobileComponent
                            key={pantryPlace.id}
                            pantryPlace={pantryPlace}
                            zoom={zoom}
                            className="absolute"
                            onSelect={() => handlePlaceSelect(pantryPlace.id, 'pantry')}
                            isOpen={pantryPlaceId === pantryPlace.id && isOpenPantry}
                            onOpen={handlePantryClick}
                            onClose={() => setIsisOpenPantry(false)}
                          />
                        ))}
                      </>
                    )}
                  </TransformComponent>
                  <div className={"flex justify-end w-full"}>
                    <div className="bg-grey-2 rounded-full my-6 flex justify-center items-center w-[115px] h-[49px]">
                      <div
                        className="border-r-[1px] border-white border-solid flex-auto text-white flex justify-center items-center bc-none w-8 text-xl px-[16px] py-[23px]"
                        onClick={() => zoomOut()}>
                        <svg width="15" height="3" viewBox="0 0 15 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 1.5H15" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                      <div
                        className="flex-auto text-white flex justify-center items-center bg-none w-8 text-xl px-[16px] py-[23px]"
                        onClick={() => zoomIn()}>
                        <svg width="15" height="16" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0 8.5H15" stroke="white" strokeWidth="2" />
                          <path d="M7.5 15.36L7.5 0.659986" stroke="white" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                  </div>

                </>
              )}
            </TransformWrapper>
          </div>

        </Section>
      ) : null}

      <Modal
        opened={openedModalType === ModalTypes.ParkingForm}
        title="Заявка на бронирование паркинга"
        centered
        zIndex={1000}
        size="xl"
        classNames={{
          content: 'rounded-[2rem]',
          header: 'lg:py-[2.05rem] lg:pl-[3.4rem] lg:pr-[2.9rem]',
          title: 'text-2xl lg:text-[2rem]',
          body: 'lg:pb-[2.75rem] lg:pl-[3.4rem] lg:pr-[4.1rem]'
        }}
        closeButtonProps={{ size: 'xl' }}
        onClose={() => setOpenedModalType(null)}
      >
        <h1 className="mb-5 text-xl lg:text-[2rem]">
          Место №{selectedPlace?.displayedNo}
        </h1>
        <div className="lg:flex gap-x-12">
          <div className="flex gap-x-4">
            <p>Площадь:</p>
            <p>{selectedPlace?.area} м2</p>
          </div>
          <div className="flex gap-x-4">
            <p>Тип места:</p>
            <p>{selectedPlaceType}</p>
          </div>
          <div className="h-16 flex gap-x-4">
            <p>Стоимость:</p>
            <div>
              {!!selectedPlace?.previousPrice && (
                <NumberFormatter
                  suffix="₽"
                  thousandSeparator=" "
                  value={selectedPlace.previousPrice}
                  className="block line-through"
                />
              )}
              <NumberFormatter
                suffix="₽"
                thousandSeparator=" "
                value={selectedPlace?.currentPrice}
              />
            </div>
          </div>
        </div>
        <PlaceBookingForm
          placeId={selectedPlaceInfo?.id || 0}
          placeType="parking"
          onSubmit={() => setOpenedModalType(ModalTypes.Success)}
          onError={() => setOpenedModalType(ModalTypes.Error)}
        />
      </Modal>

      <Modal
        opened={openedModalType === ModalTypes.PantryForm}
        title="Заявка на бронирование кладовой"
        centered
        zIndex={1000}
        size="xl"
        classNames={{
          content: 'rounded-[2rem]',
          header: 'lg:py-[2.05rem] lg:pl-[3.4rem] lg:pr-[2.9rem]',
          title: 'text-2xl lg:text-[2rem]',
          body: 'lg:pb-[2.75rem] lg:pl-[3.4rem] lg:pr-[4.1rem]'
        }}
        closeButtonProps={{ size: 'xl' }}
        onClose={() => setOpenedModalType(null)}
      >
        <h1 className="mb-5 text-xl lg:text-[2rem]">
          Кладовая №{selectedPlace?.displayedNo}
        </h1>
        <div className="lg:flex gap-x-12">
          <div className="flex gap-x-4">
            <p>Площадь:</p>
            <p>{selectedPlace?.area} м2</p>
          </div>
          <div className="h-16 flex gap-x-4">
            <p>Стоимость:</p>
            <div>
              {!!selectedPlace?.previousPrice && (
                <NumberFormatter
                  suffix="₽"
                  thousandSeparator=" "
                  value={selectedPlace.previousPrice}
                  className="block line-through"
                />
              )}
              <NumberFormatter
                suffix="₽"
                thousandSeparator=" "
                value={selectedPlace?.currentPrice}
              />
            </div>
          </div>
        </div>
        <PlaceBookingForm
          placeId={selectedPlaceInfo?.id || 0}
          placeType="pantry"
          onSubmit={() => setOpenedModalType(ModalTypes.Success)}
          onError={() => setOpenedModalType(ModalTypes.Error)}
        />
      </Modal>

      <Modal
        opened={openedModalType === ModalTypes.Success}
        withCloseButton={false}
        centered
        zIndex={1000}
        size="xl"
        classNames={{
          content: 'rounded-[2rem]',
          body: 'pt-[3.65rem] pb-[2.75rem] px-[3.1rem]'
        }}
        closeButtonProps={{ size: 'xl' }}
        onClose={() => setOpenedModalType(null)}
      >
        <img
          src="/icons/success.svg"
          alt=""
          className="mx-auto h-[5.35rem] w-[5.35rem] mb-10"
        />
        <h1 className="mb-10 text-xl lg:text-[2rem] text-center">
          Спасибо за обращение! В ближайшее время наш менеджер свяжется с Вами.
        </h1>
        <Button
          className="block mx-auto py-1 px-12"
          onClick={() => setOpenedModalType(null)}
        >
          Закрыть
        </Button>
      </Modal>

      <Modal
        opened={openedModalType === ModalTypes.Error}
        withCloseButton={false}
        centered
        zIndex={1000}
        size="xl"
        classNames={{
          content: 'rounded-[2rem]',
          body: 'pt-[3.65rem] pb-[2.75rem] px-[3.1rem]'
        }}
        closeButtonProps={{ size: 'xl' }}
        onClose={() => setOpenedModalType(null)}
      >
        <h1 className="mb-10 text-[2rem] text-center">
          Похоже, что возникла какая-то ошибка. Пожалуйста, оставьте заявку с помощью
          контактной формы.
        </h1>
        <Button
          className="block mx-auto py-1 px-12"
          onClick={() => setOpenedModalType(null)}
        >
          Закрыть
        </Button>
      </Modal>
    </>
  )
}