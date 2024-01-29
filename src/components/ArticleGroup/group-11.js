import { ImageWithCaption } from "../ImageWithCaption";
import Link from "next/link";
import Image from "next/image";
import { Navigation, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import icon1 from "@/images/icon1.svg";
import icon2 from "@/images/icon2.svg";
import icon3 from "@/images/icon3.svg";
import article1 from "@/images/article1.png";
import article2 from "@/images/article2.png";
import article3 from "@/images/article3.png";
import article4 from "@/images/article4.png";
import article5 from "@/images/article5.png";
import article6 from "@/images/article6.png";
import article7 from "@/images/article7.png";
import article8 from "@/images/article8.png";
import article9 from "@/images/article9.png";

export function ArticleGroup11() {
	return (
		<>
			<section className="section-article-group-11">
				<div className="container">
					<h2>اخترنا لكم</h2>
					<Swiper
						modules={[Navigation, Scrollbar, A11y]}
						slidesPerView={1}
						pagination={{ clickable: true }}
						onSlideChange={() => console.log("slide change")}
						onSwiper={(swiper) => console.log(swiper)}
						breakpoints={{
							900: {
								slidesPerView: 3, // Adjust this value as needed
							},
						}}
					>
						<SwiperSlide>
							<div className="slide">
								<div className="article-item">
									<Link href="/">
										<Image src={icon1} alt="" />
									</Link>
									<div className="article-with-border-left">
										<div className="article-category">
											<a href="#"> باريس سان جرمان </a>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article1}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
                                <div className="article-item">
									<div className="article-with-border-left">
										<div className="article-category">
											<a href="#"> باريس سان جرمان </a>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article1}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slide">
								<div className="article-item">
									<Link href="/">
										<Image src={icon2} alt="" />
									</Link>
									<div className="article-with-border-left">
										<div className="article-category">
											<Link href="/">العقارات</Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article3}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
                                <div className="article-item">
									<div className="article-with-border-left">
										<div className="article-category">
											<a href="#"> باريس سان جرمان </a>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article1}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
						<SwiperSlide>
							<div className="slide">
								<div className="article-item">
									<Link href="/">
										<Image src={icon3} alt="" />
									</Link>
									<div className="article-with-border-left">
										<div className="article-category">
											<Link href="/">العقارات </Link>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article2}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
                                <div className="article-item">
									<div className="article-with-border-left">
										<div className="article-category">
											<a href="#"> باريس سان جرمان </a>
										</div>
										<h3 className="article-title">
											<Link href="/">
												قفزت أرباح إعمار 43٪ إلى 3.2 مليار درهم في الربع الأول
												من عام 2023 ، وبلغت المبيعات 9.2 مليار
											</Link>
										</h3>
										<div className="article-image">
											<Link href="/">
												<ImageWithCaption
													src={article1}
													width={420}
													height={250}
													copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	);
}
