import { React, useState } from 'react'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './style.css';
import './cricket.css';
import './responsive.css'

const Dashboard = () => {
  return (
    <>
        <Helmet>
           <title>Cricfeel | Tennis</title>
        </Helmet>
      <Header />
    </>
  )
}

export default Dashboard