import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
`;

const Canvas = (props) => {
    return <Root><canvas height='100%' width='100%'></canvas></Root>
}

export default Canvas;