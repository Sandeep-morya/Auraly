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

/* Single Item */

export interface SingleItem {
	status: string;
	id: string;
	title: string;
	lengthSeconds: string;
	keywords: string[];
	channelTitle: string;
	channelId: string;
	description: string;
	thumbnail: SingleThumbnail[];
	allowRatings: boolean;
	viewCount: string;
	isPrivate: boolean;
	captions?: any;
	isUnpluggedCorpus: boolean;
	isLiveContent: boolean;
	storyboards: Storyboard[];
	expiresInSeconds: string;
	formats: Format[];
	adaptiveFormats: Format[];
}

export interface Format {
	itag: number;
	url: string;
	mimeType: string;
	bitrate: number;
	width?: number;
	height?: number;
	contentLength?: string;
	quality: string;
	fps?: number;
	qualityLabel?: string;
	projectionType: string;
	averageBitrate?: number;
	approxDurationMs: string;
	highReplication?: boolean;
	audioQuality?: string;
	audioSampleRate?: string;
	audioChannels?: number;
	loudnessDb?: number;
}

export enum ProjectionType {
	Rectangular = "RECTANGULAR",
}

export enum Quality {
	Hd720 = "hd720",
	Large = "large",
	Medium = "medium",
	Small = "small",
	Tiny = "tiny",
}

export interface Storyboard {
	width: string;
	height: string;
	thumbsCount: string;
	columns: string;
	rows: string;
	interval: string;
	storyboardCount: number;
	url: string[];
}

export interface SingleThumbnail {
	url: string;
	width: number;
	height: number;
}

/* Mini media player */
export interface PlayerDataType {
	paused?: boolean;
	active?: boolean;
	muted?: boolean;
	current?: number;
}
