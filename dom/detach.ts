import { addToStorage, searchStorage } from './../utils/enablers';

export interface DetachedItem {
    element: HTMLElement;
    parent: HTMLElement;
}

export const detach = (element: HTMLElement | string, identifier: string) => {
    if (element instanceof HTMLElement) {
        addToStorage({ name: identifier, value: { element: element, parent: element.parentElement } });
        element.remove()
    } else {
        let el = document.querySelector(element);
        if (el) {
            addToStorage({ name: identifier, value: { element: el, parent: el.parentElement }  });
            el.remove();
        }
    }
}

export const reAttach = (identifier: string) => {
    let el = searchStorage(identifier) as DetachedItem;
    if (el) {
        el.parent.append(el.element);
    }
}