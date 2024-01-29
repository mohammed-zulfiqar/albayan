import { ArticleGroup1 } from "@/components/ArticleGroup/group-1.js";
import { ArticleSport } from "@/components/ArticleSport";
import { Article } from "@/components/Article";

const Page = () => {
	return (
		<>
            <Article 
                hasLatestNewsVersion2
            />
            <div className="separator"></div>
            <Article 
                hasLatestNewsVersion3
            />
            <div className="separator"></div>
            <Article 
                hasLatestNewsVersion4
            />
            <div className="separator"></div>
            <Article 
                hasLatestNewsVersion5
            />
            <div className="separator"></div>
            <Article 
                hasLatestNewsVersion6
            />
		</>
	);
};

export default Page;