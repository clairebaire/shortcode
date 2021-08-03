export const watch = (form: HTMLFormElement | string, callback: Function) => {
    if (form instanceof HTMLFormElement) {
        prepareFormWatch(form, callback)
    } else {
        let formElement = document.querySelector(form) as HTMLFormElement;
        prepareFormWatch(formElement, callback);
    }
}

const prepareFormWatch = (form: HTMLFormElement, callback: Function) => {
    // Have to figure this out.
    // Plan:
    // - Event listeners
    // - Call the callback
}