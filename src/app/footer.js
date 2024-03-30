import React from "react";

const Footer = () => {
  return (
    
    <footer style={{ backgroundColor: '#f0f0f0', padding: '20px', textAlign: 'center' }}>
      
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
      <img src="/logo-no.png" alt="Logo" style={{ width: '100px' }} />
        <img src="/logo-no1.png" alt="Logo" style={{ width: '100px' }} />
        
        <div style={{ maxWidth: '1000px', textAlign: 'left' }}>
          <p>ติดต่อเรา: example@example.com</p>
          <p>เบอร์โทร: 012-345-6789</p>
          <p>ที่อยู่: 123 ถนน ชื่อเส้นทาง, เมือง, ประเทศ</p>
          <p>คอลัมน์ที่สี่</p>
          <p>คอลัมน์ที่ห้า</p>
          <p>เนื้อหาอื่น ๆ ที่คุณต้องการเพิ่ม</p>
          <p>อีกบรรทัดหนึ่งของเนื้อหา</p>
          <p>อีกบรรทัดหนึ่งของเนื้อหา</p>
          {/* เพิ่มเนื้อหาเพิ่มเติมตามต้องการ */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
