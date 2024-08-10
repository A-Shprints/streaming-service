import './assets/styles/style.css'
import { renderComponent } from "./utils/renderComponent";
import { createTrack } from './utils/createTrack';
import { Track } from './models/track';
import tracksListImg1 from "./assets/img/tracks (1).jpg"
import { createTrackItem } from './components/tracks-item';
import { header } from "./components/header";
import { headerLogo } from "./components/header-logo";
import { headerSearch } from './components/header-search';
import { headerUser } from './components/header-user';
import { content } from './components/content';
import { aside } from './components/aside';
import { asideHead } from './components/aside-head';
import { asideNav } from './components/aside-nav';
import { asideList } from './components/aside-list';
import { searchBtn } from './components/search-btn';
import { createAsideItem } from './components/aside-item';
import { contentMain } from './components/content-main';
import { tracksSection } from './components/tracks-section';
import { tracksHead } from './components/tracks-head';
import { tracksContent } from './components/tracks-content';
import { tracksList } from './components/tracks-list';
import { playlistSection } from './components/playlist-section';
import { playlistHead } from './components/playlist-head';
import { playlistList } from './components/playlist-list';
import { playlistItem } from './components/playlist-item';
import { footer } from './components/footer';

function generateMockTracks(): Track[] {
    const tracks: Track[] = []
    for (let i = 0; i < 10; i++) {
        tracks.push(createTrack(
        `Track # ${i + 1}`,
        `Artist # ${i + 1}`,
        `Album # ${i + 1}`,
        secondsToTimeString(Math.floor(Math.random()* (360 - 50 + 1)) + 50),
        tracksListImg1,
        randomLike(),
        getDaysElapsed(),
        ));
    }
    return tracks;
}

function secondsToTimeString(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = (seconds % 60).toString().padStart(2,"0");
    return `${minutes}:${remainingSeconds}`
}

function randomLike():boolean {
    return Math.random() >= 0.8
}

function getDaysElapsed(): string {
    const today = new Date();
    const currentYear = today.getFullYear();
    const start = new Date(currentYear, 0, 1)
    const randomTime = start.getTime() + Math.random() * (today.getTime() - start.getTime()) 
    const randomDate = new Date(randomTime)
    today.setHours(0, 0, 0, 0)
    randomDate.setHours(0, 0, 0, 0)

    const timeDiff = today.getTime() - randomDate.getTime()
    const daysElapsed = timeDiff / (1000 * 60 * 60 * 24)

    const lastTwoDigits = daysElapsed % 100;
    const lastDigit =  daysElapsed % 10


    const endings = ["день назад", "дня назад", "дней назад"]
    let daysElapsedPhrase = ""

    if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
        daysElapsedPhrase = `${daysElapsed} ${endings[2]}`
    } else {
        switch (lastDigit) {
            case 1: daysElapsedPhrase = `${daysElapsed} ${endings[0]}`
            break;
            case 2: 
            case 3:
            case 4: daysElapsedPhrase = `${daysElapsed} ${endings[1]}` 
            break
            default: daysElapsedPhrase = `${daysElapsed} ${endings[2]}`
        }
    }

    console.log(daysElapsedPhrase)
    return daysElapsedPhrase;
}

const mockTracks = generateMockTracks();

console.log("lksdnc")

