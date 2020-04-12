export default function getBrothersState(parent) {
    const brothers = parent.children;
    const maxBrothersSelection = brothers.length;
    let selected = 0;

    brothers.forEach(brother => {
        if (brother.isChecked) {
            selected += 1;
        }
    });

    if (selected === 0) {
        return 'none';
    }
    if (selected === maxBrothersSelection) {
        return 'all';
    }
    return 'some';
}
