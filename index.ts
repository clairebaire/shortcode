import { dom } from './dom/index';
import { shortcode } from './utils/construct';

const scripts = {
    dom
};

if (window) {
    (window as any).sc = { shortcode, ...scripts };
}

export default scripts;