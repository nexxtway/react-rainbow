const matcher = /^#[a-f0-9]{3}([a-f0-9]{3})?$/i;

export default function isHexColor(string) {
    return matcher.test(string);
}
