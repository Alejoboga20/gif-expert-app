export interface GifResponse {
	data: GifResponseData[];
	meta: GifResponseMeta;
	pagintation: GifResponsePagination;
}

export interface GifResponseData {
	id: string;
	title: string;
	images: {
		downsized_medium: {
			url: string;
		};
	};
}

interface GifResponseMeta {
	msg: string;
	response_id: string;
	status: number;
}

interface GifResponsePagination {
	total_count: number;
	count: number;
	offset: number;
}
