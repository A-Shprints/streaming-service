import "./style.css"

export function createAsideItem(svgIcon: string | null, text: string, path: string): string {
    return `
        <li class="aside__item">
            <button class="aside__btn aside__tabs-btn" data-path="${path}">
                ${svgIcon ? svgIcon : ""}
                <span>${text}</span>
            </button>
        </li>`
}

// aside__btn-active 