import Image from 'next/image';
import Link from 'next/link';
import logo from '@/images/logo.svg';

export function Footer() {
    return (
        <>
            <footer className="section-footer">
                <div className="container">
                    <div className="footer-top">
                        <div className="column">
                            <h6>يتبع</h6>
                            <ul>
                                <li><Link href="/">Facebook</Link></li>
                                <li><Link href="/">Instagram</Link></li>
                                <li><Link href="/">YouTube</Link></li>
                                <li><Link href="/">LinkedIn</Link></li>
                                <li><Link href="/">Twitter</Link></li>
                                <li><Link href="/">Snap</Link></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h6>يشترك</h6>
                            <ul> 
                                <li><Link href="/">النشرات الإخبارية</Link></li>
                                <li><Link href="/">الاشتراك</Link></li>
                                <li><Link href="/">أحداث حية</Link></li>
                                <li><Link href="/">المدونة الصوتية</Link></li>
                                <li><Link href="/">الدورات</Link></li>
                                <li><Link href="/">تطبيقات الموبايل</Link></li>
                            </ul>
                        </div>
                        <div className="column">
                            <h6>عن</h6>
                            <ul>
                                <li><Link href="/">وظائف</Link></li>
                                <li><Link href="/">وظائف</Link></li>
                                <li><Link href="/">يعلن</Link></li>
                                <li><Link href="/">خصوصية</Link></li>
                                <li><Link href="/">اختياراتك الإعلانية</Link></li>
                                <li><Link href="/">سياسة الخصوصية</Link></li>
                                <li><Link href="/">شروط الخدمة</Link></li>
                                <li><Link href="/">اتصل بنا</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <Link href="/">
                            <Image
                                src={logo}
                                alt=""
                            />
                        </Link>
                        <div className="copyright">
                            &copy;Copyright 2023. Al Bayan Press Printing Publishing & Distribution LLC,<br />PO BOX 2710, SHK ZAYED ROAD, DUBAI, UAE
                        </div>
                    </div> 
                </div>
            </footer>
        </>
    );
}