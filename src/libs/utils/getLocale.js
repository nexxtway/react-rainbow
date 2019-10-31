import getBrowserLocale from './getBrowserLocale';

export default function getLocale(context, localProp) {
    return localProp || (context && context.locale) || getBrowserLocale();
}
