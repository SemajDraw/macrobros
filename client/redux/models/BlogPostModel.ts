export default class BlogPostModel {
	id: string;
	category: string;
	claps: null;
	content: null;
	dateCreated: string;
	displayChart: boolean;
	excerpt: null;
	featured: boolean;
	headerImg: string;
	icon: string;
	marketPair: string;
	popular: boolean;
	projectName: string;
	readTime: string;
	slug: string;
	summary: null;
	thumbnail: string;
	thumbnailAlt: string;
	ticker: string;
	title: string;

	constructor(
		id: string,
		category: string,
		claps: null,
		content: null,
		dateCreated: string,
		displayChart: boolean,
		excerpt: null,
		featured: boolean,
		headerImg: string,
		icon: string,
		marketPair: string,
		popular: boolean,
		projectName: string,
		readTime: string,
		slug: string,
		summary: null,
		thumbnail: string,
		thumbnailAlt: string,
		ticker: string,
		title: string
	) {
		this.id = id;
		this.category = category;
		this.claps = claps;
		this.content = content;
		this.dateCreated = dateCreated;
		this.displayChart = displayChart;
		this.excerpt = excerpt;
		this.featured = featured;
		this.headerImg = headerImg;
		this.icon = icon;
		this.marketPair = marketPair;
		this.popular = popular;
		this.projectName = projectName;
		this.readTime = readTime;
		this.slug = slug;
		this.summary = summary;
		this.thumbnail = thumbnail;
		this.thumbnailAlt = thumbnailAlt;
		this.ticker = ticker;
		this.title = title;
	}
}
