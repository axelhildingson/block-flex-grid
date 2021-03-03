import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page7.png'

const stylesBlock = css`
  text-align: start;
  margin: auto;
  &  > * {
    display: block;
  }
  div:nth-child(1) {
    height: 33% !important;
    width: 33% !important;
  }
  div:nth-child(2) {
    height: 33% !important;
    width: 33% !important;
    float: right
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  div:nth-child(1) {
    height: 33% !important;
    width: 33% !important;
  }
  div:nth-child(2) {
    height: 33% !important;
    width: 33% !important;
    align-self: flex-end;
  }
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  div:nth-child(1) {
    grid-column-start: 1;
  }
  div:nth-child(2) {
    grid-row-start: 3;
    grid-column-start: 3;
  }

`

const Page6 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'blue', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'green', width: '100%', height: '100%'}}></div>
 </Page>   
}

export default Page6