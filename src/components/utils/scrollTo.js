export const toSection = (id) => {
    const target = document.getElementById(id)
    if (target) {
        target.scrollIntoView({
            behavior: "smooth",
            block: "start",
            inline: "nearest",
        });
    }
};