import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
    max-width: 300px;
    // background: #c2dcff;
`;

const Li = styled.li`
    list-style: none;
    padding: 10px;
    border-radius: 5px;
    background: #c2dcff;
    margin-bottom: 10px;
`;

const Consumers = (props) => {
    const array = [1,2,3,4,5,6,7,8,9];
    return <Root>
        {
            array.map( o=> {
                return <Li id={'consumers_' + o} key={o}>Consumer {o}</Li>;
            })
        }
    </Root>;
}

export default Consumers;