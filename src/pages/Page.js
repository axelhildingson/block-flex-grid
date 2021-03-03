import { useState } from 'react'
import styled from 'styled-components'
import CssBlock from './CssBlock.jsx'

const Wrapper = styled.div`
  grid-column: span 2;
  ${({activeStyle, stylesGrid, stylesFlex, stylesBlock}) => activeStyle === 'grid' ? stylesGrid : activeStyle === 'flex' ?  stylesFlex : stylesBlock }
`

const PageWrapper = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-gap: 2rem;
padding: 2rem;
`

const ActiveWrapper = styled.div`
background-color: #f8f8f8;
padding: 12px 24px;
`

const ButtonWrapper = styled.div`
  display: flex;
  grid-column: span 3;
  background-color: #f8f8f8;
  justify-content: space-between;
  padding: 12px;
`

const Page = ({pageSelector ,stylesBlock, stylesFlex, stylesGrid, children, image}) => {
  const [activeStyle, setActiveStyle] = useState('block')
    return <PageWrapper>
      <Wrapper
        stylesBlock={stylesBlock}
        stylesFlex={stylesFlex}
        stylesGrid={stylesGrid}
        activeStyle={activeStyle} 
        style={{width: '100%', height: '300px', border: 'solid 1px lightgrey' }}
      >
        {children}
      </Wrapper>
      <ActiveWrapper><h2 style={{fontWeight: '200'}}>{`Active style: ${activeStyle.toUpperCase()}`}</h2><p>Expected result</p><img style={{width: '100%'}} src={image} alt=''/></ActiveWrapper>
      <CssBlock cssText={stylesBlock.toString()} label={'block'} active={activeStyle} onClick={() => setActiveStyle('block')}/>
      <CssBlock cssText={stylesFlex.toString()} label={'flex'} active={activeStyle} onClick={() => setActiveStyle('flex')}/>
      <CssBlock cssText={stylesGrid.toString()} label={'grid'} active={activeStyle} onClick={() => setActiveStyle('grid')}/>
      <ButtonWrapper>
        {pageSelector}
      </ButtonWrapper>
    </PageWrapper>
  }

export default Page