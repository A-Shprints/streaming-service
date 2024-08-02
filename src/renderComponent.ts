export function renderComponent(container: HTMLElement, markup: string, position: InsertPosition): void {
    container.insertAdjacentHTML(position, markup);
}