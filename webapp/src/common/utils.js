export const setItem = (key, data) => {
    window.localStorage.setItem(key, data);
};

export const getItem = (key) => {
    let data = window.localStorage.getItem(key);
    return data;
};