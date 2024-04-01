// pages/blank.js
"use client"
import React, { useEffect, useState } from "react";
import Image from 'next/image';
import styles from './styles.module.css';
import otherStyles from './otherStyles.module.css';
import TabContext from '@mui/lab/TabContext';
import './front.css';
import { Card, CardActions, CardContent, CardMedia, Button, Typography, Divider, Stack } from '@mui/material';
import Keyword from './keyword';
import './text.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Footer from './footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Swiper, SwiperSlide } from "swiper/react";
import './button.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Test from './test';
import './slide.css';
import Table from './Table';
import Bottom from './bottom';
import Newsslide from './newsslide';
import Newsslide1 from './newsslide1';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
// import { useRouter } from 'next/navigation'
import Link from 'next/link'

const images = ["/Screenshot.png", "/home_cover.jpg", "/logo-test3.png", "logo-test4.jpg"];

const BlankPage = () => {
  // const router = useRouter()

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

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const sponsorImage = [
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/4/sys-591372119f001.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/5/sys-59137211a76fd.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/9/sys-59137211c86e8.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/39/sys-bbbdc55c835aa7cb23b6159803913421.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/76/sys-3804e6f69261f1b654d69e4bff380cda.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/149/sys-25f6dc22810e3e6947455cb7c4f45133.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/150/sys-85632c9c747cfc620ca3fb058b39d5a3.png",
    "https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/3/sys-2d2635295272387cbd45f04e8025d019.png",
  ];

  const companyData = [
    {
      "id": "1",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "2",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "3",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "4",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "5",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "6",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "7",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },
    {
      "id": "8",
      "coverImg": "https://images.unsplash.com/photo-1707344088547-3cf7cea5ca49?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "logoImg": "https://images.unsplash.com/photo-1633409361618-c73427e4e206?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "companyName": "Internships Recruitment (Thailand) Company Limited",
      "address": "อนุสาวรีย์, บางเขน, กรุงเทพมหานคร, 10220",
    },

  ];

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

        <div>
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={false}
            modules={[Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={images[0]} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[1]} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[2]} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </SwiperSlide>
            <SwiperSlide>
              <img src={images[3]} style={{ width: '100%', height: '450px', objectFit: 'cover' }} />
            </SwiperSlide>
          </Swiper>
        </div>

        <Keyword />

        <section>
          <Container maxWidth="md">
            <Swiper
              spaceBetween={40}
              a11y={false}
              freeMode={true}
              speed={11000}
              slidesPerView="auto"
              loop={true}
              autoplay={{
                delay: 0.5,
                disableOnInteraction: false,
              }}
              navigation={false}
              modules={[Autoplay]}
              className="sponsor-swiper"
              style={{
                WebkitTransitionTimingFunction: 'linear',
                transitionTimingFunction: 'linear',
              }}
            >
              {sponsorImage.map((image, index) => {
                return (
                  <SwiperSlide style={{ width: '120px' }} key={index}>
                    <Box sx={{ height: '80px' }}>
                      <img src={image} />
                    </Box>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Container>
        </section>

        <section style={{ marginBottom: 100 }}>
          <Container maxWidth="lg">
            <Typography variant="h5" style={{ textAlign: 'center', color: 'gray' }} my={4}>เลือกงานกับบริษัทที่ดีที่สุด</Typography>

            <Swiper
              slidesPerView={4}
              spaceBetween={30}
              slidesPerGroup={4}
              loop={true}
              pagination={{
                clickable: true,
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay, Pagination]}
              className="mySwiper"
            >
              {companyData.map((company) => {
                return (
                  <SwiperSlide key={company.id}>
                    <Card sx={{ maxWidth: '100%', border: '1px solid #ddd' }}>
                      <div>
                        <div style={{ position: 'relative', height: '150px' }}>
                          <Image src={company.coverImg} width={0} height={0} style={{ width: '100%', height: '100%' }} />
                        </div>
                        <Image src={company.logoImg} width={0} height={0} style={{ width: '80px', height: '80px', position: 'absolute', top: '110px', left: '50%', right: '50%', translate: '-50%', border: '1px solid #ddd' }} />
                      </div>
                      <CardContent sx={{ marginTop: 5 }}>
                        <Typography gutterBottom variant="p" component="div" style={{ marginBottom: 16, fontSize: 18, fontWeight: 'bold', color: '#f60' }}>
                          {company.companyName}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {company.address}
                        </Typography>
                      </CardContent>
                      <CardActions>
                      <Button href={'/newPage/'} style={{ margin: '0 auto' }}>
                        <Link href={'/newPage/'} style={{ margin: '0 auto' }}>
                          <Button variant="contained">งานทั้งหมด</Button>
                        </Link></Button>

                        {/* <Button variant="contained" onClick={()=> router.push('/company/' + company.id)}>งานทั้งหมด</Button> */}
                      </CardActions>
                    </Card>
                  </SwiperSlide>
                )
              })}
            </Swiper>
          </Container>
        </section>

        <section>
          <Container maxWidth="lg">
            <Grid container spacing={2}>
              {/* Container Left */}
              <Grid item xs={9}>
                <Table />
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                      <Tab label="ที่ฝึกงาน" value="1" active />
                      <Tab label="งานประจำ" value="2" />
                      <Tab label="งานพาร์ทไทม์" value="3" />
                    </TabList>
                  </Box>

                  {/* TabPanel 1 */}
                  <TabPanel value="1">
                    <Box sx={{ width: '100%' }}>
                      <Stack spacing={2}>
                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/471/sys-591381e228692.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />
                        <br />
                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/471/sys-591381e228692.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />
                      </Stack>

                      <Button variant="outlined" sx={{ width: '100%', margin: '24px 0' }}>ดูเพิ่มเติม</Button>
                    </Box>
                  </TabPanel>

                  {/* TabPanel 2 */}
                  <TabPanel value="2">
                    <Box sx={{ width: '100%' }}>
                      <Stack spacing={2}>
                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/6656/sys-b0e9a60dd17049680f0b66a482e91f5f.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />

                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/6656/sys-b0e9a60dd17049680f0b66a482e91f5f.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />
                      </Stack>

                      <Button variant="outlined" sx={{ width: '100%', margin: '24px 0' }}>ดูเพิ่มเติม</Button>

                    </Box>
                  </TabPanel>

                  {/* TabPanel 3 */}
                  <TabPanel value="3">
                    <Box sx={{ width: '100%' }}>
                      <Stack spacing={2}>
                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/5178/sys-cd415f53c0701326aa6487ec80a81d41.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />

                        <Box sx={{ width: '100%' }} >
                          <Grid container spacing={2}>
                            <Grid item xs={2}>
                              <img src="https://เด็กฝึกงาน.com/media/cache/cmf_outbound_100x100/cms/media/company/5178/sys-cd415f53c0701326aa6487ec80a81d41.jpg" />
                            </Grid>
                            <Grid item xs={8}>
                              <h6>รับสมัครนักศึกษาฝึกงาน การจัดการและการท่องเที่ยว</h6>
                              <div>BP Luxury Travel</div>
                              <div>ฝึกงาน กรุงเทพมหานคร</div>
                              <div>ฝึกงาน</div>
                            </Grid>
                            <Grid item xs={2}>
                              <div style={{ textAlign: 'end' }}>
                                <Button variant="outlined">สมัครงานนี้</Button>
                                <div>2 อัตรา</div>
                                <div>30 มี.ค. 2024</div>
                              </div>
                            </Grid>
                          </Grid>
                        </Box>

                        <Divider />
                      </Stack>

                      <Button variant="outlined" sx={{ width: '100%', margin: '24px 0' }}>  ดูเพิ่มเติม</Button>
                    </Box>
                  </TabPanel>
                </TabContext>
              </Grid>

              {/* Container Right */}
              <Grid item xs={3}>
                <Container>
                  <Card sx={{ marginBottom: "16px" }}>
                    <img src="https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/123/sys-3d13c03bfb8e6ee26e038d59fdf9f8a6.jpg" />
                  </Card>
                  <Card sx={{ marginBottom: "16px" }}>
                    <img src="https://เด็กฝึกงาน.com/media/cache/cmf_strip/cms/media/banners/151/sys-ca10d467768e40695015f4d46eea074a.jpg" />
                  </Card>
                </Container>
              </Grid>
            </Grid>
          </Container>
        </section>

        <Box style={{ width: '100%' }}>
          <div style={{ position: 'relative', width: '100%' }}>
            <img src="https://xn--12cas3c2av3m3a0g7c.com/bundles/_themes/toro/default/torocms/images/home_banner_1.jpg" width="100%" />
            <Container maxWidth="lg" >
              <div style={{ position: 'absolute', top: 50, bottom: 50, color: '#fff', fontSize: 22, fontWeight: 500, textAlign: 'center' }}>
                สร้าง RESUME ONLINE <br />
                FREE สมัครเลย
                <br />
                <Button variant="contained" color="success" sx={{ margin: '24px 0' }}>สร้าง RESUME</Button>
              </div>
            </Container>

          </div>


        </Box>
      </main>

      <Container maxWidth="lg" >
        <br />
        <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
          <div >INSIGHTS(in)SPACE</div>
          <div >INTERN(n)VIEW</div>
        </div>

        <br />
        <div>
          <Bottom />

        </div>

        <div>กิจกรรม</div>
        <div>ไม่พบข้อมูล</div>
        <br />
        <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
          <div >ข่าว/ประชาสัมพันธ์</div>
        </div>

        <Newsslide />
        <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
          <div >อัปเดตวาไรตี้</div>
        </div>
        <Newsslide1 />
        <br />
        <div className='bold-and-large' style={{ display: 'flex', gap: '330px', justifyContent: 'center' }}>
          <div style={{ fontWeight: 'bold', fontSize: 'large' }}>Contact Sales</div>
        </div>
        <br />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', columnGap: '10px' }}>
            <img src="/a2.jpg" alt="Avatar" style={{ width: '70px', borderRadius: '50%' }} />
            <div>
              <span>ภูษณิศา ทาระธรรม (น้ำฟ้า)</span>
              <h1>089-123-5016</h1>
              <h2>internships_sale</h2>
              <span>info@thaiinternships.com</span>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', alignItems: 'center', columnGap: '10px' }}>
            <img src="/a1.jpg" alt="Avatar" style={{ width: '70px', borderRadius: '50%' }} />
            <div>
              <span>ภัทรพร เอี่ยวมงคลศิลป์ (เฟิร์น)</span>
              <h1>086-874-7153</h1>
              <h2>fern.internships</h2>
              <span>sale.internships@gmail.com</span>
            </div>
          </div>
        </div>

      </Container>
      <br />
      <br />
      <br />
      <br />

      <Footer />



    </div>


  );
};

export default BlankPage;
