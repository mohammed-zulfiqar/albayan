import { ImageWithCaption } from "../ImageWithCaption";
import Link from "next/link";
import Image from "next/image";
import icon1 from "@/images/icon1.svg";
import icon2 from "@/images/icon2.svg";
import icon3 from "@/images/icon3.svg";
import article2 from "@/images/article2.png";

export function ChosenArticlesSmaller() {
    return (
        <>
            <section className="section-chosen-articles">
                <div className="container">
                    <h2>اخترنا لكم</h2>
                    <div className="articles-wrapper-smaller">

                        <div className="article-group">
                            <div className="group-icon">
                                <Image
                                    src={icon1} alt=""
                                />
                            </div>
                            <div className="article-item no-padding-right">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                            <div className="article-item">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                        </div>

                        <div className="article-group">
                            <div className="group-icon">
                                <Image
                                    src={icon2} alt=""
                                />
                            </div>
                            <div className="article-item">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                            <div className="article-item">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                        </div>

                        <div className="article-group">
                            <div className="group-icon">
                                <Image
                                    src={icon3} alt=""
                                />
                            </div>
                            <div className="article-item">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                            <div className="article-item no-padding-left">
                                <div className="article-image">
                                    <Link href="/">
                                        <Image src={article2} alt="" />
                                    </Link>
                                </div>
                                <div className="article-category">
                                    <Link href="/">اخبار وتقارير </Link>
                                </div>
                                <h3 className="article-title">
                                    <Link href="/">
                                        رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة لحضور
                                        COP28
                                    </Link>
                                </h3>
                                <div className="article-description">
                                    فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
                                    الأول 2023
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </section>     
        </>
    );
}