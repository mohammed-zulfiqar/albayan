import React, { useEffect, useState } from "react";
import Link from "next/link";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import { LatestNewsVersion5 } from "@/components/LatestNews/LatestNewsVersion5/index";
import { LiveSign } from "../LiveSign";
import featuredImage from "@/images/image-3.jpg";

export function ArticleGroup1() {
	return (
		<>
			<section className="section-article-group-1">
				<div className="container">
					<div className="grid">
						<div className="main-articles">
							<div className="article-item">
								<div className="article-category">
									<Link href="#">شراكة استراتيجية</Link>
								</div>
								<h1>
									<Link href="#">
										محمد بن زايد وماكرون يبحثان تعزيز مختلف مسارات الشراكة
										الاستراتيجية بين البلدين وفرص توسيع آفاقها{" "}
									</Link>
								</h1>
								<ul>
									<li>
										من الواضح أن هذه الزيارة لها بُعد رمزي للغاية ، فهي توضح
										الشراكة الاستراتيجية بين فرنسا
									</li>
									<li>
										وتتميز هذه الزيا بالإعلان عن ضمانات إماراتية بشأن كميات
										المحروقات التي يتم توريدها لفرنسا
									</li>
									<li>
										تسعى فرنسا إلى تنويع مصادر التوريد في سياق الصراع في
										أوكرانيا
									</li>
								</ul>
							</div>
							<div className="article-item">
								<div className="article-category">
									<LiveSign />
									<Link href="#">طبيعة</Link>
								</div>
								<h2>
									<Link href="#">
										شبه سحر: يمكن للكيميائيين الآن تحريك الذرات المفردة داخل
										وخارج نواة الجزيء ، ولماذا يجب أن تهتم بهذا الأمر
									</Link>
								</h2>
								<ImageWithCaption
									src={featuredImage}
									copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
									isLive
								/>
							</div>
						</div>
						<aside className="sidebar">
							<LatestNewsVersion5 />
						</aside>
					</div>
				</div>
			</section>
		</>
	);
}
