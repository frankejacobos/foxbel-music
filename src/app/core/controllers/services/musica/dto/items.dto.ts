interface Artist {
    id: number;
    name: string;
    picture_xl: string;
}

export interface Album {
    id: string;
    title: string;
    cover_medium: string;
    title_short: string;
    artist: Artist;
    tracks: { data: Track[]; };
    fans: number;
}

export interface Track {
    id: string;
    title: string;
    artist: Artist;
    album: Album;
    preview: string;
}

export interface queryResponse {
    data: Track[];
    error?: object
}