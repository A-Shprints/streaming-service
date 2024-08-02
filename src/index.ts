import './style.css'
import { renderComponent } from "./renderComponent";
import { header } from "./header";
import { headerLogo } from "./header-logo";
import { headerSearch } from './header-search';
import { headerUser } from './header-user';
import { content } from './content';
import { contentAside } from './content-aside';
import { contentMain } from './content-main';
import { footer } from './footer';

document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("app");
    const position: InsertPosition = "beforeend";

    if (container) {
        renderComponent(container, header, position)
        const headerElement = document.getElementById("header")
        
        if (headerElement) {
            renderComponent(headerElement, headerLogo, position)
            renderComponent(headerElement, headerSearch, position)
            renderComponent(headerElement, headerUser, position)
            }

    renderComponent(container, content, position)
    const contentElement = document.getElementById("content")

    if (contentElement) {
        renderComponent(contentElement, contentAside, position)
        renderComponent(contentElement, contentMain, position)
    }

    renderComponent(container, footer, position)


    }
})