import React from 'react';

const JobTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Logo</th>
          <th>ชื่อบริษัท</th>
          <th>ตำแหน่งงาน</th>
          <th>ประเภทงาน</th>
          <th>สถานที่</th>
          <th>ปุ่มสมัครงาน</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src="/path/to/logo1.png" alt="Logo 1" />
          </td>
          <td>บริษัท A</td>
          <td>ตำแหน่ง A</td>
          <td>ประเภท A</td>
          <td>สถานที่ A</td>
          <td>
            <button style={{ backgroundColor: 'orange' }}>สมัครงาน</button>
          </td>
        </tr>
        <tr>
          <td>
            <img src="/path/to/logo2.png" alt="Logo 2" />
          </td>
          <td>บริษัท B</td>
          <td>ตำแหน่ง B</td>
          <td>ประเภท B</td>
          <td>สถานที่ B</td>
          <td>
            <button style={{ backgroundColor: 'orange' }}>สมัครงาน</button>
          </td>
        </tr>
        {/* เพิ่มข้อมูลเพิ่มเติมตามต้องการ */}
      </tbody>
    </table>
  );
};

export default JobTable;
