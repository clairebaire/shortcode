const createElement = (element: string, options: {}) => {
    let el = document.createElement(element);
    el = Object.assign(el, options);
    return el;
}

interface ScriptElementOptions {
    async?: boolean;
    defer?: boolean;
    crossorigin?: boolean;
    type?: string;
}

export const createScriptElement = (src: string, options: ScriptElementOptions) => {
    return createElement('script', { src, ...options });
}

export const createAsyncScriptElement = (src: string, options: ScriptElementOptions, callback: Function) => {
    return fetch(src).then(data => {
        callback(data);
    });
} 