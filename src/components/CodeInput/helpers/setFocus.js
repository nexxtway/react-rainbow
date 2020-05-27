export default function setFocus(ref) {
    if (ref && ref.current) {
        ref.current.focus();
    }
}
