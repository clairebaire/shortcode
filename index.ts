import { detach, reAttach } from './dom/detach';
import { shortcode } from './utils/construct';
import { addClass, removeClass } from './dom/classes';
import { createScriptElement, createAsyncScriptElement } from './dom/createElement';

const scripts = {
    addClass,
    removeClass,
    createScriptElement,
    createAsyncScriptElement,
    detach,
    reAttach
};

if (window) {
    (window as any).sc = { shortcode, ...scripts };
}

export default scripts;