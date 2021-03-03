import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page3.png'

const stylesBlock = css`
  text-align: start;
  &  > * {
    display: inline-block;
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
`

const Page3 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'lightblue', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'lightgreen', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'lightsalmon', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'lightyellow', width: '100px', height: '100px'}}></div>
        <div style={{backgroundColor: 'lightcyan', width: '100px', height: '100px'}}></div>
 </Page>   
}

export default Page3