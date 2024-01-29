import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { StocksSlider } from "@/components/StocksSlider";
import featuredImage from "@/images/image-4.jpg";
import author_1 from "@/images/author-1.png";
import author_2 from "@/images/author-2.png";
import author_3 from "@/images/author-3.png";
import image_5 from "@/images/image-5.jpg";
import image_6 from "@/images/image-6.jpg";

export function ArticleGroup2() {

    return (
        <>
            <section className="section-article-group-2">
                <div className="container">

                    <h2 className="section-title">الاقتصاد</h2>
                    <StocksSlider />

                    <div className="featured-article">
                        <div className="article-content">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h3><Link href="#">تقترب شركة نخيل من صفقة إعادة هيكلة ديون بقيمة 4.6 مليار دولار مع تسريع خططها للاستفادة من الطلب المتزايد على </Link></h3>
                            <ul>
                                <li>تسعى مجموعة عقارية مملوكة للحكومة إلى بدء العمل في موقع الواجهة البحرية المتوقف علي</li>
                                <li>وتتميز هذه الزياربالإعلان عن ضمانات إماراتية بشأن كميات المحروقات التي يتم توريدها لفرنسا</li>
                                <li>تسعى فرنسا إلى تنويع مصادر التوريد في سياق الصراع في أوكرانيا</li>
                            </ul>
                        </div>
                        <ImageWithCaption
                            src={featuredImage}
                            width="300"
                            height="225"
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                        />
                    </div>

                    <div className="featured-authors">
                        <div className="author">
                            <div className="author-details">
                                <div className="author-name">40,000 مليون</div>
                                <p>دبي تستضيف المؤتمر والمعرض العالمي للمناطق الحرة غداً</p>
                            </div>
                            <Image
                                src={author_3}
                                alt=""
                            />
                        </div>
                        <div className="author">
                            <div className="author-details">
                                <div className="author-name">40,000 مليون</div>
                                <p>دبي تستضيف المؤتمر والمعرض العالمي للمناطق الحرة غداً</p>
                            </div>
                            <Image
                                src={author_2}
                                alt=""
                            />
                        </div>
                        <div className="author">
                            <div className="author-details">
                                <div className="author-name">40,000 مليون</div>
                                <p>دبي تستضيف المؤتمر والمعرض العالمي للمناطق الحرة غداً</p>
                            </div>
                            <Image
                                src={author_1}
                                alt=""
                            />
                        </div>

                    </div>

                    <div className="other-articles">
                        <div className="articles-2">
                            <div className="article-item">
                                <Image
                                    src={image_5}
                                    alt=""
                                />
                                <div className="article-details">
                                    <div className="article-category">
                                        <Link href="#">شراكة استراتيجية</Link>
                                    </div>
                                    <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريك ومقره الصين والذي يعاني حاليًا</Link></h3>
                                </div>
                            </div>
                            <div className="article-item">
                                <Image
                                    src={image_6}
                                    alt=""
                                />
                                <div className="article-details">
                                    <div className="article-category">
                                        <Link href="#">شراكة استراتيجية</Link>
                                    </div>
                                    <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريكس ومقره الصين والذي يعاني حاليًا</Link></h3>
                                </div>
                            </div>
                            <div className="article-item">
                                <Image
                                    src={image_5}
                                    alt=""
                                />
                                <div className="article-details">
                                    <div className="article-category">
                                        <Link href="#">شراكة استراتيجية</Link>
                                    </div>
                                    <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريكس ومقره الصين والذي يعاني حاليًا</Link></h3>
                                </div>
                            </div>
                            <div className="article-item">
                                <Image
                                    src={image_6}
                                    alt=""
                                />
                                <div className="article-details">
                                    <div className="article-category">
                                        <Link href="#">شراكة استراتيجية</Link>
                                    </div>
                                    <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريكس ومقره الصين والذي يعاني حاليًا</Link></h3>
                                </div>
                            </div>
                        </div>
                        <div className="articles-1">
                            <div className="article-item">
                                <div className="article-category">
                                    <Link href="#">شراكة استراتيجية</Link>
                                </div>
                                <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريكس ومقره الصين والذي يعاني حاليًا</Link></h3>
                                <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية</p>
                            </div>
                            <div className="article-item">
                                <div className="article-category">
                                    <Link href="#">شراكة استراتيجية</Link>
                                </div>
                                <h3><Link href="#">تجري المملكة العربية السعودية محادثات للانضمام إلى بنك بريكس ومقره الصين والذي يعاني حاليًا</Link></h3>
                                <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
