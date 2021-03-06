import styled from 'styled-components'
import {breakpoint} from '@emcasa/ui/lib/styles'
import View from '@emcasa/ui-dom/components/View'
import Row from '@emcasa/ui-dom/components/Row'

export const Space = styled(View)`
  display: block;
  height: 15vh;
  width: 1px;

  @media ${breakpoint.down('tablet')} {
    height: 5vh;
  }
`

export const Background = styled(Row)`
  display: flex;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  justify-content: center;
  background-image: url(https://res.cloudinary.com/emcasa/image/upload/fl_any_format/v1542831121/background/wall-small);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: bottom;
`
