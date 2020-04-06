import { getHeightOfMinutes } from '.';

export default function getHeightOfDate(date) {
    return getHeightOfMinutes(date.getHours() * 60 + date.getMinutes());
}
