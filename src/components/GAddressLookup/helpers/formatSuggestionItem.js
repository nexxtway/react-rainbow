export default function formatSuggestionItem(suggestion, highlightMatch, icon) {
    let formattedLabel;

    if (highlightMatch) {
        formattedLabel = suggestion.structured_formatting.main_text_matched_substrings.reduceRight(
            (previousText, currentMatch) => {
                const matchedTerm = previousText.slice(currentMatch.offset, currentMatch.length);

                return suggestion.structured_formatting.main_text.replace(
                    matchedTerm,
                    `<b>${matchedTerm}</b>`,
                );
            },
            suggestion.structured_formatting.main_text,
        );
    } else {
        formattedLabel = suggestion.description;
    }

    return {
        label: formattedLabel,
        description: suggestion.structured_formatting.secondary_text,
        icon,
    };
}
