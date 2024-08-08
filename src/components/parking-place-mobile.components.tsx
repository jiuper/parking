import clsx from 'clsx'
import { IParkingPlace } from '../types/parking-place.type.ts'
import { ParkingPlaceImagesRecord } from '../constants/parking-place-images-record.component.ts'
import { ParkingPlaceTypesRecord } from '../constants/parking-place-types-record.constant.ts'
import { ParkingPlacePositionsRecord } from '../constants/parking-place-positions-record.ts'
import { ComponentPropsWithoutRef, useRef, useState } from 'react'
import { Dialog } from 'primereact/dialog'
import { Image, NumberFormatter } from '@mantine/core'
import Button from '../shared-ui/button.component.tsx'
import { useClickOutside } from 'primereact/hooks'



interface ParkingPlaceMobileComponentsProps
  extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'onSelect'>  {
  parkingPlace: IParkingPlace
  zoom?: number
  onSelect: (parkingPlaceId: number) => void
}

export const ParkingPlaceMobileComponents = ({parkingPlace, zoom = 1, onSelect, className, style, ...otherProps}: ParkingPlaceMobileComponentsProps) => {
  const image = ParkingPlaceImagesRecord[parkingPlace.status]
  const type = ParkingPlaceTypesRecord[parkingPlace.type]
  const position = ParkingPlacePositionsRecord[parkingPlace.displayedNo]
  const [visible, setVisible] = useState(false);
  const overlayRef = useRef(null);

  useClickOutside(overlayRef, () => {
     setVisible(false);
  });
  return (
      <>
        <div
          className={clsx(className)}
          style={{
            width: `${zoom * 1.75}rem`,
            top: `${zoom * position.top}rem`,
            left: `${zoom * position.left}rem`,
            rotate: `${position.rotationDegree}deg`,
            ...style,
          }}
          onClick={() => setVisible(true)}
          {...otherProps}
        >
          {image ? (
            <Image src={image} alt="" />
          ) : (
            <div
              className="flex justify-center items-center"
              style={{ height: `${zoom * 5.35}rem`, width: `${zoom * 1.75}rem` }}
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
        <div           ref={overlayRef}>


          <Dialog

            baseZIndex={9999}
            header={<h3 className="mb-2 text-xl">Место №{parkingPlace.displayedNo}</h3>}
            visible={visible}
            position={'bottom'}
            draggable={false}
            style={{ maxWidth:"550px", width: '100vw' }}
            onHide={() => {
              if (!visible) return;
              setVisible(false);
            }}>
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
              setVisible(false)
            }}>
              Забронировать
            </Button>
          </Dialog>
        </div>
      </>
  )
}