document.addEventListener("DOMContentLoaded", () => {
    const position: InsertPosition = "beforeend";
    const container = document.getElementById("app");

    if (container) {
        renderComponent(container, header, position)
        const headerElement = document.getElementById("header")
        
            if (headerElement) {
                renderComponent(headerElement, headerLogo, position)
                renderComponent(headerElement, headerSearch, position)
                renderComponent(headerElement, headerUser, position)
            }
        renderComponent(container, content, position)
        const contentElement = document.getElementById("content")
    
            if (contentElement) {
                renderComponent(contentElement, aside, position)
                const asideElement = document.getElementById("aside")

                if (asideElement) {
                    renderComponent(asideElement, asideHead, position)
                    renderComponent(asideElement, asideNav, position)
                    const asideNavElement = document.getElementById("aside-nav")

                    if (asideNavElement) {
                        renderComponent(asideNavElement, searchBtn, position)
                        renderComponent(asideNavElement, asideList, position)
                        const asideListElement = document.getElementById("aside-list")

                        if (asideListElement) {

                            const tracksIcon = '<svg width="25" height="27" viewBox="0 0 25 27" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5 22C22.433 22 24 20.433 24 18.5C24 16.567 22.433 15 20.5 15C18.567 15 17 16.567 17 18.5C17 20.433 18.567 22 20.5 22Z" stroke="#FC6D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M4.5 26C6.433 26 8 24.433 8 22.5C8 20.567 6.433 19 4.5 19C2.567 19 1 20.567 1 22.5C1 24.433 2.567 26 4.5 26Z" stroke="#FC6D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M24 7L8 11" stroke="#FC6D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> <path d="M8 22.5V5L24 1V18.5" stroke="#FC6D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/> </svg>';

                            const playlistsIcon = '<svg width="22" height="26" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M20.5185 12.1467L2.52146 1.14814C2.36988 1.0555 2.19634 1.00492 2.01872 1.00159C1.8411 0.998268 1.6658 1.04232 1.51085 1.12922C1.3559 1.21612 1.2269 1.34273 1.13711 1.49602C1.04733 1.64932 1 1.82376 1 2.00142V23.9986C1 24.1762 1.04733 24.3507 1.13711 24.504C1.2269 24.6573 1.3559 24.7839 1.51085 24.8708C1.6658 24.9577 1.8411 25.0017 2.01872 24.9984C2.19634 24.9951 2.36988 24.9445 2.52146 24.8519L20.5185 13.8533C20.6647 13.7639 20.7855 13.6386 20.8693 13.4891C20.9531 13.3397 20.9971 13.1713 20.9971 13C20.9971 12.8287 20.9531 12.6603 20.8693 12.5108C20.7855 12.3614 20.6647 12.2361 20.5185 12.1467Z" stroke="#FC6D3E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>'

                            const asideItemTracks = createAsideItem(tracksIcon, "Треки", "tracks")
                            const asideItemPlaylists = createAsideItem(playlistsIcon, "Плейлисты", "playlists")
                            const asideItemFavorites = createAsideItem(null, "Любимые песни", "favorites")
                            const asideItemPlaylist = createAsideItem(null, "Плейлист № 1", "playlist-1")

                            renderComponent(asideListElement, asideItemTracks, position)
                            renderComponent(asideListElement, asideItemPlaylists, position)
                            renderComponent(asideListElement, asideItemFavorites, position)
                            renderComponent(asideListElement, asideItemPlaylist, position)
                        }
                    }
                }

                renderComponent(contentElement, contentMain, position)
                const contentMainElement = document.getElementById("content-main")
                if (contentMainElement) {
                    renderComponent(contentMainElement, tracksSection, position)
                    const tracksSectionElement = document.getElementById("tracks-section") 
                    if (tracksSectionElement) {
                        renderComponent(tracksSectionElement, tracksHead, position)
                        renderComponent(tracksSectionElement, tracksContent, position)

                        const tracksContentElement = document.getElementById("tracks-content")

                        if (tracksContentElement) {
                            renderComponent(tracksContentElement, tracksList, position)

                            const tracksListElement = document.getElementById("tracks-list")

                            if (tracksListElement) {
                                mockTracks.forEach((track, index) => {
                                    const trackItem = createTrackItem(track, index)
                                    renderComponent(tracksListElement, trackItem, position)
                                })
                            }
                        } 

                    }
                    renderComponent(contentMainElement, playlistSection, position)

                    const playlistSectionElement = document.getElementById("playlist-section")

                    if (playlistSectionElement) {
                        renderComponent(playlistSectionElement, playlistHead, position)
                        renderComponent(playlistSectionElement, playlistList, position)

                        const playlistListElement = document.getElementById("playlist-list") 

                        if (playlistListElement) {
                            renderComponent(playlistListElement, playlistItem, position)
                        }
                    }
                }
            }

        renderComponent(container, footer, position)
    }
})