/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

 import * as React from "react"
 import PropTypes from "prop-types"
 
 import Header from "./Header/Header.js"
 import Navbar from "./Navbar/Navbar.js"
 import * as styles from "./Layout.module.scss"
 import Footer from "./Footer/Footer.js"
 import { Container } from 'react-bootstrap'
 import { motion } from "framer-motion"
 
 
 const Layout = ({ children }) => {
 
   return (
     <>
     <Container className={styles.layout}>
     <Header />
     <Navbar />
       
     <motion.main className={styles.contentContainer}
         initial={{ opacity: 0, x: -200 }}
         animate={{ opacity: 1, x: 0 }}
         exit={{ opacity: 0, x: 200 }}
         transition={{
           type: "spring",
           mass: 0.35,
           stiffness: 75,
           duration: 1.0
           }}>
           <main>{children}</main>
       </motion.main>
 
 
       <Footer />
     </Container>
     </>
   )
 }
 
 Layout.propTypes = {
   children: PropTypes.node.isRequired,
 }
 
 export default Layout
 
