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

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

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

const images = ["/Screenshot.png", "/home_cover.jpg","/logo-test3.png","logo-test4.jpg"];

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
    }, 30000); // เปลี่ยนภาพทุก 3 วินาที

    return () => clearInterval(interval);
  }, []);

  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (

    // <div style={{ background: 'white', minHeight: '100vh' }} className={styles.container}>

    //   {/* ตัวอย่างเนื้อหาในหน้าเว็บ */}
    //   <header className='header'></header>
    //   <div className="header_container" ></div>
    //   <div className="row pb-2"></div>
    //   <div className="header"></div>

    //   <div style={{ display: 'flex', justifyContent: 'center' }}>
    //     <Image
    //       src="/img-fluid.png"
    //       alt=""
    //       width={255}
    //       height={66.3}
    //     />
    //     <div style={{ margin: '0 20px' }}></div>
    //     <Image
    //       src="/logo-test1.jpg"
    //       alt=""
    //       width={825}
    //       height={99}
    //       style={{ order: 2 }}
    //     />

    //     {/* <Image
    //         src="/logo-test2.jpg"
    //         alt=""
    //         width={825}
    //         height={99}
    //         style={{order: 1}}
    //       /> */}

    //   </div>
    //   <div style={{ display: 'flex', justifyContent: 'center' }}>
    //     <ul className={otherStyles.navbar}>
    //       <li><a className={styles.active} href="#home">หาที่ฝึกงาน</a></li>
    //       <li><a href="#news">หางานประจำ/พาร์ทไทม์</a></li>
    //       <li><a href="#contact">วาไรตี้</a></li>
    //       <li><a href="#about">ทักษะอาชีพ</a></li>
    //       <li><a href="#about"> มหาวิทยาลัย</a></li>
    //       <li><a href="#about">สำหรับบริษัท</a></li>
    //       <li><a href="#about">สำหรับผู้สมัครงาน</a></li>
    //     </ul>
    //   </div>


    //   <div className='slideshow'>
    //     <img src={images[index]} alt={`Image ${index}`} width={1980} height={100} />
    //     <style jsx>{`
    //     .slideshow {
    //       position: relative;
    //       max-width: 100%;
    //       overflow: hidden;
    //     }

    //     .slideshow img {
    //       display: block;
    //       width: 100%;
    //       height: auto;
    //       object-fit: cover;
    //       transition: opacity 60s ease-in-out;
    //     }
    //   `}</style>
    //   </div>

    //   <Container maxWidth="lg">
    //     <div className="home-form-search__wrapper container">
    //       <div className="home-form-search__container">
    //         <form className="home-form-search row" onSubmit={handleSubmit}>
    //           <div className="col-12 col-md-5">
    //             <div className="input-group mb-2 mr-md-2">
    //               <input
    //                 type="text"
    //                 id="search_keyword"
    //                 name="search[keyword]"
    //                 placeholder="คำที่ต้องการค้นหา"
    //                 className="form-control"
    //                 value={keyword}
    //                 onChange={handleKeywordChange}
    //               />
    //             </div>
    //           </div>
    //           <div className="col-12 col-md-4">
    //             <select
    //               id="search_geo"
    //               name="search[geo]"
    //               placeholder="สถานที่ฝึกงาน"
    //               className="form-control selectized"
    //               value={location}
    //               onChange={handleLocationChange}
    //             >
    //               {/* ตัวเลือกสำหรับสถานที่ฝึกงาน */}
    //             </select>
    //           </div>
    //           <div className="col-12 col-md-3 mt-2 mt-md-0">
    //             <button type="submit" className="btn btn-primary btn-block btn-lg">ค้นหา</button>
    //           </div>
    //         </form>
    //         <div style={{ display: 'flex', justifyContent: 'center' }}>
    //           <h1 className="text-center text-gray-600 text-lg font-bold">เลือกงานกับบริษัทที่ดีที่สุด</h1>
    //         </div>

    //         <Grid container spacing={4}>
    //           <Grid item xs={6} sm={4} md={3} lg={10}>
    //             <div className="text-center">

    //             </div>

    //             <>
    //               <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    //                 <Card sx={{ maxWidth: 345 }}>
    //                   <CardMedia
    //                     sx={{ height: 140 }}
    //                     image="/static/images/cards/contemplative-reptile.jpg"
    //                     title="green iguana"
    //                   />
    //                   <CardContent>
    //                     <Typography gutterBottom variant="h5" component="div">
    //                       Lizard
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
    //                     </Typography>
    //                   </CardContent>
    //                   <CardActions>
    //                     <Button size="small" className='flex-justify-center flex-items-center'>งานทั้งหมด</Button>

    //                   </CardActions>
    //                 </Card>



    //                 <Card sx={{ maxWidth: 345 }}>
    //                   <CardMedia
    //                     sx={{ height: 140 }}
    //                     image="/static/images/cards/contemplative-reptile.jpg"
    //                     title="green iguana"
    //                   />
    //                   <CardContent>
    //                     <Typography gutterBottom variant="h5" component="div">
    //                       Lizard
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
    //                     </Typography>
    //                   </CardContent>
    //                   <CardActions>
    //                     <Button size="small">งานทั้งหมด</Button>

    //                   </CardActions>
    //                 </Card>


    //                 <Card sx={{ maxWidth: 345 }}>
    //                   <CardMedia
    //                     sx={{ height: 140 }}
    //                     image="/static/images/cards/contemplative-reptile.jpg"
    //                     title="green iguana"
    //                   />
    //                   <CardContent>
    //                     <Typography gutterBottom variant="h5" component="div">
    //                       Lizard
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
    //                     </Typography>
    //                   </CardContent>
    //                   <CardActions>
    //                     <Button size="small">งานทั้งหมด</Button>

    //                   </CardActions>
    //                 </Card>
    //                 <Card sx={{ maxWidth: 345 }}>
    //                   <CardMedia
    //                     sx={{ height: 140 }}
    //                     image="/static/images/cards/contemplative-reptile.jpg"
    //                     title="green iguana"
    //                   />
    //                   <CardContent>
    //                     <Typography gutterBottom variant="h5" component="div">
    //                       Lizard
    //                     </Typography>
    //                     <Typography variant="body2" color="text.secondary">
    //                       Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica
    //                     </Typography>
    //                   </CardContent>
    //                   <CardActions>
    //                     <Button size="small">งานทั้งหมด</Button>

    //                   </CardActions>
    //                 </Card>
    //               </div>
    //             </>
    //           </Grid>
    //         </Grid>



    //       </div>
    //     </div>


    //     <div>
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <br />
    //       <Table />
    //     </div>
    //     <br/>
    //     <br/>
    //     <br/>
    //     <Box sx={{ width: '100%', typography: 'body1' }}>
    //       <TabContext value={value}>
    //         <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
    //           <TabList onChange={handleChange} aria-label="lab API tabs example">
    //             <Tab label="Item One" value="1" />
    //             <Tab label="Item Two" value="2" />
    //             <Tab label="Item Three" value="3" />
    //           </TabList>
    //         </Box>
    //         <TabPanel value="1">Item One</TabPanel>
    //         <TabPanel value="2">Item Two</TabPanel>
    //         <TabPanel value="3">Item Three</TabPanel>
    //       </TabContext>
    //     </Box>


    //   </Container>

    // </div>
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
          <li><img src ="/flag-th-icon.png"/></li>
          <li><img src ="/flag-en-icon.png"/></li>
        </ul>
      </div>
      
      <div>
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
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
            <img src={images[0]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[1]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[2]} />
          </SwiperSlide>
          <SwiperSlide>
            <img src={images[3]} />
          </SwiperSlide>
        </Swiper>
      </div>
<Keyword/>
      <section>
        <Container maxWidth="lg">
          <Typography variant="h5" style={{ textAlign: 'center', color: 'gray' }} my={4}>เลือกงานกับบริษัทที่ดีที่สุด</Typography>

          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card sx={{ width: '100%' }}>
                <CardContent>
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Word of the Day
                  </Typography>
                  <Typography variant="h5" component="div">
                    Word of the Day
                  </Typography>
                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                  </Typography>
                  <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </SwiperSlide>

          </Swiper>
        </Container>

      </section>

      <section>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            {/* Container Left */}
            <Grid item xs={9}>
              <br />
              <br />
              <br />
              <br />
              <Table />
              <br />
              <br />
              
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
        <br/>
        <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
  <div >INSIGHTS(in)SPACE</div>
  <div >INTERN(n)VIEW</div>
</div>

      <br/>
      <div>
      <Bottom/>
      
      </div>
      
  <div>กิจกรรม</div>
  <div>ไม่พบข้อมูล</div>
  <br/>
  <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
  <div >ข่าว/ประชาสัมพันธ์</div>
  </div>
  
  <Newsslide/>
  <div className='bold-and-large' style={{ display: 'flex', gap: '330px' }}>
  <div >อัปเดตวาไรตี้</div>
  </div>
  <Newsslide1/>
  <br/>
  <div className='bold-and-large' style={{ display: 'flex', gap: '330px', justifyContent: 'center' }}>
  <div style={{ fontWeight: 'bold', fontSize: 'large' }}>Contact Sales</div>
</div>
<br/>

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
<br/>
<br/>
<br/>
<br/>

<Footer/>

        
    
</div>


  );
};

export default BlankPage;
