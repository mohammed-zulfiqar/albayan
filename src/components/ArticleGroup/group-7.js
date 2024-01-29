import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-19.jpg";
import image20 from "@/images/image-20.jpg";
import image21 from "@/images/image-21.jpg";
import image22 from "@/images/image-22.jpg";
import image23 from "@/images/image-23.jpg";
import image24 from "@/images/image-24.png";
import image25 from "@/images/image-25.png";
import { Slider1 } from "@/components/Slider/slider-1.js";

export function ArticleGroup7() {

    return (
        <>
            <section className="section-article-group-7">
                <div className="container">
                    <h2 className="section-title">المجتمع</h2>
                    <div className="tier-1">
                        <div className="featured-article">
                            <div className="match-result">
                                <div>
                                    <Image 
                                        src={image25}
                                        alt=""
                                    />
                                    <span>CAD</span>
                                </div>
                                <div className="goals">
                                    1 - 3
                                </div>
                                <div>
                                    <span>RMA</span>
                                    <Image 
                                        src={image24}
                                        alt=""
                                    />
                                </div>
                            </div>
                            
                            <Slider1 />

                            <div className="article-category">
                                <Link href="#">دوري أبطال أوروبا UEFA / نصف النهائي / الجولة 2 من 2</Link>
                            </div>
                            <h3><Link href="#">أزياء التتويج: الملكة كاميلا والأميرة كاثرين والملابس المليئة بالمعنى</Link></h3>
                            <p>يمكن لأحذية الجري الجيدة أن تحدث فرقًا بين الركض المحقق والرفض. سيكون لديك أحذية تضع الأساس لملاحقة مريحة ومجزية ودائمة</p>
                        </div>
                        <div className="small-articles">
                            <div className="article-item">
                                <div className="article-category">
                                    <Link href="#">شراكة استراتيجية</Link>
                                </div>
                                <h4>
                                    <Link href="/">
                                        قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                    </Link>
                                </h4>
                                <ImageWithCaption
                                    src={image22}
                                    width={420}
                                    height={250}
                                    copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                                />
                            </div>
                            <div className="article-item">
                                <ImageWithCaption
                                    src={image23}
                                    width={420}
                                    height={250}
                                    copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                                />
                                <div className="article-category">
                                    <Link href="#">شراكة استراتيجية</Link>
                                </div>
                                <h4>
                                    <Link href="/">
                                        قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                    </Link>
                                </h4>
                            </div>
                            <div className="article-item">
                                <div className="article-category">
                                    <Link href="#">شراكة استراتيجية</Link>
                                </div>
                                <h4>
                                    <Link href="/">
                                        إعادة التفكير في التوظيف: مؤسس NoBueno كريستيان عيد حول سبب إطلاقه لمشروعه الجديد في الإمارات العربية المتحدة
                                    </Link>
                                </h4>
                                <p>
                                    أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="tier-2">
                        <div className="article-item">
                            <div className="article-category live-top">
                                <LiveSign />
                                تغير المناخ
                            </div>{" "}
                            <h4>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام
                                    2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h4>
                            <ImageWithCaption
                                src={image20}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                                isLive
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h4>
                            <ImageWithCaption
                                src={image21}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                    إعادة التفكير في التوظيف: مؤسس NoBueno كريستيان عيد حول سبب إطلاقه لمشروعه الجديد في الإمارات العربية المتحدة
                                </Link>
                            </h4>
                            <p>
                                أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف بشأن دعم الولايات المتحدة مع اقتراب الانتخابات الرئاسية
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
