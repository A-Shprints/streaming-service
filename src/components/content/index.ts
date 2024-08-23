import { renderComponent } from "../../utils/renderComponent";
import { container } from "../..";
import { Aside } from "../aside";
import { AsideHead } from "../aside-head";
import { AsideNav } from "../aside-nav";
import { SearchBtn } from "../search-btn";
import { renderComponentAsideList } from "../aside-list";
import { ContentMain } from "../content-main";
import { TracksSection } from "../tracks-section";
import { Head } from "../head";
import { TracksContent } from "../tracks-content";
import { TracksList } from "../tracks-list";
import { createElement } from "../../utils/createElement";
import { PlaylistSection } from "../playlist-section";

class Content {
    private element: HTMLElement | null = null;

    getTemplate(): string {
        return `
        <div id="content" class="content-wrap flex"></div>
        `;
    }

    getElement(): HTMLElement {
        if (!this.element) {
            this.element = createElement(this.getTemplate())
        }

        return this.element
    }

    removeElement():void {
        this.element = null;
    }

}

export function renderComponentContent () { 
    if (!container) {
        console.log("Контейнер с id 'app' не найден");
        return
    } 

    const content = new Content;

    renderComponent(container, content.getElement())

        const contentElement = document.getElementById("content")
    
        if (contentElement) {

            const aside = new Aside

            renderComponent(contentElement, aside.getElement())
            const asideElement = document.getElementById("aside")

            if (!asideElement) {
                console.log("Компонент asideElement не найден")
                return
            }

            const asideHead = new AsideHead

            const asideNav = new AsideNav

            renderComponent(asideElement, asideHead.getElement())
            renderComponent(asideElement, asideNav.getElement())

            const asideNavElement = document.getElementById("aside-nav")

            if (!asideNavElement) {
                console.log("Компонент asideNavElement не найден")
                return
            }

            const searchBtn = new SearchBtn

            renderComponent(asideNavElement, searchBtn.getElement())

            renderComponentAsideList()

            const contentMain = new ContentMain
                
            renderComponent(contentElement, contentMain.getElement())
            const contentMainElement = document.getElementById("content-main")

            if (contentMainElement) {
                const tracksSection = new TracksSection
                renderComponent(contentMainElement, tracksSection.getElement())
                const tracksSectionElement = document.getElementById("tracks-section")

                if (tracksSectionElement) {
                    
                    const tracksHead = new Head

                    renderComponent(tracksSectionElement, tracksHead.getElement())

                    const tracksContent = new TracksContent
                    renderComponent(tracksSectionElement, tracksContent.getElement())

                    const tracksContentElement = document.getElementById("tracks-content")

                    if (tracksContentElement) {                                      
                        const tracksList = new TracksList(TracksList.generateMockTracks());
                        renderComponent(tracksContentElement, tracksList.getElement())
                        tracksList.render();
                    } 

                }

                const playlistSection = new PlaylistSection
                renderComponent(contentMainElement, playlistSection.getElement())

                const playlistSectionElement = document.getElementById("playlist-section")

                if (playlistSectionElement) {
                    // renderComponent(playlistSectionElement, playlistHead)
                    // renderComponent(playlistSectionElement, playlistList)

                    const playlistListElement = document.getElementById("playlist-list") 

                    if (playlistListElement) {
                        // renderComponent(playlistListElement, playlistItem)
                    }
                }
            }
        }
}
