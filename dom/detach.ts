import { addToStorage, searchStorage } from './../utils/enablers';

export interface DetachedItem {
    element: HTMLElement;
    parent: HTMLElement;
}

/* Detach / DetachMultiple / Reattach 
 * 
 * Used to remove an HTML element from the DOM but NOT delete it from memory, so as to be reattached later.
 * 
*/

export const detach = (element: HTMLElement | string, identifier: string) => {
    if (element instanceof HTMLElement) {
        detachAndStore(identifier, element);
        element.remove()
    } else {
        let el = document.querySelector(element) as HTMLElement;
        if (el) {
            detachAndStore(identifier, el);
            el.remove();
        }
    }
}

export const detachMultiple = (selector: string, identifier: string) => {
    let candidates = document.querySelectorAll(selector);
    if (candidates) {
        let detachables = Array.from(candidates).map(item => {
            return { element: item, parent: item.parentElement }
        })

        addToStorage({ name: identifier, value: detachables })
        candidates.forEach(el => el.remove())
    }
}

export const reAttach = (identifier: string) => {
    let el = searchStorage(identifier) as DetachedItem;
    if (el) {
        if (el instanceof Array) {
            el.forEach((attachable: DetachedItem) => attachable.parent.append(attachable.element))
        } else {
            el.parent.append(el.element);
        }
    }
}

const detachAndStore = (identifier: string, element: HTMLElement) => {
    addToStorage({ name: identifier, value: { element: element, parent: element.parentElement } });
}