export default function Content({ label, children }) {
    if (children) {
        return children;
    }
    return label;
}
