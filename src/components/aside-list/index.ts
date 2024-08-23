import "./style.css"
import { createElement } from "../../utils/createElement"
import { AsideItem, tracksIcon, playlistsIcon } from "../aside-item";

export class AsideList {

    private element: HTMLElement | null = null;
    private items: AsideItem[]
    constructor(items: AsideItem[]) {
        this.items = items;
    }

    render(container: HTMLElement): void {
        this.items.forEach(item => {
            const itemElement = item.getElement();
            if (itemElement) {
                container.appendChild(itemElement)
            }
        })
    }

    getTemplate(): string {
        return `
            <ul id="aside-list" class="aside__list">
            </ul>
        `
    }

    getElement(): HTMLElement {
        if(!this.element) {
            this.element = createElement(this.getTemplate())
        }
        return this.element
    }

    removeElement(): void {
        if (this.element && this.element.parentNode) {
            this.element.parentNode.removeChild(this.element);
        }
        this.element = null;
    }
}

export function renderComponentAsideList () {

    const asideItemTracks = new AsideItem(tracksIcon, "Треки", "tracks")
    const asideItemPlaylists = new AsideItem(playlistsIcon, "Плейлисты", "playlists")
    const asideItemFavorites = new AsideItem(null, "Любимые песни", "favorites")
    const asideItemPlaylistOne = new AsideItem(null, "Плейлист № 1", "playlist-1")
    
    const asideList = new AsideList([asideItemTracks, asideItemPlaylists, asideItemFavorites, asideItemPlaylistOne])

    const asideNavElement = document.getElementById("aside-nav")

    if (!asideNavElement) {
        console.log("Компонент asideNavElement не найден")
        return
    }

    // Вставляем сам список в контейнер
    const asideListElement = asideList.getElement();
    asideNavElement.appendChild(asideListElement);

    // Рендерим пункты списка в уже добавленный контейнер
    asideList.render(asideListElement);
} 