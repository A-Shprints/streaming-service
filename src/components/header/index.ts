import "./style.css"
import { renderComponent } from "../../utils/renderComponent";
import { container } from "../../index";
import { createElement } from "../../utils/createElement";
import { HeaderSearch } from "../header-search";
import { HeaderUser } from "../header-user";
import { HeaderLogo } from "../header-logo";

class Header {

    private element: HTMLElement | null = null;

    getTemplate(): string {
        return `<header id="header" class="header flex"></header>`
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

export function renderComponentHeader () {
    if (!container) {
        console.log("Контейнер с id 'app' не найден");
        return
    } 
    const header = new Header
    renderComponent(container, header.getElement())
    const headerElement = document.getElementById("header")
    if (headerElement) {

        const headerLogo = new HeaderLogo()
        const headerSearch = new HeaderSearch()
        const headerUser = new HeaderUser()

        renderComponent(headerElement, headerLogo.getElement())
        renderComponent(headerElement, headerSearch.getElement())
        renderComponent(headerElement, headerUser.getElement())
    }
}