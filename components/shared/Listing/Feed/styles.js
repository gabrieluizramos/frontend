import styled from 'styled-components'
import theme from 'config/theme'
import {breakpoint} from '@emcasa/ui/lib/styles'
import {listingDetailsMaxWidth} from 'constants/dimensions'
import Text from '@emcasa/ui-dom/components/Text'

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${listingDetailsMaxWidth}px;
  margin: auto;
  padding: 0 ${theme.space[4]}px;
  box-sizing: border-box;
`

export const ListingsContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  overflow-x: scroll;
`

export const SubTitle = Text.withComponent('h3')

export const Gradient = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  right: ${theme.space[4]}px;
  width: 60px;
  height: 100%;
  background-image: linear-gradient(to right, transparent, white);

  @media ${breakpoint.down('tablet')} {
    right: ${theme.space[4]}px;
  }
`
