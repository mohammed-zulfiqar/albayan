import { Article } from "@/components/Article";
import { ArticleWithAll } from "@/components/ArticleWithAll";
import { EditorsPicks } from "@/components/EditorsPicks";
import { Event } from "@/components/Event";
import { MostRead } from "@/components/MostRead";
import { ChosenArticles } from "@/components/ChosenArticles";
import { AdBetween } from "@/components/Ads/ad-between";

const ArticlePage = () => {
	return (
		<>
			<div className="articles">
				<Article
					articleId="article"
					hasFeaturedImage
					hasLatestNews
					href="/article"
				/>
				<ArticleWithAll
					articleId="article-all"
					hasFeaturedImage
					hasLatestNews
				/>
				<Article
					articleId="article-2"
					hasImageOnHeader
					hasVerticalAd
					href="/article-2"
					hasLatestNewsVersion4
				/>
				<AdBetween />
				<Article articleId="article-3" hasImageOnHeader href="/article-3" />
				<Article articleId="article-4" hasImageOnHeader href="/article-4" />
				<Article
					articleId="article-5"
					hasImageOnHeader
					hasHorizontalAd
					href="/article-5"
				/>
			</div>

			<MostRead showThumbnails isNumberLeft={false} />

			<div className="separator"></div>

			<Event />
			<div className="separator"></div>
			<EditorsPicks />
			<div className="separator"></div>

			<ChosenArticles />
		</>
	);
};

export default ArticlePage;
