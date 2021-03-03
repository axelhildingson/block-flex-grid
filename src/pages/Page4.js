
import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page4.png'

const stylesBlock = css`
  text-align: start;
  &  > * {
    display: inline-block;
    width: 25% !important;
    height: 50% !important;
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  &  > * {
    width: 25% !important;
    height: 50% !important;
  }
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`

const Page4 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'lightblue', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'lightgreen', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'lightsalmon', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'lightyellow', width: '100%', height: '100%'}}></div>
        <div style={{backgroundColor: 'lightcyan', width: '100%', height: '100%'}}></div>
 </Page>   
}

export default Page4