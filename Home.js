import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Link } from 'react-router-dom';
import '../Styles/HomeStyle.css';

const Home = () => {
  return (
    <Layout>
    <div className="home" style={{backgroundImage:'url(${banner})'}}>
    <div className="headerContainer">

    <h1>Chartered Accountants</h1>

    </div>
    </div>
    </Layout>
  )
}

export default Home
