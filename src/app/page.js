// pages/blank.js
"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './styles.module.css';
import otherStyles from './otherStyles.module.css';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import './text.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './slide.css';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const images = ["/home_cover_2.jpg", "/home_cover.jpg"];

const BlankPage = () => {
  const [keyword, setKeyword] = useState('');
  const [location, setLocation] = useState('');

  const handleKeywordChange = (event) => {
      setKeyword(event.target.value);
  };

  const handleLocationChange = (event) => {
      setLocation(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      // ทำสิ่งที่คุณต้องการเมื่อผู้ใช้กดปุ่มค้นหา
      // เช่น ส่งค่า keyword และ location ไปยัง API เพื่อดึงข้อมูล
  };
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // เปลี่ยนภาพทุก 3 วินาที

    return () => clearInterval(interval);
  }, []);

  return (


    <div style={{ background: 'white', minHeight: '100vh' }} className={styles.container}>
      <div style={{ background: 'white', minHeight: '100vh' }}>
        {/* ตัวอย่างเนื้อหาในหน้าเว็บ */}
        <header className='header'></header>
        <div className="header_container" ></div>
        <div className="row pb-2"></div>

        <div className="header"></div>

        <div style={{ display: 'flex', justifyContent: 'center' }}>

          <Image
            src="/img-fluid.png"
            alt=""
            width={255}
            height={66.3}
          />
          <div style={{ margin: '0 20px' }}></div>
          <Image
            src="/logo-test1.jpg"
            alt=""
            width={825}
            height={99}
            style={{ order: 2 }}
          />

          {/* <Image
            src="/logo-test2.jpg"
            alt=""
            width={825}
            height={99}
            style={{order: 1}}
          /> */}

        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul className={otherStyles.navbar}>
            <li><a className={styles.active} href="#home">หาที่ฝึกงาน</a></li>
            <li><a href="#news">หางานประจำ/พาร์ทไทม์</a></li>
            <li><a href="#contact">วาไรตี้</a></li>
            <li><a href="#about">ทักษะอาชีพ</a></li>
            <li><a href="#about"> มหาวิทยาลัย</a></li>
            <li><a href="#about">สำหรับบริษัท</a></li>
            <li><a href="#about">สำหรับผู้สมัครงาน</a></li>
          </ul>
          </div>
          
  
  <div className='slideshow'>
      <img src={images[index]} alt="" width={1980} height={100} />
      <style jsx>{`
        .slideshow {
          position: relative;
          max-width: 100%;
          overflow: hidden;
        }

        .slideshow img {
          display: block;
          width: 100%;
          height: auto;
          object-fit: cover;
          transition: opacity 60s ease-in-out;
        }
      `}</style>
    </div>

        
          
            
            <div className="home-form-search__wrapper container">
            <div className="home-form-search__container">
                <form className="home-form-search row" onSubmit={handleSubmit}>
                    <div className="col-12 col-md-5">
                        <div className="input-group mb-2 mr-md-2">
                            <input
                                type="text"
                                id="search_keyword"
                                name="search[keyword]"
                                placeholder="คำที่ต้องการค้นหา"
                                className="form-control"
                                value={keyword}
                                onChange={handleKeywordChange}
                            />
                        </div>
                    </div>
                    <div className="col-12 col-md-4">
                        <select
                            id="search_geo"
                            name="search[geo]"
                            placeholder="สถานที่ฝึกงาน"
                            className="form-control selectized"
                            value={location}
                            onChange={handleLocationChange}
                        >
                            {/* ตัวเลือกสำหรับสถานที่ฝึกงาน */}
                        </select>
                    </div>
                    
                    <div className="col-12 col-md-3 mt-2 mt-md-0">
                        <button type="submit" className="btn btn-primary btn-block btn-lg">ค้นหา</button>
                    </div>
                </form>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                <h1 className="text-center text-gray-600 text-lg font-bold">เลือกงานกับบริษัทที่ดีที่สุด</h1>
                </div>
                <Container maxWidth="lg">
                <Grid container spacing={4}>
                <Grid item xs={6} sm={4} md={3} lg={10}>
                <div className="text-center">
  
</div>

                <>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
  <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
        <Button size="small" className='flex-justify-center flex-items-center'>งานทั้งหมด</Button>
          
        </CardActions>
      </Card>
      

      
  <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">งานทั้งหมด</Button>
          
        </CardActions>
      </Card>
      

      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">งานทั้งหมด</Button>
          
        </CardActions>
      </Card>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">งานทั้งหมด</Button>
          
        </CardActions>
      </Card>
      </div>
    </>
    </Grid>
    </Grid>
    </Container>
    
            </div>
        </div>
            

      </div>
    </div>




  );
};

export default BlankPage;
