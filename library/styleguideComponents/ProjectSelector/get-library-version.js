export default function getLibraryVersion(libary) {
    return fetch(libary)
        .then(response => response.json().then((res) => {
            const { content } = res;
            const packageJSON = JSON.parse(atob(content));
            return packageJSON.version;
        }));
}
