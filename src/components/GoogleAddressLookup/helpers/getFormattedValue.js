import React from 'react';

export default function getFormattedValue(value, highlightMatch, icon) {
    if (!value) return null;

    if (value && typeof value === 'string') {
        return {
            label: value,
            icon,
        };
    }

    let formattedLabel;

    if (highlightMatch) {
        formattedLabel = value.structured_formatting.main_text_matched_substrings.reduceRight(
            (previousText, currentMatch) => {
                const matchedTerm = previousText.slice(
                    currentMatch.offset,
                    currentMatch.offset + currentMatch.length,
                );
                const initialPart = previousText.slice(0, currentMatch.offset);
                const finalPart = previousText.slice(currentMatch.offset + currentMatch.length);

                return (
                    <span>
                        {initialPart}
                        <b>{matchedTerm}</b>
                        {finalPart}
                    </span>
                );
            },
            value.structured_formatting.main_text,
        );
    } else {
        formattedLabel = value.description;
    }

    return {
        id: value.place_id,
        label: formattedLabel,
        description: value.structured_formatting.secondary_text,
        icon,
    };
}
