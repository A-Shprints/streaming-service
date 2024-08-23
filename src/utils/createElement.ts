export function createElement(template: string): HTMLElement {
    const temporaryElement = document.createElement('div');
    temporaryElement.innerHTML = template.trim(); 
    const firstChild = temporaryElement.firstElementChild;

    if (firstChild && firstChild instanceof HTMLElement) {
        return firstChild;
    } else {
        throw new Error("firstElementChild не является HTMLElement")
    }
}