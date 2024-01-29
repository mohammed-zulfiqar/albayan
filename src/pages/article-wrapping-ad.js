import { Article } from "@/components/Article";
import { EditorsPicks } from "@/components/EditorsPicks";
import { Event } from "@/components/Event";
import { MostRead } from "@/components/MostRead";
import { ChosenArticles } from "@/components/ChosenArticles";
import { AdBetween } from "@/components/Ads/ad-between";

const ArticlePage = () => {
	return (
		<>
			<Article
				articleId="article-wrapping-ad"
				hasFeaturedImage
				hasLatestNews
				href="/article-wrapping-ad"
			/>
			<Article
				articleId="article-2"
				hasImageOnHeader
				hasVerticalAd
				href="/article-2"
			/>
			<AdBetween />
			<Article
				articleId="article-3"
				hasImageOnHeader
				href="/article-3"
			/>
			<Article
				articleId="article-4"
				hasImageOnHeader
				href="/article-4"
			/>
			<Article
				articleId="article-5"
				hasImageOnHeader
				hasHorizontalAd
				href="/article-5"
			/>
			<MostRead showThumbnails isNumberLeft={false} />
			<Event />
			<EditorsPicks />

			<ChosenArticles />
		</>
	);
};

export default ArticlePage;
