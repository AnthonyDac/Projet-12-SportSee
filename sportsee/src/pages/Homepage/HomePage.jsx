import React from 'react';
import './HomePage.css';
import NavbarComponent from '../../components/NavbarTop/NavbarComponent';
import NavbarleftComponent from '../../components/NavbarLeft/NavbarleftComponent';
import DashboardComponent from '../../components/Dashboard/DashboardComponent';

function HomePage() {
  return (
    <>
      <NavbarComponent />
      <section className="homepage">
        <div className="left-navigation">
          <NavbarleftComponent />
        </div>
        <div className="dashboard">
          <DashboardComponent />
        </div>
      </section>
    </>
  );
}

export default HomePage;
