import { styled } from "../../styles"

export const NewDeviceContainer = styled('div', {
  background: '$gray700',
  borderRadius: '0.6rem',
  padding: '1.2rem'
})

export const DevicesHeader = styled('div', {
  paddingBottom: '1.2rem',
  display: ' flex',
  justifyContent: 'space-between',
  

  'a': {
    textDecoration: 'none',
    color: '#616D70',
    transition: '200ms',

    '&:hover': {
      opacity: 1,
      color: '$primary'
    }
  }
})

export const ConectedDevices = styled('div', {
  color: '$primary'
})

export const Devices = styled('div', {
  variants: {
    isEmpty: {
      true: {
        display: 'flex',
        width: '100%'
      },
      false: { display: 'grid' }
    }
  },

  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  gap: '1rem'
})

export const DeviceContainer = styled('div', {
  padding: '1.2rem',
  height: '6rem',
  background: '$gray600',
  color: '$primary',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$lg',
  borderRadius: '0.4rem',

  'h1': {
    fontSize: '1.4rem'
  }
})

export const AddDevice = styled('h2', {
  color: '#616D70',
  fontSize: '1rem',
  alignSelf: 'end',
  transition: '200ms',

  '&:hover': {
    opacity: 1,
    color: '$white300',
    cursor: 'pointer'
  }
})

export const DevicesEmpty = styled('div', {
  textAlign: 'center',
  padding: '1.2rem',
  width: '100%',
  background: '$gray600',
  borderRadius: '0.6rem',
  color: '$white300'
})