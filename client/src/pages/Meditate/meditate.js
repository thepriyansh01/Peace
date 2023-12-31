import React, { useEffect, useState } from 'react'
import './meditate.css'
import '../Home/home.css'
import Sidebar from '../../components/SideBar/sidebar';
import { baseURL } from '../../baseURL/baseURL';
import useFetch from '../../hooks/useFetch';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/HomePageCard/card';
import Navbar from '../../components/Navbar/navbar';
import ReelCard from '../../components/ReelCard/reelCard';

const Meditate = () => {

  return (
    <div className='home'>
      <Sidebar Page={"Meditate"} />
      <div className='home-page'>

        <Navbar mainHeading={"Meditate"} searchBar={true} />

        <div className='option-row'>
          <div className='option-row-item' style={{ background: "#FFFFFF73" }}>All</div>
          <div className='option-row-item'>Sleep</div>
          <div className='option-row-item'>Anxiety</div>
          <div className='option-row-item'>Inner Peace</div>
          <div className='option-row-item'>Stress</div>
          <div className='option-row-item'>Work</div>
          <div className='option-row-item'>Self Care</div>
        </div>
        <div className='home-page-heading'>Featured</div>

        <div className='home-page-cards'>
          <Card
            image={"https://res.cloudinary.com/simplotel/image/upload/w_3333,h_5000/x_0,y_1811,w_3333,h_1877,r_0,c_crop,q_80,fl_progressive/w_550,f_auto,c_fit/niraamaya-wellness-retreats/pexels-elly-fairytale-3822621_tsenv2"}
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/01/sugar-coat.mp3',
              'https://www.chosic.com/wp-content/uploads/2021/07/Embrace.mp3',
              'https://www.chosic.com/wp-content/uploads/2021/08/scott-buckley-jul.mp3'
            ]}
            CardHeading={"Daily  Move"}
            CardSubHeading1={"Movement "}
            CardSubHeading2={"Mia Meh "}
            CardSubHeading4={"Daily Practice "} />
          <Card
            image={"https://renascent.ca/wp-content/uploads/2016/11/step-11-prayer-and-meditation.jpg"}
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/03/Ghostrifter-Official-Devyzed-Downtown-Glow.mp3',
              'https://www.chosic.com/wp-content/uploads/2021/02/Warm-Memories-Emotional-Inspiring-Piano.mp3',
              'https://www.chosic.com/wp-content/uploads/2022/02/a-promise.mp3'
            ]}
          />
        </div>

        <div className='home-page-heading'>Quick & Easy</div>

        <div className='quick-n-easy-cards'>
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/01/journey-end.mp3'
            ]}
            image={"https://images.pexels.com/photos/17295626/pexels-photo-17295626/free-photo-of-light-summer-texture-winter.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2020/07/Art-Of-Silence_V2.mp3',
            ]}
            image={"https://c.stocksy.com/a/4it800/z9/2120776.jpg"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/01/silent-wood.mp3',
            ]}
            image={"https://www.swisseduc.ch/glaciers/earth_icy_planet/icons-10/01-torres-del-paine.jpg"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2021/08/scott-buckley-jul.mp3'
            ]}
            image={"https://images.pexels.com/photos/11247194/pexels-photo-11247194.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/01/sugar-coat.mp3',
            ]}
            image={"https://wallpaperaccess.com/full/3854971.jpg"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2021/07/Embrace.mp3',
            ]}
            image={"https://e0.pxfuel.com/wallpapers/795/513/desktop-wallpaper-beautiful-for-river-background-thumbnail.jpg"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2022/01/silent-wood.mp3',
            ]}
            image={"https://i.pinimg.com/736x/e2/8c/37/e28c371f59e5d2e667c9ae2a44a8e172--wallpapers-vintage-wallpapers-ipad.jpg"}
          />
          <ReelCard
            songs={[
              'https://www.chosic.com/wp-content/uploads/2020/07/Art-Of-Silence_V2.mp3',
            ]}
            image={"https://pbs.twimg.com/media/Fx_OuqFaEAA51Qi?format=jpg&name=large"}
          />
        </div>
      </div>
    </div>
  )
}

export default Meditate