export const setItem = (key, data) => {
    let stringData = JSON.stringify(data);
    window.localStorage.setItem(key, stringData);
};

export const getItem = (key) => {
    let data = window.localStorage.getItem(key);
    return JSON.parse(data);
};

export const clearAll = () => {
    let data = window.localStorage.clear();
    return true;
}