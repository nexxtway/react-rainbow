export default function getText(files, placeholder) {
    if (!files) {
        return placeholder;
    }
    if (files.length === 0) {
        return placeholder;
    }
    if (files.length === 1) {
        return files[0].name;
    }
    return `${files.length} files`;
}
