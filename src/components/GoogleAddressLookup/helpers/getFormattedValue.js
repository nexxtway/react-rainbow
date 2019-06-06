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
            (prev, currentMatch, index) => {
                const matchedTerm = prev.head.slice(
                    currentMatch.offset,
                    currentMatch.offset + currentMatch.length,
                );
                const initialPart = prev.head.slice(0, currentMatch.offset);
                const finalPart = prev.head.slice(currentMatch.offset + currentMatch.length);

                if (index > 0) {
                    return {
                        head: initialPart,
                        tail: (
                            <React.Fragment>
                                <b>{matchedTerm}</b>
                                {finalPart}
                                {prev.tail}
                            </React.Fragment>
                        ),
                    };
                }

                return (
                    <span>
                        {initialPart}
                        <b>{matchedTerm}</b>
                        {finalPart}
                        {prev.tail}
                    </span>
                );
            },
            {
                head: value.structured_formatting.main_text,
                fullText: value.structured_formatting.main_text,
                tail: '',
            },
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
