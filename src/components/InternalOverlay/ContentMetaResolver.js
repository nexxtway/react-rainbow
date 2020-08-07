import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';

const Container = styled.div`
    position: fixed;
    top: -3000;
    left: -3000;
`;

const ContentMetaResolver = props => {
    const { component: Content, onResolved, children } = props;
    const ref = useRef(null);
    useEffect(() => {
        const { height, width } = ref.current.getClientRects()[0];
        onResolved({ height, width });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const content = children || <Content />;
    return createPortal(<Container ref={ref}>{content}</Container>, document.body);
};

export default ContentMetaResolver;
