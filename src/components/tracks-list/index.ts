import "./style.css"
import { Track } from "../../models/track";
import { renderComponent } from "../../utils/renderComponent"
import { createTrack } from "../../utils/createTrack";
import tracksListImg1 from "../../assets/img/tracks (1).jpg"
import { TracksItem } from "../tracks-item";
import { createElement } from "../../utils/createElement";

export class TracksList {

    private element: HTMLElement | null = null;

    private tracks: Track[]

    constructor(tracks: Track[]) {
        this.tracks = tracks;
    }

    static generateMockTracks(): Track[] {
      const tracks: Track[] = []
      for (let i = 0; i < 10; i++) {
          tracks.push(createTrack(
          `Track # ${i + 1}`,
          `Artist # ${i + 1}`,
          `Album # ${i + 1}`,
          TracksList.secondsToTimeString(Math.floor(Math.random()* (360 - 50 + 1)) + 50),
          tracksListImg1,
          TracksList.randomLike(),
          TracksList.getDaysElapsed(),
          ));
      }
      return tracks;
  }

    private static secondsToTimeString(seconds: number): string {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = (seconds % 60).toString().padStart(2,"0");
        return `${minutes}:${remainingSeconds}`
    }

    private static randomLike():boolean {
        return Math.random() >= 0.8
    }

    private static getDaysElapsed(): string {
        const today = new Date();
        const currentYear = today.getFullYear();
        const start = new Date(currentYear, 0, 1)
        const randomTime = start.getTime() + Math.random() * (today.getTime() - start.getTime()) 
        const randomDate = new Date(randomTime)
        today.setHours(0, 0, 0, 0)
        randomDate.setHours(0, 0, 0, 0)
      
        const timeDiff = today.getTime() - randomDate.getTime()
        const daysElapsed = timeDiff / (1000 * 60 * 60 * 24)
      
        const lastTwoDigits = daysElapsed % 100;
        const lastDigit =  daysElapsed % 10
      
        const endings = ["день назад", "дня назад", "дней назад"]
        let daysElapsedPhrase = ""
      
        if (lastTwoDigits >= 11 && lastTwoDigits <= 19) {
            daysElapsedPhrase = `${daysElapsed} ${endings[2]}`
        } else {
            switch (lastDigit) {
                case 1: daysElapsedPhrase = `${daysElapsed} ${endings[0]}`
                break;
                case 2: 
                case 3:
                case 4: daysElapsedPhrase = `${daysElapsed} ${endings[1]}` 
                break
                default: daysElapsedPhrase = `${daysElapsed} ${endings[2]}`
            }
        }
        return daysElapsedPhrase;
    }

    getTemplate() {
        return `<ul class="tracks__list" id="tracks-list"> </ul>`
    }

    getElement() {
        if (!this.element) {
            this.element = createElement(this.getTemplate())
        }

        return this.element
    }
 
    public render(): void {

        console.log("render!")

        const tracksListElement = document.getElementById("tracks-list")
          
        if (tracksListElement) {
            console.log("tracksListElement найден!")
            this.tracks.forEach((track, index) => {
                const tracksItem = new TracksItem(track, index)
                renderComponent(tracksListElement, tracksItem.getElement());
            })
        }
    }
}
