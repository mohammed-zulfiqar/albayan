import Image from "next/image";
import adImage from "@/images/banner-top.jpg";

export function TopAd() {

    return (
        <>
            <section className="section-top-ad" id="top-ad">
                <div className="container">
                    <Image
                        src={ adImage }
                        alt=""
                    />
                </div>
            </section>
        </>
    )
}