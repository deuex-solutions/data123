import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
    max-width: 300px;
    // background: #ffc2c2;
`;

const Li = styled.li`
    list-style: none;
    padding: 10px;
    border-radius: 5px;
    background: #ffc2c2;
    margin-bottom: 10px;
`;


const Producers = (props) => {
    const array = [1,2,3,4,5,6,7,8,9];
    return <Root>
            {array.map((o, idx) => {
                return <Li id={'producers_' + o} key={o}>
                    Producer {o}
                </Li>;
            })}
    </Root>
}

export default Producers;