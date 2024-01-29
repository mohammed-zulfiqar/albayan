import Image from "next/image";
import Link from "next/link";
import mostread1 from "@/images/man-of-the-match.png";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

export function ManOfTheMatch() {
	return (
		<>
			<section className="section-man-of-the-match">
				<div className="container">
					<div className="category-tabs">
						<h3 className="title-wrapper">رجل المباراة</h3>
						<Tabs>
							<TabList>
								<Tab>اليوم</Tab>
								<Tab>الأسبوع</Tab>
								<Tab>اليوم</Tab>
							</TabList>
							<TabPanel>
								<div className="most-read-articles">
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>1</span>
										<div className="article-category">
											<Link href="/">اقتصاد الإمارات</Link>{" "}
										</div>
										<h3 className="article-title">
											<Link href="/">
												أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
												للأعمال والسياحة{" "}
											</Link>
										</h3>
										<div className="article-description">
											{" "}
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>2</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد بن
												راشد.. لم تزدها السنوات إلا تألقاً{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>3</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل الصنادل </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>4</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل قفازات الشتاء التي تعمل باللمس </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>5</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة
												لحضور COP28
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>6</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته في
												العين{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="most-read-articles">
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>1</span>
										<div className="article-category">
											<Link href="/">اقتصاد الإمارات</Link>{" "}
										</div>
										<h3 className="article-title">
											<Link href="/">
												أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
												للأعمال والسياحة{" "}
											</Link>
										</h3>
										<div className="article-description">
											{" "}
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>2</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد بن
												راشد.. لم تزدها السنوات إلا تألقاً{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>3</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل الصنادل </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>4</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل قفازات الشتاء التي تعمل باللمس </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>5</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة
												لحضور COP28
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>6</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته في
												العين{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
								</div>
							</TabPanel>
							<TabPanel>
								<div className="most-read-articles">
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>1</span>
										<div className="article-category">
											<Link href="/">اقتصاد الإمارات</Link>{" "}
										</div>
										<h3 className="article-title">
											<Link href="/">
												أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
												للأعمال والسياحة{" "}
											</Link>
										</h3>
										<div className="article-description">
											{" "}
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>2</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد بن
												راشد.. لم تزدها السنوات إلا تألقاً{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>3</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل الصنادل </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>4</span>
										<div className="article-category">
											<Link href="/">عملة مشفرة </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">أفضل قفازات الشتاء التي تعمل باللمس </Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>5</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة
												لحضور COP28
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
									</div>
									<div className="most-read-item">
										<Link href="/">
											<Image src={mostread1} alt="" />
										</Link>{" "}
										<span>6</span>
										<div className="article-category">
											<Link href="/">اخبار وتقارير </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته في
												العين{" "}
											</Link>
										</h3>
										<div className="article-description">
											فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
											الربع الأول 2023
										</div>
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
