import Image from "next/image";
import Link from "next/link";
import authorImage from "@/images/author.png";

export function Author({ authorName, authorTitle }) {
	return (
		<>
			<section className="section-author">
				<Image src={authorImage} width={40} height={40} alt="" />
				<div className="author-text">
					{authorName ? (
						<h4>
							<Link href="#">{authorName}</Link>
						</h4>
					) : null}

					{authorTitle ? <h4>{authorTitle}</h4> : null}

					<time className="post-time">نشر الأربعاء، 03 مايو / أيار 2023 </time>
					<div className="post-from">أبو ظبي</div>
				</div>
			</section>
		</>
	);
}
