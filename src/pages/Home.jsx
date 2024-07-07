import React from 'react'
import Header from '../components/Header'
import Main from '../components/Main'
import 'bootstrap/dist/css/bootstrap.css'
import MainProduct from '../components/MainProduct'

const Home = () => {
  return (
    <>
        <Header />
        <Main />
        <MainProduct/>
    </>
  )
}

export default Home