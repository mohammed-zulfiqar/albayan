import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-9.jpg";
import image10 from "@/images/image-10.jpg";
import image11 from "@/images/image-11.jpg";
import image12 from "@/images/image-12.jpg";
import image13 from "@/images/image-13.jpg";
import image14 from "@/images/image-14.jpg";
import image15 from "@/images/image-15.jpg";
import image16 from "@/images/image-16.jpg";
import image17 from "@/images/image-17.jpg";
import image18 from "@/images/image-18.jpg";

export function ArticleGroup5() {

    return (
        <>
            <section className="section-article-group-5">
                <div className="container">
                    <h2 className="section-title">نمط الحياة</h2>
                    <div className="tier-1">
                        <div className="tier-content">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h3><Link href="#">أزياء التتويج: الملكة كاميلا والأميرة كاثرين والملابس المليئة بالمعنى</Link></h3>
                            <p>يمكن لأحذية الجري الجيدة أن تحدث فرقًا بين الركض المحقق والرفض. سيكون لديك أحذية تضع الأساس لملاحقة مريحة ومجزية ودائمة</p>
                        </div>
                        <ImageWithCaption
                            src={featuredImage}
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            isLive
                        />
                    </div>
                    <div className="tier-2">
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
                                src={image10}
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
                                src={featuredImage}
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
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام 2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h4>
                            <ImageWithCaption
                                src={image12}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            />
                        </div>
                    </div>
                    <div className="tier-3">
                        <div className="article-item">
                            <ImageWithCaption
                                src={image13}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                أفضل شارات iPhone للتشغيل
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <ImageWithCaption
                                src={image14}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                لماذا نحب حامل الكمبيوتر المحمول iLevel2 بتصميم Rain
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <ImageWithCaption
                                src={image15}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                أفضل قفازات الشتاء التي تعمل باللمس
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <ImageWithCaption
                                src={image16}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                لماذا نحب حامل الكمبيوتر المحمول iLevel2 بتصميم Rain
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <ImageWithCaption
                                src={image17}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                كيفية استخدام مكبرات الصوت Alexa و Echo للتحكم الصوتي بشكل أفضل
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <ImageWithCaption
                                src={image18}
                                width={420}
                                height={250}
                            />
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                استقرت أساالذهب اليوم
                                </Link>
                            </h4>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
