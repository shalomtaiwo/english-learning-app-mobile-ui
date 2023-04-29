import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import MobileApp from './Components/Container/MobileApp'
import { Route, Routes } from 'react-router-dom'
import PageOne from './Pages/PageOne'
import { PageActivity } from './Pages/PageActivity'


const App = () => {
  return (
    <ChakraProvider>
      <Routes>
        <Route path='/' element={<MobileApp />}>
          <Route path='/' element={<PageOne />} />
          <Route path='/activity' element={<PageActivity />} />
        </Route>
      </Routes>
    </ChakraProvider>
  )
}

export default App