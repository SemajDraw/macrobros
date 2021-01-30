export default class PaginatedBlogModel {
	links = {
		next: null,
		previous: null
	};
	count: number;
	totalPages: number;
	pageNumber: number;
	results: [];

	constructor(
		links = {
			next: null,
			previous: null
		},
		count: number,
		totalPages: number,
		pageNumber: number,
		results: []
	) {
		this.links = links;
		this.count = count;
		this.totalPages = totalPages;
		this.pageNumber = pageNumber;
		this.results = results;
	}
}
