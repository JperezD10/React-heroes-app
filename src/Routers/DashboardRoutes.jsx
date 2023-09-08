import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/ui/Navbar'
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { DCScreen } from '../components/DC/DCScreen';
import { SerachScreen } from '../components/search/SerachScreen';
import { HeroScreen } from '../components/hero/HeroScreen';


export const DashboardRoutes = () => {
  return (
    <div>
        <Navbar/>
        <div className="container">
          <Routes>
              <Route path="marvel" element={<MarvelScreen/>} />
              <Route path="dc" element={<DCScreen/>} />
              <Route path="search" element={<SerachScreen/>} />
              
              <Route path="hero/:heroId" element={<HeroScreen/>} />
          
              <Route path="/" element={<MarvelScreen/>} />
          </Routes>
        </div>
    </div>
  )
}
