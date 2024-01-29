import { ImageWithCaption } from "../ImageWithCaption";
import Link from "next/link";
import Image from "next/image";
import { Author } from "@/components/Author";
import { SocialShares } from "@/components/SocialShares";
import image31 from "@/images/image-31.jpg";

export function PodcastGroup1() {
    return (
        <>
            <section className="section-podcast-group-1">
                <div className="container">
                    <h2 className="section-title">بثت مؤخرا</h2>
                    <div className="podcast-list">
                        <div className="item">
                            <div className="right-column">
                                <div className="author-column">
                                    <Author
                                        authorName="الدكتور سيف الجابري"
                                    />
                                </div>
                                <div className="image-column">
                                    <ImageWithCaption
                                        src={image31}
                                        isLive
                                    />
                                    <div className="time">05:50</div>
                                </div>
                            </div>
                            <div className="left-column">
                                <div className="content-column">
                                    <div className="meta">الموسم 2 / الفصل 7</div>
                                    <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                    <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف </p>
                                </div>
                                <SocialShares />
                            </div>
                        </div>
                        <div className="item">
                            <div className="right-column">
                                <div className="author-column">
                                    <Author
                                        authorName="الدكتور سيف الجابري"
                                    />
                                </div>
                                <div className="image-column">
                                    <ImageWithCaption
                                        src={image31}
                                        isLive
                                    />
                                    <div className="time">05:50</div>
                                </div>
                            </div>
                            <div className="left-column">
                                <div className="content-column">
                                    <div className="meta">الموسم 2 / الفصل 7</div>
                                    <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                    <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف </p>
                                </div>
                                <SocialShares />
                            </div>
                        </div>
                        <div className="item">
                            <div className="right-column">
                                <div className="author-column">
                                    <Author
                                        authorName="الدكتور سيف الجابري"
                                    />
                                </div>
                                <div className="image-column">
                                    <ImageWithCaption
                                        src={image31}
                                        isLive
                                    />
                                    <div className="time">05:50</div>
                                </div>
                            </div>
                            <div className="left-column">
                                <div className="content-column">
                                    <div className="meta">الموسم 2 / الفصل 7</div>
                                    <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                    <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف </p>
                                </div>
                                <SocialShares />
                            </div>
                        </div>
                        <div className="item">
                            <div className="right-column">
                                <div className="author-column">
                                    <Author
                                        authorName="الدكتور سيف الجابري"
                                    />
                                </div>
                                <div className="image-column">
                                    <ImageWithCaption
                                        src={image31}
                                        isLive
                                    />
                                    <div className="time">05:50</div>
                                </div>
                            </div>
                            <div className="left-column">
                                <div className="content-column">
                                    <div className="meta">الموسم 2 / الفصل 7</div>
                                    <h3>زمن الأولين<span> رمضان جانا</span></h3>
                                    <p>أظهرت رحلاته إلى بريطانيا وألمانيا وفرنسا وإيطاليا المشهد السياسي المتغير عندما يتعلق الأمر بدعم كييف ، حيث تتزايد المخاوف </p>
                                </div>
                                <SocialShares />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
