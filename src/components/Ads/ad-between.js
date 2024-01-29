import Image from "next/image";
import adImage from "@/images/banner-top.jpg";

export function AdBetween({
    size
}) {

    return (
        <>
            <section className={`section-ad-between ${size}`}>
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