import getHeightOfMinutes from './getHeightOfMinutes';

export default function getHeightOfDate(date) {
    const clone = new Date(date);
    return getHeightOfMinutes(clone.getHours() * 60 + clone.getMinutes());
}
