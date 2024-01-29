import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-7.jpg";

export function ArticleGroup3() {

    return (
        <>
            <section className="section-article-group-3">
                <div className="container">
                    <h2 className="section-title">التكنولوجيا</h2>
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
                    <div className="tier-3">
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                تعالج منصة B2B التي تتخذ من الإمارات العربية المتحدة مقراً لها Kaso أوجه القصور في المشتريات في قطاع المأكولات والمشروبات
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                يشارك رواد الأعمال المقيمون في الإمارات ما يساعدهم على الاستمرار في التركيز والكفاءة في العمل (وما لا يفعل ذلك!)
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                إطلاق أول صندوق عراق مستقل للتكنولوجيا من خلال شراكة بين البنك الإسلامي العراقي وصندوق فينشر كابيتال في سنغافورة MSA Novo
                                </Link>
                            </h4>
                        </div>
                        <div className="article-item">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h4>
                                <Link href="/">
                                كيف يمكن للشركات الصغيرة والمتوسطة في التجارة الإلكترونية مواكبة تطور سلوك المستهلك
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
