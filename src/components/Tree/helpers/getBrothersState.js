export default function getBrothersState(parent) {
    const brothers = parent.children;
    const maxBrothersSelection = brothers.length;
    let selected = 0;
    let indeterminate = 0;

    brothers.forEach(brother => {
        if (brother.isChecked === true) {
            selected += 1;
        }
        if (brother.isChecked === 'indeterminate') {
            indeterminate += 1;
        }
    });

    if (selected === 0 && indeterminate === 0) {
        return 'none';
    }
    if (selected === maxBrothersSelection) {
        return 'all';
    }
    return 'some';
}
