import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion7 } from "@/components/LatestNews/version-7";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-19.jpg";
import image20 from "@/images/image-20.jpg";
import image21 from "@/images/image-21.jpg";
import image22 from "@/images/image-22.jpg";
import image23 from "@/images/image-23.jpg";
import image24 from "@/images/image-24.png";
import image25 from "@/images/image-25.png";
import { Slider1 } from "@/components/Slider/slider-1.js";
import { LatestNewsVersion3 } from "@/components/LatestNews/LatestNewsVersion3";

export function ArticleGroup10() {

    return (
        <>
            <section className="section-article-group-10">
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

                        <LatestNewsVersion7 />
            
                    </div>
                </div>
            </section>
        </>
    );
}
