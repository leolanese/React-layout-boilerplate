import React, { useState } from 'react';
import Layout from '../Components/Layout';
import './App.css';
import Header from '../Components/Header';
import Body from '../Components/Body';
import Footer from '../Components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from '../Components/Home';
import About from '../Components/About';
import Contact from '../Components/Contact';

const HeaderWithLayout = Layout(Header);
const BodyWithLayout = Layout(Body);
const FooterWithLayout = Layout(Footer);

function App() {
  const [title, setTitle] = useState('My Super Website boilerplate');
  const [subTitle, setSubTitle] = useState('A React-powered App');
  const [name, setName] = useState('Leo Lanese');
  const [profession, setProfession] = useState('Software Developer');
  const [location, setLocation] = useState('London, UK');
  const [email, setEmail] = useState('developer@leolanese.com');
  const [navigationLinks, setNavigationLinks] = useState([
    { text: 'Home', url: '/' },
    { text: 'About', url: '/about' },
    { text: 'Contact', url: '/contact' },
  ]);
  const [routes, setRoutes] = useState(
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
 
  return (
    <>
        <HeaderWithLayout title={title} 
                          subTitle={subTitle} />

        <BodyWithLayout name={name} 
                        profession={profession} 
                        location={location} 
                        navigationLinks={navigationLinks}
                        routes={routes} />
        <FooterWithLayout email={email} /> 
    </>
  );
}

export default App;
