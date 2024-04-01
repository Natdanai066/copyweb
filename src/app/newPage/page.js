// pages/blank.js
"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from '../styles.module.css';
import otherStyles from '../otherStyles.module.css';
import TabContext from '@mui/lab/TabContext';
import '../front.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, Stack } from '@mui/material';
import Keyword from '../keyword';
import '../text.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from '../footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from "swiper/react";
import '../button.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../slide.css';
import Table from '../Table';
import Bottom from '../bottom';
import Newsslide from '../newsslide';
import Newsslide1 from '../newsslide1';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Modal from '@mui/material/Modal';
import { Check, CheckBox } from "@material-ui/icons";

import Checkbox from '@mui/material/Checkbox';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));




const images = ["/Screenshot.png", "/home_cover.jpg", "/logo-test3.png", "logo-test4.jpg"];

const newPage = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };
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
    }, 30000); // เปลี่ยนภาพทุก 3 วินาที

    return () => clearInterval(interval);
  }, []);

  const [value, setValue] = React.useState('1');



  const handleClick = () => {
    window.location.href = 'https://maps.app.goo.gl/kT9ngsHAFx8jcYkk9';
  };



  const [modalOpen, setModalOpen] = useState(false);

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleClose = () => {
    setModalOpen(false);
  };


  return (
    <div style={{ backgroundColor: 'white' }}>
      <main>
        <header>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <img src="/img-fluid.png" />
              </Grid>
              <Grid item xs={8}>
                <img src="/logo-test1.jpg" />
              </Grid>
            </Grid>
          </Container>
        </header>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <ul className={otherStyles.navbar}>
            <li><a className={styles.active} href="#home">หาที่ฝึกงาน</a></li>
            <li><a href="#news">หางานประจำ/พาร์ทไทม์</a></li>
            <li><a href="#contact">วาไรตี้</a></li>
            <li><a href="#about">ทักษะอาชีพ</a></li>
            <li><a href="#about"> มหาวิทยาลัย</a></li>
            <li><a href="#about">สำหรับบริษัท</a></li>
            <li><a href="#about">สำหรับผู้สมัครงาน</a></li>
            <li><img src="/flag-th-icon.png" /></li>
            <li><img src="/flag-en-icon.png" /></li>
          </ul>
        </div>



        <Container maxWidth="lg">
          <div>หน้าแรก บริษัททั้งหมด dentsu International (Thailand)</div>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2} columns={16}>
              <Grid item xs={12}>
                <Item>
                  <img src='/dentsu.png' />
                  <Typography variant="h6" align="left">เกี่ยวกับบริษัท</Typography>
                  <Typography align="left">
                    We partner with brands to achieve meaningful progress as a force for growth and good.
                    We create world-class solutions and services that unlock new opportunities for growth and business transformation across the entire customer journey.
                  </Typography>
                  <br />


                  <Typography variant="h6" align="left">ที่ตั้งบริษัท</Typography>
                  <Typography align="left">
                    968 อาคารอื้อจือเหลียง ชั้น 22 และ 27 ถ.พระราม 4 สีลม,</Typography>
                  <Typography align="left"> บางรัก, กรุงเทพมหานคร, 10500
                  </Typography>
                  <br />
                  <Typography variant="h6" align="left">สวัสดิการ</Typography>
                  <br />
                  <Typography align="left">
                    สำหรับพนักงานประจำ</Typography>
                  <Typography align="left">
                    - กองทุนสำรองเลี้ยงชีพ</Typography>
                  <Typography align="left">
                    - ประกันกลุ่ม (ชีวิต อุบัติเหตุ สุขภาพ ทันตกรรม)</Typography>
                  <Typography align="left">
                    - ลาพักร้อนเริ่ม 11 วันต่อปี</Typography>
                  <Typography align="left">
                    - Performance bonus</Typography>
                  <br />
                  <iframe
                    title="Google Maps"
                    width="484"
                    height="205"
                    loading="lazy"
                    allowFullScreen
                    src="https://www.google.com/maps?q=13.7274611,100.5403283&z=17&output=embed"
                  ></iframe>

                  <button
                    onClick={handleClick}
                    style={{
                      backgroundColor: 'orange',   // สีขอบสีส้ม
                      color: 'white',              // สีข้อความภายในปุ่มสีขาว
                      border: 'none',              // ไม่มีเส้นขอบ
                      padding: '10px 20px',        // ขนาด padding
                      borderRadius: '5px',         // มุมขอบโค้ง
                      cursor: 'pointer',           // เปลี่ยนรูปลูกศรเป็น pointer เมื่อชี้
                    }}
                  >
                    ขอเส้นทาง
                  </button>
                </Item>
              </Grid>
              <Grid item xs={4}>
                <Item><Typography variant="h6" align="left">ค้นหาตำแหน่งงาน</Typography></Item>
                <Typography align="left">
                  <div>
                    <Checkbox
                      checked={checked}
                      onChange={handleChange}
                      inputProps={{ 'aria-label': 'primary checkbox' }}
                    />

                  </div>
                  
                </Typography>

                <Grid item xs={4}>
                  <Item><Typography variant="h6" align="left">ค้นหาตำแหน่งงาน</Typography></Item>
                  <Typography align="left">
                    <div>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />

                    </div>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Item><Typography variant="h6" align="left">ค้นหาตำแหน่งงาน</Typography></Item>
                  <Typography align="left">
                    <div>
                      <Checkbox
                        checked={checked}
                        onChange={handleChange}
                        inputProps={{ 'aria-label': 'primary checkbox' }}
                      />

                    </div>
                  </Typography>
                </Grid>
              </Grid>






              <Grid item xs={12}>
                <Item>
                  <Typography variant="h6" align="left">รูปภาพและวีดีโอ</Typography>
                  <div>
                    <Typography align="left">
                      <img src="/youtube.png" alt="YouTube" onClick={handleOpen} />
                    </Typography>

                    <Modal
                      open={modalOpen}
                      onClose={handleClose}
                      aria-labelledby="youtube-modal-title"
                      aria-describedby="youtube-modal-description"
                    >
                      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>

                        <iframe
                          width="560"
                          height="315"
                          src="https://www.youtube.com/embed/Kj2pkJmRS4I"
                          allowFullScreen
                          style={{ marginTop: '10px' }}
                        ></iframe>
                        <button onClick={handleClose} style={{ marginTop: '10px' }}>Close</button>
                      </div>
                    </Modal>
                  </div>
                </Item>
                <br />
                <Grid item xs={12}>
                  <Item>
                    <Typography variant="h9" align="left">ผลการค้นหาตำแหน่งงาน dentsu International (Thailand) มี 1 ตำแหน่ง
                    </Typography>

                  </Item>
                  <br />
                  <Grid item xs={12}>
                    <Item>
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/lol1.png" alt="Your Image" style={{ marginRight: '20px' }} />

                        <Typography variant="h9" align="center" style={{ flexGrow: 1 }}>
                          <div>รับนักศึกษาฝึกงานหลายตำแหน่ง</div>
                          <div>dentsu International (Thailand)</div>
                          <div>ฝึกงาน สีลม, บางรัก, กรุงเทพมหานคร, 10500</div>
                          <div> ฝึกงาน</div>
                        </Typography>

                        <button
                          onClick={handleClick}
                          style={{
                            backgroundColor: 'orange',   // สีขอบสีส้ม
                            color: 'white',              // สีข้อความภายในปุ่มสีขาว
                            border: 'none',              // ไม่มีเส้นขอบ
                            padding: '10px 20px',        // ขนาด padding
                            borderRadius: '5px',         // มุมขอบโค้ง
                            cursor: 'pointer',           // เปลี่ยนรูปลูกศรเป็น pointer เมื่อชี้
                          }}
                        >
                          สมัครงานนี้
                        </button>
                      </div>


                    </Item>

                  </Grid>
                </Grid>
              </Grid>
            </Grid>

          </Box>
        </Container>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Footer />
      </main>
    </div>

  );
};

export default newPage;
