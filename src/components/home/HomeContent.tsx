import { ConectedDevices, DeviceContainer, DeviceStatus, Devices, DevicesEmpty, DevicesHeader, HomeContainer, Led, Status, Time } from "./styles";
import { useEffect, useState } from "react";
import { formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { Device } from "../../device/Device";
import { Link } from "react-router-dom";
import { nexus } from "../../configs/axios";
import { useQuery } from "react-query";
import { Fade } from "react-awesome-reveal";

export function HomeContent() {
  const [devices, setDevices] = useState<Device[]>([])

  const { data, isSuccess, isRefetching, remove } = useQuery('devices', getDevices, {
    refetchInterval: 1000,
  })

  useEffect(() => {
    console.log(isSuccess);
    

    if (isSuccess) setDevices(data)
  }, [isSuccess, isRefetching])

  async function getDevices() {
    const res = await nexus.get('/devices', {
      params: { key: 'mymoo' }
    })
    const updatedDevices = res.data.map((dev: any) => new Device(dev.id, dev['updated_at']))
    return updatedDevices
  }

  async function removeDevice(deviceId: string) {
    await nexus.delete('/devices', {
      params: { key: 'mymoo', deviceId }
    })

    remove()
    if (devices) {
      const updatedDevices = devices.filter(dev => dev.id !== deviceId)
      setDevices(updatedDevices)
    }
  }

  function pluralCalc(length: number) {
    if (length === 0) {
      return 'Nenhum dispositivo conectado'
    } else if (length === 1) {
      return '1 dispositivo conectado'
    } else {
      return `${length} dispositivos conectados`
    }
  }

  function isNexusConnected() {
    if (!isSuccess) return 'Tentando conectar ao Nexus...'
    return pluralCalc(devices.length)
  }

  return (
    <HomeContainer>
      <DevicesHeader isNexus={isSuccess}>
        <ConectedDevices isNexus={isSuccess}>{isNexusConnected()}</ConectedDevices>
        <Link to={'/add'}>Adicionar dispositivos</Link>
      </DevicesHeader>

      <Devices isEmpty={devices.length === 0} >
      <Fade direction="up" duration={300} cascade damping={0.1} style={{width: '100%'}}>
        {devices.length > 0 ? devices.map(dev => {
          const isConnected = dev.isConnected()

          // @ts-ignore
          const lastUpdate = formatDistanceToNow(dev.updatedAt, { locale: ptBR, addSuffix: true })
          return (
            
              <DeviceContainer key={dev.id}>
                <DeviceStatus>
                  <Time>{lastUpdate}</Time>
                  {dev.id}
                </DeviceStatus>
                <Status>
                  <Led isConected={isConnected} />
                  <p className="remover" onClick={() => removeDevice(dev.id)}>remover</p>
                </Status>
              </DeviceContainer>
            
          )
        }) : (
          <DevicesEmpty>
            Adicione um novo dispositivo
          </DevicesEmpty>
        )}
        </Fade>
      </Devices>

    </HomeContainer>
  )
}