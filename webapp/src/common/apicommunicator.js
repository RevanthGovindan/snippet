
export const postFetch = function (url, data, successCallback, errorCallback) {
    postRequest(url, data).then((response) => {
        if(successCallback){
            successCallback(response);
        }        
    }).catch((error) => {
        if(errorCallback){
            errorCallback(error);
        }        
    });
};

export const getFetch = (url, successCallback, errorCallback) => {
    getRequest(url).then((response) => {
        successCallback(response);
    }).catch((error) => {
        errorCallback(error);
    })
};

export const deleteFetch = (url, successCallback, errorCallback) => {
    deleteRequest(url).then((response) => {
        successCallback(response);
    }).catch((error) => {
        errorCallback(error);
    })
};

export const putFetch = (url, data, successCallback, errorCallback) => {
    putRequest(url, data).then((response) => {
        successCallback(response);
    }).catch((error) => {
        errorCallback(error);
    });
};


function postRequest(url, data) {
    return fetch(url, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            var error = new Error("ServiceUnavailable");
            throw error
        }
    }).then((body) => {
        return body;
    }).catch((error) => {
        return error;
    });
};

function getRequest(url) {
    return fetch(url, {
        method: 'GET',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            var error = new Error("ServiceUnavailable");
            throw error
        }
    }).then((body) => {
        return body;
    }).catch((error) => {
        return error;
    });
};

function putRequest(url, data) {
    return fetch(url, {
        method: 'PUT',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            var error = new Error("ServiceUnavailable");
            throw error
        }
    }).then((body) => {
        return body;
    }).catch((error) => {
        return error;
    });
};

function deleteRequest(url) {
    return fetch(url, {
        method: 'DELETE',
        credentials: 'include',
        headers: {
            'content-type': 'application/json'
        }
    }).then((response) => {
        if (response.status >= 200 && response.status < 300) {
            return response.json();
        } else {
            var error = new Error("ServiceUnavailable");
            throw error
        }
    }).then((body) => {
        return body;
    }).catch((error) => {
        return error;
    });
};