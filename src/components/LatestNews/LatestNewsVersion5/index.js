import Image from "next/image";
import newsThumbnail from "@/images/author.png";
import { LiveSign } from "@/components/LiveSign";

export function LatestNewsVersion5() {
	return (
		<>
			<div className="widget-latest-news-version5">
				<header>
					<h3>أحدث الأخبار</h3>
					<div className="updated-at">
						<span>محدث</span>
						<span>15:03hrs</span>
					</div>
				</header>
				<div className="main-post">
					<h4>روسيا</h4>
					<h3>
						أوباما من بين 500 ممنوع دخولهم روسيا انتقاما من العقوبات الأمريكية
					</h3>
					<p>
						وجاءت هذه الخطوة بسبب الرفض الأمريكي الشهر الماضي منح تأشيرات لوسائل
						إعلام مسافرة برفقة وزير الخارجية سيرجي لافروف للأمم المتحدة ، بحسب
						ما جاء في بيان
					</p>
				</div>
				<ul>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">بنمو 56.3%</a>
							</h4>
							<p>
								استقرار أسعار الذهب وسط حالة ترقب قبيل اجتماع المركزي الأمريكي{" "}
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
					<li>
						<div className="post-content">
							<h4>
								<a href="#">استقرت أسعار الذهب اليوم</a>
							</h4>
							<p>
								فلاي دبي تسجل نمواً استثنائياً وتنقل 3.37 مليون مسافر خلال الربع
								الأول 2023
							</p>
						</div>
						<div className="post-image">
							<a href="#">
								<Image src={newsThumbnail} width={70} height={70} alt="" />
							</a>
							<span className="post-time">14:14hrs</span>
						</div>
					</li>
				</ul>
			</div>
		</>
	);
}
