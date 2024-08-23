import { createElement } from "../../utils/createElement";

export class TracksSection {
    
    private element: HTMLElement | null = null;

    getTemplate():string {
        return `<section class="tracks section tabs-content section--active" data-target="tracks" id="tracks-section">
        </section>`
    }

    getElement():HTMLElement {
        if (!this.element) {
            this.element = createElement(this.getTemplate())
        }
        return this.element
    }

    removeElement():void {
        this.element = null;
    }

}