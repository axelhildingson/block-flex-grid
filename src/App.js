import logo from './logo1.svg';
import './App.css';
import styled from 'styled-components';
import { useState } from 'react'
import { Page1, Page2, Page3, Page4, Page5, Page6, Page7, Page8} from './pages'

const Headline = styled.h1`
  font-size: 36px;
  font-weight: 300;
  text-transform: upperCase;
`

const PageSelector = ({pageNumber, setPageNumber}) => {
  const pageSelector = [0, 1, 2 ,3, 4, 5, 6, 7, 8 ].map((page) => <button onClick={() => setPageNumber(page)}> Go to page {page} </button>)
  switch (pageNumber) {
    case 1 : 
      return <Page1 pageSelector={pageSelector}/> 
    case 2 : 
      return <Page2 pageSelector={pageSelector}/>
    case 3 : 
      return <Page3 pageSelector={pageSelector}/> 
    case 4 : 
      return <Page4 pageSelector={pageSelector}/> 
    case 5 : 
      return <Page5 pageSelector={pageSelector}/> 
    case 6 : 
      return <Page6 pageSelector={pageSelector}/> 
    case 7 : 
      return <Page7 pageSelector={pageSelector}/> 
    case 8 : 
      return <Page8 pageSelector={pageSelector}/> 
    default: 
      return pageSelector
  }
}

function App() {
  console.log(window.location.search)
  const [pageNumber, setPageNumber] = useState(0)
  console.log({pageNumber})
  return (
    <div className="App" style={{maxWidth: '1200px', margin: 'auto'}}>
      <header className="Block Vs Flex Vs Grid">
        {pageNumber === 0 && <><img src={logo} className="App-logo" alt="logo" />
        <p>
          A simple intro and discussion regarding styleing with
        </p>
        </>}
        <Headline>
          Block Flex Grid {pageNumber}
        </Headline>
        <PageSelector pageNumber={pageNumber} setPageNumber={setPageNumber}/>
      </header>
    </div>
  );
}

export default App;
