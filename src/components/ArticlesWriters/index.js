import Image from "next/image";
import Link from "next/link";
import articleNewsImage from "@/images/articleNewsImage.jpg";
import articleWriter1 from "@/images/article-writer1.jpg";
import articleWriter2 from "@/images/article-writer2.jpg";
import articleWriter3 from "@/images/article-writer3.jpg";
import articleWriter4 from "@/images/article-writer4.jpg";

export function ArticlesWriters() {
	return (
		<>
			<section className="section-articles-writers">
				<div className="container">
					<h2>المقالات</h2>

					<div className="article-news">
						<div className="article-news-item">
							<h6>
								<Link href="/">رأي البيان</Link>
							</h6>
							<h3>
								<Link href="/">مبادرات محمد بن راشد.. إلهام للإنسانية </Link>
							</h3>
						</div>
						<div className="article-news-item">
							<h6>
								<Link href="/">مقالات </Link>
							</h6>
							<h3>
								<Link href="/">فاطمة المزروعي كيف تصنع قصة نجاحك؟ </Link>
							</h3>
							<div className="article-news-image">
								<Link href="/">
									<Image src={articleNewsImage} alt="" />
								</Link>
							</div>
						</div>
						<div className="article-news-item">
							<h6>
								<Link href="/">مقالات</Link>
							</h6>
							<h3>
								<Link href="/">
									<span>ضياء رشوان</span>
									<br></br>
									إعادة النظر في نظرية «صدام الحضارات»
								</Link>
							</h3>
							<div className="article-news-description">
								منذ عقود طويلة احتل موضوع علاقات الحضارات والكيانات البشرية
								الكبرى مساحات واسعة من الإنتاج الفكري والبحثي في مختلف دول
								العالم
							</div>
						</div>
					</div>
					<div className="article-writers">
						<div className="writer">
							<h3 className="author">
								<Link href="/">ريم الكمالي</Link>
							</h3>
							<h3 className="article-category">
								<Link href="/"> طموح الفضاء اللامحدود</Link>
							</h3>

							<Link href="/">
								<Image src={articleWriter1} alt="" />
							</Link>
						</div>
						<div className="writer">
							<h3 className="author">
								<Link href="/">ريم الكمالي</Link>
							</h3>
							<h3 className="article-category">
								<Link href="/"> طموح الفضاء اللامحدود</Link>
							</h3>
							<Link href="/">
								<Image src={articleWriter2} alt="" />
							</Link>
						</div>
						<div className="writer">
							<h3 className="author">
								<Link href="/">ريم الكمالي</Link>
							</h3>
							<h3 className="article-category">
								<Link href="/"> طموح الفضاء اللامحدود</Link>
							</h3>
							<Link href="/">
								<Image src={articleWriter3} alt="" />
							</Link>
						</div>
						<div className="writer">
							<h3 className="author">
								<Link href="/">ريم الكمالي</Link>
							</h3>
							<h3 className="article-category">
								<Link href="/"> طموح الفضاء اللامحدود</Link>
							</h3>
							<Link href="/">
								<Image src={articleWriter4} alt="" />
							</Link>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
