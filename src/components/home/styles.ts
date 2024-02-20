import { keyframes } from "@stitches/react"
import { styled } from "../../styles"

const blinks = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 },
});

export const HomeContainer = styled('div', {
  background: '$gray700',
  borderRadius: '0.6rem',
  padding: '1.2rem'
})

export const DevicesHeader = styled('div', {
  variants: {
    isNexus: {
      false: {
        'a': {
          display: 'none'
        }
      }
    }
  },

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

  variants: {
    isNexus: {
      false: {
        animation: `${blinks} 600ms ease-out alternate infinite`
      }
    }
  },

  cursor: 'default',
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
  color: '$white300',
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '$lg',
  borderRadius: '0.4rem',
  cursor: 'default',

  '&:hover': {
    '.remover': {
      opacity: 1
    }
  }
})

export const DeviceStatus = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'start'
})

export const Status = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  alignItems: 'end',
  fontSize: '1rem',

  '.remover': {
    fontSize: '0.8rem',
    color: '$primary',
    opacity: 0,
    transition: '200ms',

    '&:hover': {
      opacity: '0.6',
      cursor: 'pointer'
    }
  }
})

export const Led = styled('div', {

  variants: {
    isConected: {
      true: { background: '#49b86b' },
      false: {
        background: '$primary',
        animation: `${blinks} 400ms ease-out alternate infinite`
      }
    }
  },

  background: 'red',
  height: '16px',
  width: '16px',
  borderRadius: '1rem'
})

export const Time = styled('div', {
  fontSize: '0.8rem',
  color: '#616D70'
})

export const DevicesEmpty = styled('div', {
  textAlign: 'center',
  padding: '1.2rem',
  width: '100%',
  background: '$gray600',
  borderRadius: '0.6rem',
  color: '$white300',
  alignSelf: 'center',
  cursor: 'default'
})