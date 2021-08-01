export const addClass = (element: HTMLElement | string, classes: string) => {
    if (element instanceof HTMLElement) {
        element.classList.add(classes);
    } else {
        let el = document.querySelector(element);
        if (el) {
            el.classList.add(classes);
        }
    }
}

export const removeClass = (element: HTMLElement | string, classes: string) => {
    if (element instanceof HTMLElement) {
        element.classList.remove(classes);
    } else {
        let el = document.querySelector(element);
        if (el) {
            el.classList.remove(classes);
        }
    }
}