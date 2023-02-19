type SetStorageItem = {
    key: string;
    values: any;
    storageType: "local" | "session";
};
type GetStorageItem = { key: string; storageType: "local" | "session" };
type ClearStorageItem = { key: string; storageType: "local" | "session" };

export function storage<T>(name: string, storaType: "local" | "session" = "local") {
    const storagePrefix = `${name}:`;

    function getItem(key: string): T | null {
        const item = window[`${storaType}Storage`].getItem(
            `${storagePrefix}${key}`
        );
        if (item) {
            return JSON.parse(item);
        }
        return null;
    }

    function setItem(key: string, value: T) {
        window[`${storaType}Storage`].setItem(
            `${storagePrefix}${key}`,
            JSON.stringify(value)
        );
    }

    function removeItem(key: string) {
        window[`${storaType}Storage`].removeItem(`${storagePrefix}${key}`);
    }

    function clear() {
        window[`${storaType}Storage`].clear();
    }

    return {
        getItem,
        setItem,
        removeItem,
        clear,
    };
}

