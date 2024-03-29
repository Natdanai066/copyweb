import React from 'react';
import Image from 'next/image';

const Table = () => {
  return (
    <div>
      
      <table style={{ width: '70%', border: '1px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr><div style={{ margin: '0 20px' }}>
          <h1>งานแนะนำ</h1>
            </div>
          </tr>
        </thead>
        <tbody>
            <br/>
          <tr>
          <div style={{ margin: '0 20px' }}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={66.3}
          /></div>
            <td>รับสมัครตำแหน่ง Graphic Design<br/>
            บริษัท พรีเมียร์ ซูชิ จำกัด<br/>
            ฝึกงาน สำโรงเหนือ, เมืองสมุทรปราการ, สมุทรปราการ, 10270<br/>
            ฝึกงานเบี้ยเลี้ยง  ฝึกงาน ภาษาอังกฤษ
            </td>
            
            <td>สมัครงานนี้</td>
            
          </tr>
          
          <tr>
          <div style={{ margin: '0 20px' }}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={66.3}
          /></div>
            <td>พนักงานพาร์ทไทม์ /ทำเอกสารส่งออก (ช่วงมีนาคม - มิถุนายน) /ถ้าสื่อสารจีนได้มีค่าภาษาให้</td>
            <td>สมัครงานนี้</td>
          </tr>
          <tr><div style={{ margin: '0 20px' }}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={66.3}
          /></div>
            <td>รับนักศึกษาฝึกงาน ตำแหน่ง ต้อนรับบริการลูกค้า</td>
            <td>สมัครงานนี้</td>
          </tr>
          <tr><div style={{ margin: '0 20px' }}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={66.3}
          /></div>
            <td>รับนักศึกษาฝึกงาน ตำแหน่ง จัดเลี้ยง</td>
            <td>สมัครงานนี้</td>
          </tr>
          <tr><div style={{ margin: '0 20px' }}>
          <Image
            src="/logo.png"
            alt=""
            width={100}
            height={66.3}
          /></div>
            <td>พนักงานพาร์ทไทม์ /ทำเอกสารส่งออก (ช่วงมีนาคม - มิถุนายน) /ถ้าสื่อสารจีนได้มีค่าภาษาให้</td>
            <td>สมัครงานนี้</td>
            
          </tr>
          
        </tbody>
        
      </table>
      
    </div>
  );
};

export default Table;