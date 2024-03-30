import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


export default function ImgMediaCard() {
  return (
    <div style={{ display: 'flex', gap: '16px' }}>
      <Card sx={{ maxWidth: 550 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/use1.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div" fontWeight="fontWeightBold">
            INSIGHTS(in)SPACE @แสนสิริ
          </Typography>
          <Typography variant="body2" color="text.secondary">
            บริษัท แสนสิริ จำกัด (มหาชน) ผู้นำด้านการเฟ้นหาอสังหาริมทรัพย์ที่ครบวงจร เป็นบริษัทที่ให้โอกาสพนักงานทุกๆ คน และให้การสนับสนุนเรื่องฝึกงานของนักศึกษา...
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            INSIGHTS(in)SPACE 3/8/17 2,756
          </Typography>
          _________________________________________________________________________________________________________________________________________________________________________________________________________________________
          <div class="text-center hr-primary">
                <a href="/blogs/insights-in-space" class="btn btn-link btn-block text-muted">ดูทั้งหมด</a>
            </div>
            _________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </CardContent>
      </Card>

      <Card sx={{ maxWidth: 550 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="/use2.jpg"
        />
        
        <CardContent>
        <Typography gutterBottom variant="h8" component="div" fontWeight="fontWeightBold">
          INTER(n)VIEW ฝึกงานที่ AIS The StartUp
          </Typography>
          <Typography variant="body2" color="text.secondary">
          น้องมุก กับโอกาสการได้เข้ามาเป็น เด็กฝึกงาน ในตำแหน่ง Online Marketing ที่ AIS The StartUp พร้อมได้เรียนรู้เกี่ยวกับธุรกิจสตาร์ทอัพ
          </Typography>
          <br/>
          <Typography variant="body2" color="text.secondary">
            INTER(n)VIEW 12/12/18 3,313
          </Typography>
          _________________________________________________________________________________________________________________________________________________________________________________________________________________________
          <div class="text-center hr-primary">
                <a href="/blogs/insights-in-space" class="btn btn-link btn-block text-muted">ดูทั้งหมด</a>
                
            </div>
            _________________________________________________________________________________________________________________________________________________________________________________________________________________________
        </CardContent>
      </Card>
    </div>
  );
}
