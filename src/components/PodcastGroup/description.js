import Image from "next/image";
import authorImage from "@/images/podcast-author.png";
import podcastIcon from "@/images/podcast-icon.png";
import { BsPlus }  from "react-icons/bs";

export function PodcastDescription() {
    return (
        <>
            <section className="section-podcast-description">
                <div className="container">
                    <div className="podcast-author">
                        <div className="right-column">
                            <h4>
                                الدكتور سيف الجابري
                            </h4>
                            <time className="post-time">
                                نشر الأربعاء، 03 مايو / أيار 2023{" "}
                            </time>
                            <div className="post-from">أبو ظبي</div>
                        </div>
                        <div className="middle-column">
                            <Image
                                src={authorImage}
                            />
                        </div>
                        <div className="left-column">
                            <div className="icon-plus">
                                <BsPlus />
                            </div>
                        </div>
                    </div>
                    <div className="podcast-channel">
                        <div className="right-column">
                            <div className="description">
                                وقت الرياضة<span>عهد أفندي</span>
                            </div>
                            <div className="podcast-icon">
                                <Image 
                                    src={podcastIcon}
                                />
                            </div>
                        </div>
                        <div className="center-column">
                            <h1>سكن وسكينة<span> لماذا نتزوج؟</span></h1>
                        </div>
                        <div className="left-column">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
