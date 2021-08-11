import { forms } from './forms/index';
import { dom } from './dom/index';
import { shortcode } from './utils/construct';

// Test commit from Github Codespaces

const scripts = {
    dom,
    forms
};

if (window) {
    (window as any).sc = { shortcode, ...scripts };
}

export default scripts;