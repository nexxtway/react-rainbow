export default function getLocaleFromContext(context) {
    return (context && context.locale) || undefined;
}
