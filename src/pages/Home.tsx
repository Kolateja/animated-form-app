import React from 'react';
import WhyChooseUs from './WhyChooseUs';
import ClientQuote from './ClientQuote';
import Consultancy from './Consultanices';
const Home: React.FC = () => {
  return (
    <div>
      <Consultancy />
      <WhyChooseUs />
      <ClientQuote />
    </div>

  );
};

export default Home;
