export default function ButtonContent({ label, children }) {
    if (children) {
        return children;
    }
    return label;
}
