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
    color: '$white300',
    opacity: 0.6,

    '&:hover': {
      opacity: 1
    }
  }
})

export const ConectedDevices = styled('div', {
  color: '$white300'
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
  color: '$white300',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$lg',
  borderRadius: '0.4rem',

  'h1': {
    fontSize: '1.4rem'
  }
})

export const AddDevice = styled('h2', {
  color: '$gray300',
  opacity: 0.6,
  fontSize: '1rem',
  alignSelf: 'end',


  '&:hover': {
    opacity: 1,
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