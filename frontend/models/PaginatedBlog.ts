import { BlogMin } from './BlogMin';

export interface PaginatedBlog {
	totalItems: number;
	totalPages: number;
	pageNumber: number;
	nextPageNumber: number;
	previousPageNumber: number;
	results: BlogMin[];
}
