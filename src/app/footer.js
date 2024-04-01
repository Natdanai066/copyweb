import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Paper, Grid, Container, Typography } from '@mui/material';
import './button.css';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <footer>
      <Box sx={{ flexGrow: 1, backgroundColor: '#f7f7f7' }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={2}>
              <br/>
              
              <img src='/logo-no.png' />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            
              กรมพัฒนาธุรกิจการค้า
              <img src='/logo-no1.png' />
            </Grid>
            <Grid item xs={2}>
              <h1>สำหรับผู้สมัครงาน</h1>
              <br />
              <p>ทำเรซูเม่ (สมัครสมาชิก)</p>
              <p>ฝึกงาน เบี้ยเลี้ยง</p>
              <p>ฝึกงาน ใกล้รถไฟฟ้า</p>
              <p>ฝึกงาน ภาษาอังกฤษ</p>
              <p>ฝึกงาน ภาษาจีน</p>
              <p>ฝึกงาน ภาษาญี่ปุ่น</p>
              <p>ฝึกงานทั้งหมด</p>
              <br />
              <h2>สำหรับบริษัท</h2>
              <br />
              <p>ลงประกาศรับสมัครงาน</p>
              <p>(สมัครสมาชิก)</p>
              <p>ค้นประวัติ</p>


            </Grid>
            <Grid item xs={2}>
              <h1>ค้นหาตามสายงาน</h1>
              <br />
              <p>ฝึกงาน การตลาด</p>
              <p>ฝึกงาน บัญชี</p>
              <p>ฝึกงาน ไอที โปรแกรมเมอร์</p>
              <p>ฝึกงาน วิศวะ</p>
              <p>ฝึกงาน ดีไซน์เนอร์</p>
              <p>ฝึกงานสายงานอื่นๆ</p>
            </Grid>
            <Grid item xs={2}>
              <h1>ค้นหาตามจังหวัด</h1>
              <br />
              <p>ฝึกงาน กทม</p>
              <p>ฝึกงาน เชียงใหม่</p>
              <p>ฝึกงาน ชลบุรี</p>
              <p>ฝึกงาน สมุทรปราการ</p>
              <p>ฝึกงาน นครราชสีมา</p>
              <p>ฝึกงาน ภูเก็ต</p>
              <p>ฝึกงานจังหวัดอื่นๆ</p>
            </Grid>
            <Grid item xs={4}>
              <h1>สำหรับนักศึกษา  สำหรับบริษัท</h1>
                <button class="button button1">สร้างเรซูเม่ฟรี</button>
                <button class="button button2">สำหรับบริษัท / ผู้ประกอบการ</button>
              <br/>
              <p>ลงทะเบียนและสร้าง Resume เพื่อสมัครงาน Log in</p>
              <p>เด็กฝึกงาน.com เว็บหาที่ฝึกงาน ที่มอบประสบการณ์และโอกาสให้</p>
              <p>นักศึกษาฝึกงาน และนักศึกษาจบใหม่กับบริษัทชั้นนำมากมาย อัปเดตงาน</p>
              <p>ทุกวัน</p>
              <p>ติดต่อเรา</p>
              <p>โทร : 02-0002984</p>
              <p>อีเมล : info@thaiinternships.com</p>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box sx={{ flexGrow: 1, backgroundColor: '#3f4547' }}>
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', p: 4 }}>
            <p style={{ color: "#696969", marginBottom: 16 }}>
              2023-2024 เด็กฝึกงาน.com
              | <a href='#' style={{ color: "#9C9C9C", fontWeight: "bold" }}>แผนผังเว็บไซต์ </a>
              | <a href='#' style={{ color: "#9C9C9C", fontWeight: "bold" }}>นโยบายความเป็นส่วนตัว </a>
              | <a href='#' style={{ color: "#9C9C9C", fontWeight: "bold" }}>หางาน สมัครงาน </a>
              | <a href='#' style={{ color: "#9C9C9C", fontWeight: "bold" }}>การสร้าง Resume </a>
              | <a href='#' style={{ color: "#9C9C9C", fontWeight: "bold" }}>FAQ คำถามที่พบบ่อย </a>
            </p>
            <p style={{ color: "#696969" }}>
              เว็บหาที่ฝึกงาน หาเด็กฝึกงาน ประกาศฝึกงาน ศูนย์รวมบริษัทที่รับนักศึกษาฝึกงานทั่วประเทศ กรุงเทพ กทม ชลบุรี เชียงใหม่ ลำปาง บริษัทที่รับนักศึกษาสหกิจ | เด็กฝึกงาน.com
              ฝึกงานที่ไหนดี ต้องที่นี่ แหล่งฝึกงาน สถานที่ฝึกงาน ล่าสุด 2566 - 2567 นักศึกษาฝึกงาน พาร์ทไทม์ part-time งานประจำ วิศวะ การตลาด บัญชี กราฟฟิก อัพเดทงานทุกวัน
            </p>
          </Box>
        </Container>
      </Box>

      <Box sx={{ flexGrow: 1, backgroundColor: '#272C2B' }}>
        <Container maxWidth="xl">
          <Box sx={{ textAlign: 'center', p: 2 }}>
            <p style={{ color: "#9C9C9C" }}>บริษัท จัดหางาน อินเทิร์นชิพส์ (ไทยแลนด์) จำกัด อาคารนันทาเพลส ห้อง 104 ชั้น 1 เลขที่ 191 ซ.รามอินทรา 39 ถนนรามอินทรา แขวงอนุสาวรีย์ เขตบางเขน กรุงเทพ 10220 Call : 02-0002984 Fax : 02-0002984 info@thaiinternships.com</p>
          </Box>
          
        </Container>
      </Box>
    </footer>
  );
}
