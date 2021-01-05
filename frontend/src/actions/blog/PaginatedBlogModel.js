export default class PaginatedBlogModel {
	constructor() {
		this.links = {
			next: null,
			previous: null
		};
		this.count = null;
		this.totalPages = null;
		this.pageNumber = null;
		this.results = [];
	}
}
