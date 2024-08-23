import { createElement } from "../../utils/createElement";

export class AsideHead {
    
    private element: HTMLElement | null = null;

    getTemplate():string {
        return `
            <h2 class="visually-hidden">
                Левая панель навигации
            </h2>
        `
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