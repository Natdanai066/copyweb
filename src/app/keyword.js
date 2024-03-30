'use client'
import { useState } from 'react';
import styles from './keyword.css'; // นำเข้าไฟล์ CSS module

const Home = () => {
    const [keyword, setKeyword] = useState('');
    const [geo, setGeo] = useState('');

    const handleKeywordChange = (event) => {
        setKeyword(event.target.value);
    };

    const handleGeoChange = (event) => {
        setGeo(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // ทำสิ่งที่ต้องการเมื่อกด submit
        // เช่น การนำค่า keyword และ geo ไปใช้งานในการค้นหา
    };

    return (
        <div className={styles.container}>
            <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.inputContainer}>
                    <input
                        type="text"
                        id="search_keyword"
                        placeholder="คำที่ต้องการค้นหา"
                        className={styles.input}
                        value={keyword}
                        onChange={handleKeywordChange}
                    />
                </div>
                <div className={styles.selectContainer}>
                    <select
                        id="search_geo"
                        placeholder=""
                        className={styles.select}
                        value={geo}
                        onChange={handleGeoChange}
                    >
                        <option value="" disabled>สถานที่ฝึกงาน</option>
                        <option value="เขตคลองเตย">เขตคลองเตย</option>
                        <option value="เขตคลองสาน">เขตคลองสาน</option>
                        <option value="เขตคลองสามวา">เขตคลองสามวา</option>
                        <option value="เขตคันนายาว">เขตคันนายาว</option>
                        <option value="เขตจตุจักร">เขตจตุจักร</option>
                        <option value="เขตจอมทอง">เขตจอมทอง</option>
                        <option value="เขตดอนเมือง">เขตดอนเมือง</option>
                        <option value="เขตดินแดง">เขตดินแดง</option>
                        <option value="เขตดุสิต">เขตดุสิต</option>
                        <option value="เขตตลิ่งชัน">เขตตลิ่งชัน</option>
                        <option value="เขตทวีวัฒนา">เขตทวีวัฒนา</option>
                        <option value="เขตทุ่งครุ">เขตทุ่งครุ</option>
                        <option value="เขตธนบุรี">เขตธนบุรี</option>
                        <option value="เขตบางเขน">เขตบางเขน</option>
                        <option value="เขตบางแค">เขตบางแค</option>
                        <option value="เขตบางกอกใหญ่">เขตบางกอกใหญ่</option>
                        <option value="เขตบางกอกน้อย">เขตบางกอกน้อย</option>
                        <option value="เขตบางกะปิ">เขตบางกะปิ</option>
                        <option value="เขตบางขุนเทียน">เขตบางขุนเทียน</option>
                        <option value="เขตบางคอแหลม">เขตบางคอแหลม</option>
                        <option value="เขตบางซื่อ">เขตบางซื่อ</option>
                        <option value="เขตบางนา">เขตบางนา</option>
                        <option value="เขตบางบอน">เขตบางบอน</option>
                        <option value="เขตบางพลัด">เขตบางพลัด</option>
                        <option value="เขตบางรัก">เขตบางรัก</option>
                        <option value="เขตบึงกุ่ม">เขตบึงกุ่ม</option>
                        <option value="เขตปทุมวัน">เขตปทุมวัน</option>
                        <option value="เขตประเวศ">เขตประเวศ</option>
                        <option value="เขตป้อมปราบศัตรูพ่าย">เขตป้อมปราบศัตรูพ่าย</option>
                        <option value="เขตพญาไท">เขตพญาไท</option>
                        <option value="เขตพระโขนง">เขตพระโขนง</option>
                        <option value="เขตพระนคร">เขตพระนคร</option>
                        <option value="เขตภาษีเจริญ">เขตภาษีเจริญ</option>
                        <option value="เขตมีนบุรี">เขตมีนบุรี</option>
                        <option value="เขตยานนาวา">เขตยานนาวา</option>
                        <option value="เขตราชเทวี">เขตราชเทวี</option>
                        <option value="เขตราษฎร์บูรณะ">เขตราษฎร์บูรณะ</option>
                        <option value="เขตลาดกระบัง">เขตลาดกระบัง</option>
                        <option value="เขตลาดพร้าว">เขตลาดพร้าว</option>
                        <option value="เขตวังทองหลาง">เขตวังทองหลาง</option>
                        <option value="เขตวัฒนา">เขตวัฒนา</option>
                        <option value="เขตสวนหลวง">เขตสวนหลวง</option>
                        <option value="เขตสะพานสูง">เขตสะพานสูง</option>
                        <option value="เขตสัมพันธวงศ์">เขตสัมพันธวงศ์</option>
                        <option value="เขตสาทร">เขตสาทร</option>
                        <option value="เขตสายไหม">เขตสายไหม</option>
                        <option value="เขตหนองแขม">เขตหนองแขม</option>
                        <option value="เขตหนองจอก">เขตหนองจอก</option>
                        <option value="เขตหลักสี่">เขตหลักสี่</option>
                        <option value="เขตห้วยขวาง">เขตห้วยขวาง</option>
                    </select>
                </div>
                
                    <button type="submit" className={styles.button}>ค้นหา</button>
                
            </form>
        </div>
    );
};

export default Home;
