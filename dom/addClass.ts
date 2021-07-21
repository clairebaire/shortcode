export const addClass = (element: HTMLElement | string, classes: string | string[]) => {
    if (element instanceof HTMLElement) {
        if (classes instanceof Array) {
            element.classList.add(...classes);
        } else {
            element.classList.add(classes);
        }
    } else {
        let el = document.querySelector(element);
        if (classes instanceof Array) {
            el.classList.add(...classes);
        } else {
            el.classList.add(classes);
        }
    }
}