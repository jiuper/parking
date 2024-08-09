import clsx from 'clsx'
import { IParkingPlace } from '../types/parking-place.type.ts'
import { ParkingPlaceImagesRecord } from '../constants/parking-place-images-record.component.ts'
import { ParkingPlaceTypesRecord } from '../constants/parking-place-types-record.constant.ts'
import { ParkingPlacePositionsRecord } from '../constants/parking-place-positions-record.ts'
import { ComponentPropsWithoutRef, useEffect } from 'react'
import { Dialog } from 'primereact/dialog'
import { Image, NumberFormatter } from '@mantine/core'
import Button from '../shared-ui/button.component.tsx'


interface ParkingPlaceMobileComponentsProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'onSelect'>  {
  parkingPlace: IParkingPlace
  zoom?: number
  onSelect: (parkingPlaceId: number) => void
  onClose: () => void
  onOpen: (id: number) => void
  isOpen: boolean
}

export const ParkingPlaceMobileComponents = ({onOpen, onClose, isOpen, parkingPlace, zoom = 1, onSelect, className, style, ...otherProps}: ParkingPlaceMobileComponentsProps) => {
  const image = ParkingPlaceImagesRecord[parkingPlace.status]
  const type = ParkingPlaceTypesRecord[parkingPlace.type]
  const position = ParkingPlacePositionsRecord[parkingPlace.displayedNo]

  useEffect(() => {
    window.addEventListener('scroll', () => {
      // eslint-disable-next-line no-unused-expressions
      if(window.scrollY){
        onClose()
      }
    });
  }, [onClose]);

  return (
      <>
        <div
          className={clsx(className)}
          style={{
            width: `${((zoom * 1.75) * 16) / 424 * 100}%`,
            top: `${((zoom * position.top) * 16) / 351.82 * 100}%` ,
            left: `${((zoom * position.left) * 16) / 424 * 100}%`,
            height:  `${((zoom * 6.35) * 16) / 424 * 100}%`,
            rotate: `${position.rotationDegree}deg`,
            ...style,
          }}
          {...otherProps}
        >
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <div
              className="flex justify-center items-center bg-gray-200"
              style={{ height: `100%`, width: `100%` }}
              onClick={() => onOpen(parkingPlace.id)}
            >
              {parkingPlace.previousPrice > 0 && (
                <Image
                  src="/icons/discount-icon.svg"
                  style={{
                    height: `${zoom * 1}rem`,
                    width: `${zoom * 1}rem`,
                    marginBottom: '100%',
                  }}
                />
              )}
            </div>
          )}
        </div>
          <Dialog
            baseZIndex={9999}
            header={<h3 className="mb-2 text-xl">Место №{parkingPlace.displayedNo}</h3>}
            visible={isOpen}
            position={'bottom'}
            draggable={false}
            modal={false}
            style={{ maxWidth:"550px", width: '100vw' }}
            onHide={onClose}>
            <div className="mb-1 flex justify-between text-xs">
              <p>ТИП МЕСТА:</p>
              <p className="uppercase">{type}</p>
            </div>
            <div className="mb-1 flex justify-between text-xs">
              <p>ПЛОЩАДЬ:</p>
              <p className="uppercase">{parkingPlace.area} м2</p>
            </div>
            <div className="h-10 flex justify-between text-xs">
              <p>СТОИМОСТЬ:</p>
              <div>
                {parkingPlace.previousPrice > 0 && (
                  <NumberFormatter
                    suffix="₽"
                    thousandSeparator=" "
                    value={parkingPlace.previousPrice}
                    className="block line-through"
                  />
                )}
                <NumberFormatter
                  suffix="₽"
                  thousandSeparator=" "
                  value={parkingPlace.currentPrice}
                />
              </div>
            </div>
            <Button className="w-full py-2 text-xs" onClick={() => {
              onSelect(parkingPlace.id)
              onClose()
            }}>
              Забронировать
            </Button>
          </Dialog>
      </>
  )
}