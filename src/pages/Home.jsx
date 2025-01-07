import React from 'react';
import Banner from '../components/Banner';
import PersonSection from '../components/PersonSection';
import CharacterDetail from '../components/CharacterDetail';
import GameFeature from '../components/GameFeature';
import MediaGallery from '../components/MediaGallery';
import StatsSection from '../components/StatsSection';
import PictureLibrary from '../components/PictureLibrary';
import '../assets/style/Home.css';

const Home = () => {
  
  return(
    <div className="home">
     <Banner />
     <PersonSection />
     <CharacterDetail />
     <GameFeature />
     <StatsSection />
     <MediaGallery />
    </div>
    )
}

export default Home;