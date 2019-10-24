import React from 'react';
import styled from '@emotion/styled';

const Root = styled.div`
    flex-grow: 1;
    margin: 0px 40px;
    // background: #d5ffc2;
`;

const Li = styled.li`
    list-style: none;
    padding: 10px;
    border-radius: 5px;
    background: #d5ffc2;
    margin-bottom: 10px;
`;

const Topics = (props) => {
    const array = [1,2,3,4,5];

    const handleTopicClick = (e) => {
        // const {links} = props;
        // console.log(links[e]);
        props.highlightTopic(e);        
    }


    return <Root>
        {
            array.map(o=> {
                return <Li id={'topics_' + o} key={o} onClick={() => handleTopicClick(o)}>Topic {o}</Li>;
            })
        }
    </Root>
}

export default Topics;