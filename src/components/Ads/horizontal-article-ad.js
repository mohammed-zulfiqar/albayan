import Image from "next/image";
import adImage from "@/images/banner-top.jpg";

export function HorizontalArticleAd() {
    return (
        <>
            <section className="section-horizontal-article-ad">
                <div className="container">
                    <Image
                        src={adImage}
                        alt=""
                    />
                </div>
            </section>
        </>
    )
}