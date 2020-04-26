import { useMemo } from 'react';

export default function useReduxForm(props) {
    const { error: propError, input, meta, ...rest } = props;

    const error = useMemo(() => {
        if (meta) {
            const { touched, submitFailed, error: metaError } = meta;

            if ((touched || submitFailed) && metaError) {
                return metaError;
            }
        }
        return propError;
    }, [propError, meta]);

    return {
        ...rest,
        ...input,
        error,
    };
}
