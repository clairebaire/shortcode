import { forms } from './forms/index';
import { dom } from './dom/index';
import { shortcode } from './utils/construct';

const scripts = {
    dom,
    forms
};

if (window) {
    (window as any).sc = { shortcode, ...scripts };
}

export default scripts;