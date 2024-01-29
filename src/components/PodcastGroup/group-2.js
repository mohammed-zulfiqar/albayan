import { ImageWithCaption } from "../ImageWithCaption";
import Link from "next/link";
import Image from "next/image";
import { Author } from "@/components/Author";
import { SocialShares } from "@/components/SocialShares";
import image31 from "@/images/image-31.jpg";
import { PlayIcon } from "@/components/Icons/play";

export function PodcastGroup2() {
	return (
		<>
			<section className="section-podcast-group-2">
				<div className="container">
					<h2 className="section-title">مُستَحسَن</h2>
					<div className="podcast-list">
						<div className="item">
							<div className="right-column">
								<div className="author-column">
									<Author authorTitle="الفصل 1" />
								</div>
								<div className="image-column">
									<ImageWithCaption src={image31} />
									<div className="time">05:50</div>
								</div>
							</div>
							<div className="left-column">
								<div className="content-column">
									<div className="meta">العقارات</div>
									<h3>
										عبدالرحمن العور: 4% نمو عدد المنشآت والعمالة المسجلة خلال
										الربع الأول 2023
									</h3>
								</div>
								<SocialShares />
								<PlayIcon />
							</div>
						</div>
						<div className="item">
							<div className="right-column">
								<div className="author-column">
									<Author authorTitle="الفصل 1" />
								</div>
								<div className="image-column">
									<ImageWithCaption src={image31} />
									<div className="time">05:50</div>
								</div>
							</div>
							<div className="left-column">
								<div className="content-column">
									<div className="meta">العقارات</div>
									<h3>
										عبدالرحمن العور: 4% نمو عدد المنشآت والعمالة المسجلة خلال
										الربع الأول 2023
									</h3>
								</div>
								<SocialShares />
								<PlayIcon />
							</div>
						</div>
						<div className="item">
							<div className="right-column">
								<div className="author-column">
									<Author authorTitle="الفصل 1" />
								</div>
								<div className="image-column">
									<ImageWithCaption src={image31} />
									<div className="time">05:50</div>
								</div>
							</div>
							<div className="left-column">
								<div className="content-column">
									<div className="meta">العقارات</div>
									<h3>
										عبدالرحمن العور: 4% نمو عدد المنشآت والعمالة المسجلة خلال
										الربع الأول 2023
									</h3>
								</div>
								<SocialShares />
								<PlayIcon />
							</div>
						</div>
						<div className="item">
							<div className="right-column">
								<div className="author-column">
									<Author authorTitle="الفصل 1" />
								</div>
								<div className="image-column">
									<ImageWithCaption src={image31} />
									<div className="time">05:50</div>
								</div>
							</div>
							<div className="left-column">
								<div className="content-column">
									<div className="meta">العقارات</div>
									<h3>
										عبدالرحمن العور: 4% نمو عدد المنشآت والعمالة المسجلة خلال
										الربع الأول 2023
									</h3>
								</div>
								<SocialShares />
								<PlayIcon />
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
