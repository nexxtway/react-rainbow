export default function getPluralization(amount) {
    const pluralRules = new Intl.PluralRules('en-US');
    const plural = pluralRules.select(amount);
    return plural === 'one' ? '' : 's';
}
