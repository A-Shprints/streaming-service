import './assets/styles/style.css'
import { renderComponentHeader } from './components/header';
import { renderComponentContent } from './components/content';
import { renderComponentFooter } from './components/footer';

export const container = document.getElementById("app");

document.addEventListener("DOMContentLoaded", () => {
    if (container) {
        renderComponentHeader();
        renderComponentContent();
        renderComponentFooter();
    }
})