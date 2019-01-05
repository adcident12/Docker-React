# Docker-React
<p>เป็นการพัฒนา React บน Docker<p>
<p>ขั้นตอน</p>
<p>ทำการติดตั้ง Docker บนเครื่องของคุณ<p>
<p><a href="https://docs.docker.com/docker-for-windows/install/" target="_bank">Install Docker for Windows</a><p>
<p><a href="https://docs.docker.com/docker-for-mac/install/" target="_bank">Install Docker for Mac</a><p>
<p>การเตรียมโปรเจค(ในที่นี้จะเป็นการ clone จาก github ของผม)</p>
<p>เนื่องจากใน project ที่ clone มามีไฟล์ทุกอย่างครบหมดแล้ว</p>
<p>ไฟล์ที่สำคัญได้แก่</p>
<p>1.<code>Dockerfile</code></p>
<p>2.<code>.dockerignore</code></p>
<p>3.<code>docker-compose.yml</code></p>
<p>4.<code>.env</code></p>
<p>เมื่อทุกอย่างครบหมดเปิด Terminal</p>
<p>เข้าไปใน directory ที่เก็บ file docker-compose.yml</p>
<p>ใช้คำสั่ง ตามลำดับ</p>
<p>1.<code>docker-compose build</code></p>
<p>2.<code>docker-compose up -d</code></p>
<p>![screen shot 2019-01-06 at 12 11 43 am](https://user-images.githubusercontent.com/21277486/50727050-d37c4e00-1147-11e9-9efb-1622d4e32928.png)</p>
<p>สามารถเข้าทดสอบได้ที่</p>
<p><a href="http://localhost:3011/">http://localhost:3011/</a></p>
<p><a href="https://deploy-react-example-7f9a5.firebaseapp.com/">ตัวอย่างเมื่อเข้าสำเร็จ</a></p>
<p>Creditและสามารถศึกษาเพิ่มเติมได้จาก</p>
<p><a href="https://medium.com/@thanatchakromsang/%E0%B8%A1%E0%B8%B2%E0%B8%88%E0%B8%B1%E0%B8%9A-react-%E0%B8%A2%E0%B8%B1%E0%B8%94%E0%B9%83%E0%B8%AA%E0%B9%88-container-%E0%B8%81%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%96%E0%B8%AD%E0%B8%B0-react-docker-45ece149d603">มาจับ React ยัดใส่ Container กันเถอะ! (React+Docker)</a></p>
