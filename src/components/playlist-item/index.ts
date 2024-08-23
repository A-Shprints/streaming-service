import "./style.css"

export const playlistItem = `
<li class="playlist__item">
    <picture>
        <source srcset="img/playlists__360%20(1).jpg" media="(max-width: 576px)">
        <source srcset="img/playlists__1440%20(1).jpg" media="(max-width: 1440px)"><img class="playlist__img" src="img/playlists%20(1).jpg" alt="Любимые песни">
    </picture>
    <div class="playlist__content">
        <h3 class="playlist__h3">
            <a class="playlist__h3__link" href="/">Любимые песни</a>
        </h3>
        <span class="playlist__count">58 треков</span>
    </div>
</li>
`