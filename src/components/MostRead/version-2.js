import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Image from "next/image";
import Link from "next/link";
import mostread1 from "@/images/mostread1.png";
import mostread2 from "@/images/mostread2.png";
import mostread3 from "@/images/mostread3.png";
import mostread4 from "@/images/mostread4.png";
import mostread5 from "@/images/mostread5.png";
import mostread6 from "@/images/mostread6.png";

import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import sliderimg from "@/images/slider-img.jpg";

export function MostRead2({ showThumbnails, isNumberLeft }) {
	return (
		<>
			<section className="section-most-read-2">
				<div className="container">
					<div className="category-tabs">
						<h3 className="title-wrapper">الأكثر قراءة</h3>

						<Tabs>
							<TabList>
								<Tab>اليوم</Tab>
								<Tab>الأسبوع</Tab>
								<Tab>اليوم</Tab>
							</TabList>
							{isNumberLeft ? (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>1</span>
											</div>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">Test</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>2</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>3</span>
											</div>
											<div className="article-category">
												<Link href="/"> عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">

													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>4</span>
											</div>
											<div className="article-category">
												<Link href="/"> عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/"> أفضل الصنادل </Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>5</span>
											</div>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>6</span>
											</div>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
													للأعمال والسياحة
												</Link>
											</h3>
										</div>
									</div>
								</TabPanel>
							) : (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread6} alt="" />
													</Link>
												)}
											<span>1</span>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">Test</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread2} alt="" />
													</Link>
												)}
											<span>2</span>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread3} alt="" />
													</Link>
												)}
											<span>3</span>
											<div className="article-category">
												<Link href="/"> عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">

													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread4} alt="" />
													</Link>
												)}
											<span>4</span>
											<div className="article-category">
												<Link href="/"> عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/"> أفضل الصنادل </Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread5} alt="" />
													</Link>
												)}
											<span>5</span>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread1} alt="" />
													</Link>
												)}
											<span>6</span>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
													للأعمال والسياحة
												</Link>
											</h3>
											
										</div>
									</div>
								</TabPanel>
							)}
							{isNumberLeft ? (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>1</span>
											</div>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
													للأعمال والسياحة
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>2</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>3</span>
											</div>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">أفضل الصنادل </Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>4</span>
											</div>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>5</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة
													لحضور COP28
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>6</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
										</div>
									</div>
								</TabPanel>
							) : (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread6} alt="" />
													</Link>
												)}
											<span>1</span>
											<div className="article-category">
												<Link href="/">اقتصاد الإمارات</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أحمد بن سعيد: نسعى لتعزيز مكانة دبي مركزاً رائداً
													للأعمال والسياحة
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread2} alt="" />
													</Link>
												)}
											<span>2</span>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													حمدان بن محمد: «طيران الإمارات» كانت حلماً راود محمد
													بن راشد.. لم تزدها السنوات إلا تألقاً
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread3} alt="" />
													</Link>
												)}
											<span>3</span>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">أفضل الصنادل </Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread4} alt="" />
													</Link>
												)}
											<span>4</span>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread5} alt="" />
													</Link>
												)}
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
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread1} alt="" />
													</Link>
												)}
											<span>6</span>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
											
										</div>
									</div>
								</TabPanel>
							)}
							{isNumberLeft ? (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>1</span>
											</div>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>2</span>
											</div>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">اخبار وتقارير </Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>3</span>
											</div>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">أفضل الصنادل </Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>4</span>
											</div>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>5</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													رئيس الدولة يبعث رسالة خطية لسلطان عُمان تتضمن دعوة
													لحضور COP28
												</Link>
											</h3>
										</div>
										<div className="most-read-item">
											<div className="image-wrapper">
												{showThumbnails !== undefined &&
													showThumbnails !== null && (
														<Link href="/">
															<Image src={mostread1} alt="" />
														</Link>
													)}
												<span>6</span>
											</div>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
										</div>
									</div>
								</TabPanel>
							) : (
								<TabPanel>
									<div className="most-read-articles">
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread6} alt="" />
													</Link>
												)}
											<span>1</span>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير</Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread2} alt="" />
													</Link>
												)}
											<span>2</span>
											<div className="article-category">
												<Link href="/"> اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">اخبار وتقارير </Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread3} alt="" />
													</Link>
												)}
											<span>3</span>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">أفضل الصنادل </Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread4} alt="" />
													</Link>
												)}
											<span>4</span>
											<div className="article-category">
												<Link href="/">عملة مشفرة </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													أفضل قفازات الشتاء التي تعمل باللمس
												</Link>
											</h3>
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread5} alt="" />
													</Link>
												)}
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
											
										</div>
										<div className="most-read-item">
											{showThumbnails !== undefined &&
												showThumbnails !== null && (
													<Link href="/">
														<Image src={mostread1} alt="" />
													</Link>
												)}
											<span>6</span>
											<div className="article-category">
												<Link href="/">اخبار وتقارير </Link>
											</div>
											<h3 className="article-title">
												<Link href="/">
													«لقاء من الفضاء» يَجمَع سلطان النيادي مع أهالي مدينته
													في العين
												</Link>
											</h3>
											
										</div>
									</div>
								</TabPanel>
							)}
						</Tabs>
					</div>
				</div>
			</section>
			<section className="section-most-read-slider-mobile">
				<div className="container">
					<h3 className="heading-mobile">الأكثر قراءة</h3>
					<Swiper
						modules={[Navigation, Scrollbar, A11y]}
						slidesPerView={2}
						pagination={{ clickable: true }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
					>
						<SwiperSlide>
							<div className="most-read-item">
								{showThumbnails !== undefined && showThumbnails !== null && (
									<Link href="/">
										<Image src={mostread5} alt="" />
									</Link>
								)}
								<span>1</span>
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
									فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
									الربع الأول 2023
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="most-read-item">
								{showThumbnails !== undefined && showThumbnails !== null && (
									<Link href="/">
										<Image src={mostread4} alt="" />
									</Link>
								)}
								<span>2</span>
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
									فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
									الربع الأول 2023
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="most-read-item">
								{showThumbnails !== undefined && showThumbnails !== null && (
									<Link href="/">
										<Image src={mostread3} alt="" />
									</Link>
								)}
								<span>3</span>
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
									فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال
									الربع الأول 2023
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	);
}
