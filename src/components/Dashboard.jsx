import React, {useState, useEffect} from 'react';
import Producers from './Producers';
import Topics from './Topics';
import Consumers from './Consumers';
import styled from '@emotion/styled'
import HighlighComponent from './HighlightComponent';

const Root = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
`;

const links = {
    0: {consumers: [6,7], producers: [2,3]},
    1: {consumers: [8,9], producers: [5,6]},
    2: {consumers: [1,2], producers: [7,8]},
    3: {consumers: [3,4], producers: [1,4]},
    4: {consumers: [2,8], producers: [0,1]},
    5: {consumers: [2,8], producers: [0,1]}
};

const Dashboard = (props) => {
    const [link, setLinkData] = useState(null);
    const [height, setHight] = useState(0);
    const [width, setWidth] = useState(0);

    const onHighlighTopics = (topicID) => {
        const link = links[topicID];
        setHight(window.innerHeight);
        setWidth(window.innerWidth);

        link.coordinates = {};

        link.coordinates.producers = link.producers.map(producer => {
             return document.getElementById('producers_' + producer).getBoundingClientRect();
         });

        link.coordinates.consumers = link.consumers.map(consumer => {
            return document.getElementById('consumers_' + consumer).getBoundingClientRect();
        }); 

        link.coordinates.topic = document.getElementById('topics_' + topicID).getBoundingClientRect();

        setLinkData(link);
    };

    useEffect(() => {
        document.getElementsByTagName('body')[0].addEventListener('keydown', (evt) => {
            evt.keyCode === 27 && link && setLinkData(null);
        })
    });

    return <Root>
        <Producers />
        <Topics highlightTopic={onHighlighTopics} />
        <Consumers />
        <HighlighComponent height={height} width={width} link={link} show={link ? '' : 'none'} />
    </Root>;
}

export default Dashboard;