import Image from 'next/image';
import company1 from '@/images/company1.png';
import company2 from '@/images/company2.png';
import company3 from '@/images/company3.png';
import company4 from '@/images/company4.png';
import youtube from '@/images/youtub.svg';


export function Event() {
    return (
        <>
            <section className="section-event">
                <div className="container">
                    <h2>شركات ناشئة</h2>
                    <div className="date-wrapper">
                        <div className="date">
                            <span>28</span>
                            <div className="event-city">شهر نوفمبر</div>
                        </div>
                        <div className="date">
                            <span>27</span>
                            <div className="event-city">شهر نوفمبر</div>
                        </div>
                    </div>

                    <div className="company-images">
                        <Image
                            src={company1}
                            alt=""
                        />
                        <Image
                            src={company2}
                            alt=""
                        />
                        <Image
                            src={company3}
                            alt=""
                        />
                        <Image
                            src={company4}
                            alt=""
                        />
                    </div>

                    <h4>نظرة عامة شاملة حول الأفكار والتقنيات والاستراتيجيات ونماذج الأعمال التي تغير طريقة عيشنا وعملنا.</h4>
                </div>
                <Image
                    src={youtube}
                    className="youtube-icon"
                    alt=""
                />
            </section>
        </>
    )
};