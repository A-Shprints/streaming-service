import {Track} from "../models/track"

export function createTrack(
    name: string,
    artist: string,
    album: string,
    duration: string,
    picture: string,
    isLiked: boolean,
    dateAdded: string,
): Track {
    return {name, artist, album, duration, picture, isLiked, dateAdded}
}