class StorageUtil<T> {
    get(key: string): T {
        const json:any = localStorage.getItem(key)
        return JSON.parse(json) as T
    }

    set(key: string, data: T) {
        localStorage.setItem(key, JSON.stringify(data))
    }
}

const Storage = new StorageUtil();
export default Storage