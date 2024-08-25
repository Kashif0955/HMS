import React from 'react';
import Hero from '../components/Hero';
import Department from '../components/Department';
import Biography from '../components/Biography';
import MessageForm from '../components/MessageForm';

const Home = () => {
  return (
    <>
      <Hero title={"Welcome to the Kashif Care Medical Institute"} imageUrl={"/hero.png"} />
      <Biography imageUrl={"/about.png"} />
      <Department />
      <MessageForm />
    </>
  )
}

export default Home