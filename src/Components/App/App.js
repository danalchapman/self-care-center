import React from 'react'
import { Header } from '../Header/Header'
import { Center } from '../Center/Center'
import { Footer } from '../Footer/Footer'
import './App.css'

export const App = () => {
  return (
    <main className='main-container'>
      <Header />
      <Center />
      <Footer />
    </main>
  );
}

