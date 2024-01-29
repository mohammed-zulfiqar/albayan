import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import featuredImage from "@/images/image-19.jpg";
import image12 from "@/images/image-12.jpg";

export function ArticleGroup6() {

    return (
        <>
            <section className="section-article-group-6">
                <div className="container">
                    <h2 className="section-title">المجتمع</h2>
                    <div className="articles">
                        <div className="featured-article">
                            <div className="article-category">
                                <Link href="#">شراكة استراتيجية</Link>
                            </div>
                            <h3><Link href="#">مقاومة إيديولوجية أندرو تيت: ما يعتقده أبنائي المراهقون حقًا في موقف الرجولة السام للمؤثر السيئ السمعة</Link></h3>
                            <ImageWithCaption
                                src={featuredImage}
                                copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
                                isLive
                            />
                        </div>
                        <div className="small-articles">
                            <div className="column">
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
                            <div className="column">
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
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
