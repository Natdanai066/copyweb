import React from 'react';
import Image from 'next/image';
import './button1.css';
import './grid.css';


const Table = () => {
  return (
    <div>

      {/* 1 */}
      <div class="grid-container">
      
        <div class="item1"><img src='/home_job_featured.jpg' /></div>
        <div class="item2"><Image
          src="/lol1.png"
          alt=""
          width={100}
          height={66.3}
        /></div>
        
          <td>รับนักศึกษาฝึกงาน ตำแหน่ง สโตร์<br />
              <img src='/lol2.png' />บริษัท บูลยเกียรติ จำกัด<br />
              <img src='/lol3.png' /> ฝึกงาน ขนงพระ, ปากช่อง, นครราชสีมา, 30130<br />
              <img src='/lol4.png' /> ฝึกงาน
            </td>
        <div class="item4"><button style={{
              backgroundColor: 'white',
              color: 'orange',
              border: '2px solid orange',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer'
            }}>
              <span style={{ transition: 'color 0.3s' }}>สมัครงานนี้</span>
              
            </button></div>
            
      </div>

      {/* 2 */}
      <div class="grid-container">
        <div class="item1"></div>
        <div class="item2"><Image
          src="/lol1.png"
          alt=""
          width={100}
          height={66.3}
        /></div>
        
        <td>รับนักศึกษาฝึกงาน ตำแหน่ง สโตร์<br />
              <img src='/lol2.png' />บริษัท บูลยเกียรติ จำกัด<br />
              <img src='/lol3.png' /> ฝึกงาน ขนงพระ, ปากช่อง, นครราชสีมา, 30130<br />
              <img src='/lol4.png' /> ฝึกงาน
            </td>
        <div class="item4"><button style={{
              backgroundColor: 'white',
              color: 'orange',
              border: '2px solid orange',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer'
            }}>
              <span style={{ transition: 'color 0.3s' }}>สมัครงานนี้</span>
            </button></div>
      </div>

      {/* 3 */}
      <div class="grid-container">
        <div class="item1"></div>
        <div class="item2"><Image
          src="/lol1.png"
          alt=""
          width={100}
          height={66.3}
        /></div>
        
        <td>รับนักศึกษาฝึกงาน ตำแหน่ง สโตร์<br />
              <img src='/lol2.png' />บริษัท บูลยเกียรติ จำกัด<br />
              <img src='/lol3.png' /> ฝึกงาน ขนงพระ, ปากช่อง, นครราชสีมา, 30130<br />
              <img src='/lol4.png' /> ฝึกงาน
            </td>
        <div class="item4"><button style={{
              backgroundColor: 'white',
              color: 'orange',
              border: '2px solid orange',
              borderRadius: '5px',
              padding: '10px 20px',
              cursor: 'pointer'
            }}>
              <span style={{ transition: 'color 0.3s' }}>สมัครงานนี้</span>
            </button></div>
      </div>
      
    </div>
  );
};

export default Table;