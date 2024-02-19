import { AddDevice, ConectedDevices, DeviceContainer, Devices, DevicesEmpty, DevicesHeader, NewDeviceContainer } from "./styles";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { nexus } from "../../configs/axios";
import { useQuery } from "react-query";
import { Fade } from "react-awesome-reveal";

export function NewDeviceContent() {
  const [devices, setDevices] = useState<{ id: string }[] | []>([])

  const { data, isSuccess, isRefetching, remove } = useQuery('tempDevices', getDevices, {
    refetchInterval: 3000
  })

  useEffect(() => {
    if (isSuccess) setDevices(data)
  }, [isSuccess, isRefetching])


  async function saveDevice(deviceId: string) {
    remove()
    if (devices) {
      const updatedDevices = devices.filter(dev => dev.id !== deviceId)
      setDevices(updatedDevices)
    }
    nexus.post(`/devices?key=mymoo&deviceId=${deviceId}`)
  }

  async function getDevices() {
    const res = await nexus.get('/temp-devices', {
      params: { key: 'mymoo' }
    })
    return res.data
  }

  function pluralCalc(length: number) {
    if (length === 0) {
      return ''
    } else if (length === 1) {
      return '1 dispositivo encontrado'
    } else {
      return `${length} dispositivos encontrados`
    }
  }

  return (
    <NewDeviceContainer>
      <DevicesHeader>
        <Link to={'/'}>Voltar</Link>
        <ConectedDevices>{pluralCalc(devices.length)}</ConectedDevices>
      </DevicesHeader>
      <Devices isEmpty={devices.length === 0}>
      <Fade direction="up" duration={300} cascade damping={0.1} style={{width: '100%'}}>
          { devices && devices.length > 0 ? devices.map(dev => {
            return (
              <DeviceContainer key={dev.id}>
                <h1>{dev.id}</h1>
                <AddDevice onClick={() => saveDevice(dev.id)}>Adicionar</AddDevice>
              </DeviceContainer>
            )
          }) : (
            <DevicesEmpty>
              Aguardando conexão...
            </DevicesEmpty>
          )}
        </Fade>
      </Devices>
    </NewDeviceContainer>
  )
}