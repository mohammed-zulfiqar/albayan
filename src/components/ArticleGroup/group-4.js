import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-8.jpg";

export function ArticleGroup4() {

    return (
        <>
            <section className="section-article-group-4">
                <div className="container">
                    <h2 className="section-title">عالمنا</h2>
                    <div className="tier-1">
                        <ImageWithCaption
                            src={featuredImage}
                            copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                            isLive
                        />
                        <div className="tier-content">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h3><Link href="#">أعلنت كروب ون القابضة والإمارات لتموين الطائرات عن افتتاح كروب ون الإمارات ، أكبر مزرعة عمودية في العالم</Link></h3>
                        </div>
                    </div>
                    <div className="tier-2">
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                    قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول من عام
                                    2023 ، وبلغت المبيعات 9.2 مليار
                                </Link>
                            </h4>
                            <ImageWithCaption
                                src={featuredImage}
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
