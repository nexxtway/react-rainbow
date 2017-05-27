let AVAILABLE_ICONS = {
    exe:true,
    flash:true,
    gdoc:true,
    gdocs:true,
    gform:true,
    gpres:true,
    gsheet: true,
    html: true,
    image: true,
    keynote:true,
    link:true,
    mp4:true,
    overlay: true,
    pack:true,
    pages:true,
    pdf:true,
    ppt:true,
    psd:true,
    rtf:true,
    slide:true,
    stypi:true,
    txt:true,
    unknown:true,
    video: true,
    vision:true,
    webex:true,
    word:true,
    xml:true,
    zip:true,
    rar:'pack',
    xlsm:'gsheet',
    xlsx:'gsheet',
    xlt:'gsheet',
    png: 'image'
};

export function getFileIconNameFromFile(file) {
    if (file.type) {
        let type = file.type.split('/')[0];
        let subtype = file.type.split('/')[1];
        if (subtype && AVAILABLE_ICONS[subtype]) return `doctype:${ getAvailableIconName(subtype) }`;
        if (type && AVAILABLE_ICONS[type]) return `doctype:${ getAvailableIconName(type) }`;
    }
    return 'doctype:unknown';
}

export function getFileIconNameFromUrl(url) {
    let urlParts = url.split('.');
    let ext = urlParts.length > 1 ? urlParts[urlParts.length - 1] : false;

    if (ext && AVAILABLE_ICONS[ext]) return `doctype:${ getAvailableIconName(ext) }`;
    return 'doctype:unknown';
}

function getAvailableIconName (key) {
    return typeof AVAILABLE_ICONS[key] === 'string' ? AVAILABLE_ICONS[key] : key;
}


