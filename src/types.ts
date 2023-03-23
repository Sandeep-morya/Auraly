export interface SearchResultType {
	uploadedAt: string;
	id: string;
	tags: Tags;
	nsfw: boolean;
	private: boolean;
	description: null;
	url: string;
	unlisted: boolean;
	channel: Channel;
	thumbnail: Thumbnail;
	ratings: Ratings;
	shorts: boolean;
	title: string;
	live: boolean;
	duration_formatted: string;
	views: number;
	duration: number;
	shorts_url: string;
	type: string;
}

export interface Channel {
	name: string;
	icon: string;
	id: string;
}

export interface Ratings {
	likes: number;
	dislikes: number;
}

export interface Tags {}

export interface Thumbnail {
	url: string;
	height: number;
	id: string;
	width: number;
}
