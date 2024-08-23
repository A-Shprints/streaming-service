import { createElement } from "../../utils/createElement";

export class PlaylistSection {

  private element: HTMLElement | null = null;

  getTemplate(): string {
    return `
    <section class="playlist section tabs-content" data-target="playlists" id="playlist-section">
    </section>`
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