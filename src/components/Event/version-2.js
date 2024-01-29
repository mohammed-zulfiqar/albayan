import Image from 'next/image';
import Link from 'next/link';
import speaker_1 from '@/images/speaker-1.png';
import speaker_2 from '@/images/speaker-2.png';
import speaker_3 from '@/images/speaker-3.png';
import speaker_4 from '@/images/speaker-4.png';


export function Event2() {
    return (
        <>
            <section className="section-event-2">
                <div className="container">
                    <h2>الاستدامة</h2>

                    <div className="speakers">
                        <Image
                            src={speaker_1}
                            alt=""
                        />
                        <Image
                            src={speaker_2}
                            alt=""
                        />
                        <Image
                            src={speaker_3}
                            alt=""
                        />
                        <Image
                            src={speaker_4}
                            alt=""
                        />
                    </div>

                    <h4>ستكون نتائج مؤتمر COP28 الإماراتي حاسمة في الحفاظ على هدف اتفاق باريس البالغ 1.5 درجة مئوية في متناول اليد. ستستضيف صحيفة البيان سلسلة من المناقشات الافتراضية والشخصية مع العقول الرائدة في مجال الاستدامة</h4>
                    <Link href="#" className="button">تذاكر</Link>
                    <div className="meta">COP28</div>
                </div>
            </section>
        </>
    )
};