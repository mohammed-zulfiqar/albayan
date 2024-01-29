import { MostRead } from "@/components/MostRead";
import { ArticlesWriters } from "@/components/ArticlesWriters";
import { ChosenArticles } from "@/components/ChosenArticles";
import { ArticleGroup1 } from "@/components/ArticleGroup/group-1.js";
import { ArticleGroup2 } from "@/components/ArticleGroup/group-2.js";
import { ArticleGroup3 } from "@/components/ArticleGroup/group-3.js";
import { ArticleGroup4 } from "@/components/ArticleGroup/group-4.js";
import { ArticleGroup5 } from "@/components/ArticleGroup/group-5.js";
import { ArticleGroup6 } from "@/components/ArticleGroup/group-6.js";
import { ArticleGroup7 } from "@/components/ArticleGroup/group-7.js";
import { ArticleGroup9 } from "@/components/ArticleGroup/group-9.js";

const Home = () => {
	return (
		<>
			<ArticleGroup1 />
			<div className="separator"></div>
			<ArticleGroup9 />
			<div className="separator"></div>
			<MostRead showThumbnails isNumberLeft={true} />
			<div className="separator"></div>
			<ArticleGroup2 />
			<div className="separator"></div>
			<ArticleGroup3 />
			<div className="separator"></div>
			<ArticleGroup4 />
			<div className="separator"></div>
			<ArticlesWriters isNotSectionPage={true} />
			<div className="separator"></div>
			<ArticleGroup7 />
			<div className="separator"></div>
			<ArticleGroup5 />
			<div className="separator"></div>
			<ArticleGroup6 />
			<div className="separator"></div>
			<ChosenArticles />
		</>
	);
};

export default Home;
