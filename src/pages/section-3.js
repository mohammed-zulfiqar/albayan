import { ArticleOpinion } from "@/components/ArticleOpinion";
import { ArticlesWriters } from "@/components/ArticlesWriters";
import { MostRead } from "@/components/MostRead/";
import { MostReadList } from "@/components/MostReadList";

const SectionPage = () => {
	return (
		<>
			<ArticleOpinion hasAuthor={false} isNotSectionPage={false} />
			<ArticlesWriters isNotSectionPage />
			<div className="separator"></div>
			<MostReadList />
			<MostRead showThumbnails isNumberLeft={true} />
		</>
	);
};

export default SectionPage;
