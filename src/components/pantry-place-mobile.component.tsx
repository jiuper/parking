import { ComponentPropsWithoutRef, useRef } from 'react'
import clsx from 'clsx'
import { NumberFormatter } from '@mantine/core'
import { Dialog } from 'primereact/dialog'
import Button from '../shared-ui/button.component.tsx'
import { PantryPlacePositionsRecord } from '../constants/pantry-place-positions-record.ts'
import { PantryPlaceImagesRecord } from '../constants/pantry-place-images-record.constant.ts'
import { PantryPlaceImageSizeRecord } from '../constants/pantry-place-image-size-record.constant.ts'
import { IPantryPlace } from '../types/pantry-place.type.ts'
import { PlaceStatusesEnum } from '../enums/place-statuses.enum.ts'
import { Icon } from './icon/icon.component.tsx'
import { useClickOutside } from 'primereact/hooks'

interface PantryPlaceMobileComponentProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'onSelect'>  {
  pantryPlace: IPantryPlace
  zoom?: number
  onSelect: (pantryPlaceId: number) => void
  onClose: () => void
  onOpen: (id: number) => void
  isOpen: boolean
}

export const PantryPlaceMobileComponent = ({onOpen, onClose, isOpen, pantryPlace, zoom = 1, onSelect, className, style, ...otherProps}: PantryPlaceMobileComponentProps) => {
  const overlayRef = useRef(null);

  useClickOutside(overlayRef, () => onClose());
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (!(pantryPlace.displayedNo in PantryPlacePositionsRecord)) {
    return null
  }

  const position = PantryPlacePositionsRecord[pantryPlace.displayedNo]
  const image = PantryPlaceImagesRecord[position.imageType]
  const imageSize = PantryPlaceImageSizeRecord[position.imageType]


  return (
    <>
      <div
        ref={overlayRef}
        className={clsx(className)}
        style={{
          width: `${((zoom * imageSize.width) * 16) / 424 * 100}%`,
          top: `${((zoom * position.top) * 16) / 351.82 * 100}%` ,
          left: `${((zoom * position.left) * 16) / 424 * 100}%`,
          ...style
        }}
        {...otherProps}
      >
        <Icon
          name={image}
          color={clsx(
            pantryPlace.status === PlaceStatusesEnum.Free && '#5ABA00',
            pantryPlace.status === PlaceStatusesEnum.Booked && '#F9B004',
            pantryPlace.status === PlaceStatusesEnum.Sold && '#D63810'
          )}
          onClick={pantryPlace.status === PlaceStatusesEnum.Free ? () =>  onOpen(pantryPlace.id) : () => {}}
        />
      </div>
      <Dialog
        baseZIndex={9999}
        header={<h3 className="mb-2 text-xl">Кладовая №{pantryPlace.displayedNo}</h3>}
        visible={isOpen}
        position={'bottom'}
        modal={false}
        draggable={false}
        style={{ maxWidth: '550px', width: '100vw' }}
        onHide={onClose}>
        <div className="mb-1 flex justify-between text-xs">
          <p>ПЛОЩАДЬ:</p>
          <p className="uppercase">{pantryPlace.area} м2</p>
        </div>
        <div className="h-10 flex justify-between text-xs">
          <p>СТОИМОСТЬ:</p>
          <div>
            {pantryPlace.previousPrice > 0 && (
              <NumberFormatter
                suffix="₽"
                thousandSeparator=" "
                value={pantryPlace.previousPrice}
                className="block line-through"
              />
            )}
            <NumberFormatter
              suffix="₽"
              thousandSeparator=" "
              value={pantryPlace.currentPrice}
            />
          </div>
        </div>
        <Button className="w-full py-2 text-xs" onClick={() => {
          onSelect(pantryPlace.id)
          onClose()
        }}>
          Забронировать
        </Button>
      </Dialog>
    </>
  )
}