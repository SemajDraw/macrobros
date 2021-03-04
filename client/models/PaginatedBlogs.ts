import { BlogMin } from './BlogMin';

export interface PaginatedBlogs {
	totalItems: number;
	totalPages: number;
	pageNumber: number;
	nextPageNumber: number;
	previousPageNumber: number;
	results: BlogMin[];
}
