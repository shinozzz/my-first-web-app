/* bodyタグとheaderタグが存在しているときに動作。headerの高さ分をスクロールしたら、bodyに「fix-body」というクラス名を付与する。 */

document.addEventListener("DOMContentLoaded", function() {
    window.addEventListener("scroll", function() {
        const body = document.querySelector("body");
        const header = document.querySelector("header");

        if(body && header) {
            if (window.scrollY > header.offsetHeight) {
                body.classList.add("fix-body")
            } else {
                body.classList.remove("fix-body")
            }
        }
    })
});