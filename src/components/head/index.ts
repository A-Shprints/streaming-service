import "./style.css"
import { createElement } from "../../utils/createElement";

export class Head {

    private element: HTMLElement | null = null;

    getTemplate():string {
        return `
    <h2 class="tracks__h2 title__h2">Треки</h2>`
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