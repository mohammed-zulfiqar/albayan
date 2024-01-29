import { ChosenArticles } from "@/components/ChosenArticles";
import { StocksSlider } from "@/components/StocksSlider";
import { ArticleGroup3 } from "@/components/ArticleGroup/group-3.js";
import { ArticleGroup4 } from "@/components/ArticleGroup/group-4.js";
import { ArticleGroup8 } from "@/components/ArticleGroup/group-8.js";
import { EditorsPicks } from "@/components/EditorsPicks";
import { MostRead2 } from "@/components/MostRead/version-2.js";
import { Event2 } from "@/components/Event/version-2";

const SectionPage = () => {
	return (
		<>  
            <StocksSlider />
			<div className="separator"></div>
            <ArticleGroup8 />
            <EditorsPicks />
			<div className="separator"></div>
			<MostRead2 showThumbnails isNumberLeft />
            <div className="separator"></div>
			<Event2 />
			<div className="separator"></div>
			<ArticleGroup4 />
			<div className="separator"></div>
			<ArticleGroup4 />
			<div className="separator"></div>
			<ChosenArticles />
		</>
	);
};

export default SectionPage;
