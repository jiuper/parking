import { PlaceStatusesEnum } from '../enums/place-statuses.enum'

export const ParkingPlaceImagesRecord: Record<PlaceStatusesEnum, string> = {
  [PlaceStatusesEnum.Free]: '',
  [PlaceStatusesEnum.Booked]: '/images/cars/booked-car.webp',
  [PlaceStatusesEnum.Sold]: '/images/cars/sold-car.webp',
}
