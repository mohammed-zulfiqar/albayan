import Image from "next/image";
import { ImageWithCaption } from "@/components/ImageWithCaption";
import postimage from "@/images/post-with-image.jpg";
import articlewriter4 from "@/images/article-writer4.jpg";
import articlewriter5 from "@/images/article-writer3.jpg";
import articlewriter6 from "@/images/article-writer2.jpg";
import articlewriter7 from "@/images/article-writer1.jpg";

export function LatestNewsVersion6() {
	return (
		<>
			<div className="widget-latest-news-version6">
				<header>
					<h3> رأينا</h3>
				</header>
				<div className="post-without-image">
					<h4>رأي البيان</h4>
					<h3 className="post-title">مبادرات محمد بن راشد.. إلهام للإنسانية</h3>
				</div>
				<div className="post-with-image">
					<ImageWithCaption
						src={postimage}
						width={195}
						height={104}
						copyright="PHOTO / Suleiman Al-Khalidi / Reuters"
					/>
					<h4> مقالات</h4>
					<h3 className="post-title">فاطمة المزروعي كيف تصنع قصة نجاحك؟</h3>
				</div>
				<div className="author-articles">
					<h4>مقالات</h4>
					<h3 className="post-title">
						<span>ضياء رشوان</span> <br></br>إعادة النظر في نظرية «صدام
						الحضارات»{" "}
					</h3>
					<Image src={articlewriter7} width={40} height={30} alt="" />
				</div>
				<div className="author-articles-smaller">
					<h3 className="post-title">
						<span>ريم الكمالي </span> <br></br>طموح الفضاء اللامحدود
					</h3>
					<Image src={articlewriter4} width={40} height={30} alt="" />
				</div>
				<div className="author-articles-smaller">
					<h3 className="post-title">
						<span>الدكتور سيف الجابري </span> <br></br>الجابري السرد الاستراتيجي
						للمؤسس «التحليل
					</h3>
					<Image src={articlewriter5} width={40} height={30} alt="" />
				</div>
				<div className="author-articles-smaller">
					<h3 className="post-title">
						<span>أحمد محمد الشحي </span> <br></br>قيم حياتية مستدامة
					</h3>
					<Image src={articlewriter6} width={40} height={30} alt="" />
				</div>
			</div>
		</>
	);
}
