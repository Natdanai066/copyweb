import { useRouter } from 'next/router';

export default function CompanyDetails() {
  const router = useRouter();
  const { id } = router.query;

  // ในส่วนนี้คุณสามารถนำ id ไปใช้ในการดึงข้อมูลบริษัทจากแหล่งข้อมูล (เช่น API) หรือทำอย่างอื่นตามต้องการ

  return (
    <div>
      <h1>Company Details for ID: {id}</h1>
      {/* นี่คือส่วนที่แสดงรายละเอียดของบริษัท */}
    </div>
  );
}
