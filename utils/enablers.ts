import { shortcode } from './construct';
export interface StorageItem {
    name: string;
    value: any;
}

export const addToStorage = (item: StorageItem) => {
    let storage = (window as any).shortcode?.storage;

    storage = { storage, [item.name]: item.value };

    (window as any).shortcode.storage = storage;
}

export const deleteFromStorage = (item: string) => {
    // delete from object and add back to window.
}

export const searchStorage = (item: string): any => {
    let storage = (window as any).shortcode.storage;
    let storageObject = storage[item];
    return storageObject;
}