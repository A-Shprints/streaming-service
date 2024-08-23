import { createElement } from '../../utils/createElement';
import './style.css'

export class HeaderSearch {

private element: HTMLElement | null = null;

    getTemplate():string {
        return `
            <div id="header-search" class="header__search">
                <input class="header__search__field" type="search" placeholder="ЧТО БУДЕМ ИСКАТЬ?" />
            </div>`
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