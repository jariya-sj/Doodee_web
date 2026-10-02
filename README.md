# DooDeeVision Django Company Website

เว็บไซต์ตัวอย่างสำหรับแนะนำบริษัท DooDeeVision พัฒนาด้วย Django + Python + HTML + Tailwind CSS (CDN) + Vanilla JavaScript

## หน้าในระบบ
- `/` หน้า Home / Company profile
- `/about/` เกี่ยวกับเรา
- `/products/` รายละเอียด DooDeeApp, DooDeeClinic 3D, DooDeeAgency
- `/partners/` พันธมิตรของเรา (มี placeholder สำหรับโลโก้/ข้อมูลจริง)
- `/contact/` ติดต่อเรา พร้อมฟอร์มที่สร้าง mailto

## วิธีรันบน Windows
```bash
python -m venv venv
venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
แล้วเปิด http://127.0.0.1:8000/

## หมายเหตุ
- Tailwind โหลดผ่าน CDN เพื่อให้โปรเจกต์รันง่าย ไม่ต้องติดตั้ง Node.js
- ข้อมูลผลิตภัณฑ์และอีเมลอ้างอิงจากหน้าเว็บไซต์ DooDeeVision ที่เผยแพร่ ณ วันที่จัดทำ
- รายชื่อพันธมิตรจริงไม่ได้ระบุในข้อมูลสาธารณะที่ใช้จัดทำ จึงใช้ placeholder เพื่อไม่สร้างข้อมูลบริษัทขึ้นเอง
- ภาพกราฟิกในหน้า Hero เป็น CSS illustration เพื่อหลีกเลี่ยงการคัดลอกรูปจากเว็บไซต์ต้นฉบับ
