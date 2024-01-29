import Image from 'next/image';
import Link from 'next/link';
import demoImage from '@/images/image-2.jpg';
import { ImageWithCaption } from '../ImageWithCaption';

export function InDepth() {
    return (
        <>
            <section className="section-in-depth">
                <div className="container">
                    <h2>في الصميم</h2>
                    <div className="article-grid">
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <ImageWithCaption
                                src={demoImage}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <ImageWithCaption
                                src={demoImage}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية</p>
                        </div>
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <ImageWithCaption
                                src={demoImage}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <ImageWithCaption
                                src={demoImage}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">العقارات</div>
                            <h3>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h3>
                            <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}