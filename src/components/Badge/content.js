export default function Content({ label, children }) {
    if (children !== null && children !== undefined) {
        return children;
    }
    return label;
}
