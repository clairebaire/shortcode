import { createScriptElement, createAsyncScriptElement } from './createElement';
import { detach, detachMultiple } from './detach';
import { addClass, removeClass } from './classes';

export const dom = {
    addClass,
    removeClass,
    detach,
    detachMultiple,
    createScriptElement,
    createAsyncScriptElement
}

export default dom;