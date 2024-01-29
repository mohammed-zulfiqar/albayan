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
import image_28 from "@/images/image-28.jpg";
import imagead from "@/images/rolex.jpg";
import { LiveSign } from "../LiveSign";

export function ArticleGroup8() {

    return (
        <>
            <section className="section-article-group-8">
                <div className="container">

                    <h2 className="section-title">الاقتصاد</h2>

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

                    <div className="featured-article">
                        <div className="article-content">
                            <div className="article-category">
                                <LiveSign />
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h3><Link href="#">تقترب شركة نخيل من صفقة إعادة هيكلة ديون بقيمة 4.6 مليار دولار مع تسريع خططها للاستفادة من الطلب المتزايد على </Link></h3>
                            <ImageWithCaption
                                src={image_28}
                                width={420}
                                height={250}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                                isLive
                            />
                            <div className="article-similar">
								<ul>
									<li>
										<a href="#">
											سام التمان ، المدير التنفيذي للذكاء الاصطناعي في دائرة
											الضوء والذي يحاول التوفيق بين الترقية والقلق
										</a>
									</li>
									<li>
										<a href="#">
											سام التمان ، المدير التنفيذي للذكاء الاصطناعي في دائرة
											الضوء والذي يحاول التوفيق بين الترقية والقلق
										</a>
									</li>
								</ul>
							</div>
                        </div>
                        <div className="ad">
                            <Image
                                src={imagead}
                                alt=""
                            />
                        </div>
                    </div>

                </div>
            </section>
        </>
    );
}
