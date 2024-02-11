import React from 'react'
import Layout from '../Components/Layouts/Layout'
import { Box, Typography } from '@mui/material'
import '../../src/Styles/AboutStyle.css'
import '../../src/Images/about-us.webp'


const About = () => {
  return (
    <Layout>
    <Box sx={{
      my:35,
      textAlign: 'center',
    }}>
    <div className='pic'>

    </div>
    <Typography>
    <span>why you </span>
    </Typography>
    Chartered Accountants
    <p><strong>Chartered Accountants</strong> - Established in 1992, with over three decades of providing world class services to our clients with utmost dedication and striving for excellence.

    We provide multidisciplinary expert services to meet all the requirements of our clients, with a focus on creating long term partnerships, meeting their immediate as well as long term business needs. We are empowered by a team of professionals who are technically competent, well trained, strongly motivated and committed to bringing more value to enhance our client experience, ensuring highest level of client satisfaction.</p>
    </Box>
    </Layout>
  )
}

export default About
