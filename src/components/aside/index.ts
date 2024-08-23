import './style.css'
import { createElement } from '../../utils/createElement';

export class Aside {
    private element: HTMLElement | null = null;

    getTemplate(): string {
        return `
            <aside class="aside" id="aside">
            </aside>
        `
    }

    getElement(): HTMLElement {
        if (!this.element) {
            this.element = createElement(this.getTemplate())
        }

        return this.element;
    }

    removeElement():void {
        this.element = null;
    }
}