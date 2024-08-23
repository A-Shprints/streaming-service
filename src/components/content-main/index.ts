import { createElement } from "../../utils/createElement";
import "./style.css"

export class ContentMain {
    private element: HTMLElement | null = null;

    getTemplate():string {
        return `<main class="main" id="content-main">
        </main>`
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