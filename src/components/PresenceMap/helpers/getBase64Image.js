async function getImage(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = url;
    });
}

export default async function getBase64Image(srcUrl, heading) {
    const img = await getImage(srcUrl);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    canvas.width = 40;
    canvas.height = 50;
    const cache = img;
    const imageWidth = cache.width;
    const imageHeight = cache.height;
    ctx.save();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate((Math.PI / 180) * heading);
    ctx.translate(-(canvas.width / 2), -(canvas.height / 2));
    const xCenter = canvas.width / 2 - imageWidth / 2;
    const yCenter = canvas.height / 2 - imageHeight / 2;
    ctx.drawImage(img, xCenter, yCenter, imageWidth, imageHeight);
    ctx.restore();

    return canvas.toDataURL();
}
