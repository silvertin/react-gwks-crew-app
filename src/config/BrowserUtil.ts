export const StorageUtil = {
    session: {
        getItem: (key: string) => sessionStorage.getItem(key),
        setItem: (key: string, value: string) => sessionStorage.setItem(key, value)
    },
    local: {
        getItem: (key: string) => localStorage.getItem(key),
        setItem: (key: string, value: string) => localStorage.setItem(key, value),
        getAccessToken: () => localStorage.getItem("access_token"),
        logout: () => localStorage.clear()
    }
}
