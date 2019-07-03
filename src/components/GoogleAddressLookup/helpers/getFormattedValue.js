import React from 'react';

export default function getFormattedValue(value, highlightMatch, icon) {
    if (!value) return null;

    if (value && typeof value === 'string') {
        return {
            label: value,
            icon,
        };
    }

    const prediction = value.predictionInfo ? value.predictionInfo : value;

    let formattedLabel;

    if (highlightMatch) {
        formattedLabel = prediction.structured_formatting.main_text_matched_substrings.reduceRight(
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
                head: prediction.structured_formatting.main_text,
                fullText: prediction.structured_formatting.main_text,
                tail: '',
            },
        );
    } else {
        formattedLabel = prediction.description;
    }

    return {
        id: prediction.place_id,
        label: formattedLabel,
        description: prediction.structured_formatting.secondary_text,
        icon,
    };
}
