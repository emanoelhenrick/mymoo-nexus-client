import { formatDistanceToNowStrict } from "date-fns"

export class Device {
  id: string
  updatedAt: Date

  constructor(deviceId: string, updatedAt: Date) {
    this.id = deviceId
    this.updatedAt = updatedAt
  }

  public isConnected() {
    const distance = formatDistanceToNowStrict(this.updatedAt, {
      addSuffix: false,
      unit: 'second'
    })
    const numsStr = parseInt(distance.replace(/[^0-9]/g,''))
    return numsStr < 10
  }
}