import React from 'react';

export default function getFormattedValue(value, highlightMatch, icon) {
    if (!value) return null;

    let formattedLabel;

    if (highlightMatch) {
        formattedLabel = value.structured_formatting.main_text_matched_substrings.reduceRight(
            (previousText, currentMatch) => {
                const matchedTerm = previousText.slice(currentMatch.offset, currentMatch.length);

                return value.structured_formatting.main_text.replace(
                    matchedTerm,
                    <b>{matchedTerm}</b>,
                );
            },
            value.structured_formatting.main_text,
        );
    } else {
        formattedLabel = value.description;
    }

    return {
        label: formattedLabel,
        description: value.structured_formatting.secondary_text,
        icon,
    };
}
