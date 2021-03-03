import Page from "./Page"
import { css } from 'styled-components'
import image from './images/page6.png'

const stylesBlock = css`
  margin: auto;
  &  > * {
    display: inline-block;
    margin: auto 0;
  }
`

const stylesFlex = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const stylesGrid = css`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  &  > * {
    margin: auto 0;
  }
`

const Page6 = ({pageSelector}) => {
 return <Page pageSelector={pageSelector} stylesBlock={stylesBlock} stylesFlex={stylesFlex} stylesGrid={stylesGrid} image={image}>
        <div style={{backgroundColor: 'blue', width: '55px', height: '150px'}}></div>
        <div style={{backgroundColor: 'green', width: '50px', height: '100px'}}></div>
        <div style={{backgroundColor: 'salmon', width: '40px', height: '10px'}}></div>
        <div style={{backgroundColor: 'yellow', width: '150px', height: '43px'}}></div>
        <div style={{backgroundColor: 'cyan', width: '133px', height: '79px'}}></div>
 </Page>   
}

export default Page6