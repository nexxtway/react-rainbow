
export default function Content({ label, children }) {
    if (children.length > 0) {
        return children;
    }
    return label;
}
