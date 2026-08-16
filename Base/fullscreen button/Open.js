document.addEventListener("DOMContentLoaded", () => {

    const button =
        document.getElementById("aboutBlankButton");

    const gameData =
        document.getElementById("gameData");

    if (!button || !gameData) {
        return;
    }

    button.addEventListener("click", () => {

        const newTab =
            window.open("about:blank", "_blank");

        if (!newTab) {
            alert("Please allow pop-ups.");
            return;
        }

        /*
         * Get the complete game HTML
         * from the template.
         */
        const html =
            gameData.innerHTML;

        newTab.document.open();

        newTab.document.write("<!DOCTYPE html>" + html);
newTab.document.close();

    });

});