import "./style.css"
import { createElement } from "../../utils/createElement";

export class AsideNav {

    private element: HTMLElement | null = null;

    getTemplate(): string {
        return `
        <nav id="aside-nav" class="aside__nav">
        </nav>`
    }

    getElement(): HTMLElement {
        if(!this.element) {
            this.element = createElement(this.getTemplate())
        }

        return this.element
    }

    removeElement():void {
        this.element = null;
    }
}