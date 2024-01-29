import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Link from "next/link";

export function MostReadList() {
    return (
        <>
            <section className="section-most-read-list-view">
                <div className="container">
                    <div className="category-tabs">
                        <h3 className="title-wrapper">الأكثر قراءة</h3>

                        <Tabs>
                            <TabList>
                                <Tab>اليوم</Tab>
                                <Tab>الأسبوع</Tab>
                                <Tab>اليوم</Tab>
                            </TabList>

                            <TabPanel>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">ريم الكمالي</Link>
                                    </h3>
                                    <div className="article-description">
                                        طموح الفضاء اللامحدود
                                    </div>
                                </div>

                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">الدكتور سيف الجابري</Link>
                                    </h3>
                                    <div className="article-description">
                                        السرد الاستراتيجي للمؤسس «التحليل البيئي»
                                    </div>
                                </div>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">الدكتور سيف الجابري</Link>
                                    </h3>
                                    <div className="article-description">
                                        السرد الاستراتيجي للمؤسس «التحليل البيئي»
                                    </div>
                                </div>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">الدكتور سيف الجابري</Link>
                                    </h3>
                                    <div className="article-description">
                                        السرد الاستراتيجي للمؤسس «التحليل البيئي»
                                    </div>
                                </div>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">الدكتور سيف الجابري</Link>
                                    </h3>
                                    <div className="article-description">
                                        السرد الاستراتيجي للمؤسس «التحليل البيئي»
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">الدكتور سيف الجابري</Link>
                                    </h3>
                                    <div className="article-description">
                                        السرد الاستراتيجي للمؤسس «التحليل البيئي»
                                    </div>
                                </div>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">ريم الكمالي</Link>
                                    </h3>
                                    <div className="article-description">
                                        طموح الفضاء اللامحدود
                                    </div>
                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">أحمد محمد الشحي</Link>
                                    </h3>
                                    <div className="article-description">قيم حياتية مستدامة </div>
                                </div>
                                <div className="most-read-articles">
                                    <h3 className="article-title">
                                        <Link href="/">ريم الكمالي</Link>
                                    </h3>
                                    <div className="article-description">
                                        طموح الفضاء اللامحدود
                                    </div>
                                </div>
                            </TabPanel>
                        </Tabs>
                    </div>
                </div>
            </section>
        </>
    );
}
