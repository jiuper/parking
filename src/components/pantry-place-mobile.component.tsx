import { ComponentPropsWithoutRef, useState } from 'react'
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

interface PantryPlaceMobileComponentProps extends Omit<ComponentPropsWithoutRef<'div'>, 'children' | 'onSelect'>  {
  pantryPlace: IPantryPlace
  zoom?: number
  onSelect: (pantryPlaceId: number) => void
}

export const PantryPlaceMobileComponent = ({pantryPlace, zoom = 1, onSelect, className, style, ...otherProps}: PantryPlaceMobileComponentProps) => {
  const [visible, setVisible] = useState(false);

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
        className={clsx(className)}
        style={{
          width: `${zoom * imageSize.width}rem`,
          top: `${zoom * position.top}rem`,
          left: `${zoom * position.left}rem`,
          ...style
        }}
        onClick={() => setVisible(true)}
        {...otherProps}
      >
        <Icon
          name={image}
          color={clsx(
            pantryPlace.status === PlaceStatusesEnum.Free && '#5ABA00',
            pantryPlace.status === PlaceStatusesEnum.Booked && '#F9B004',
            pantryPlace.status === PlaceStatusesEnum.Sold && '#D63810'
          )}
        />
      </div>
      <Dialog
        baseZIndex={9999}
        header={<h3 className="mb-2 text-xl">Кладовая №{pantryPlace.displayedNo}</h3>}
        visible={visible}
        position={'bottom'}
        draggable={false}
        style={{ maxWidth: '550px', width: '100vw' }}
        onHide={() => {
          if (!visible) return
          setVisible(false)
        }}>
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
          setVisible(false)
        }}>
          Забронировать
        </Button>
      </Dialog>
    </>
  )
}