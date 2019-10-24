import React from 'react';


const Rect = props => <rect rx='5' ry='5' x='0' y ='0' width='100%' height='100%' />;

const Arrow = props => {
    return <defs>

    <marker id={props.id} viewBox='0 0 10 10' refX='0' refY='5' markerUnits='strokeWidth' markerWidth='10' markerHeight='8' orient='auto'><path className="arrows" d='M 0 0 L 10 5 L 0 10 z' fill='#000'></path> </marker>
    {/* <marker id={props.id} viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="6" markerHeight="6"
        orient="auto-start-reverse">
      <path d="M 0 0 L 10 5 L 0 10 z" />
    </marker> */}

    <marker id="dot" viewBox="0 0 10 10" refX="5" refY="5"
        markerWidth="5" markerHeight="5">
      <circle cx="5" cy="5" r="5" fill="red" />
    </marker>
  </defs>


}

const HighlighComponent = props => {
    const {height, width, show, link} = props;
    const {producers, consumers, topic} = link ? link.coordinates : {};
    console.log('show: ', show);
    const getPath = (srcRect, destRect) => {
        const x1 = srcRect.right;
        const y1 = srcRect.bottom - srcRect.height * 0.5;

        const x2 = destRect.x;
        const y2 = destRect.bottom - destRect.height * 0.5;


        var tension = 1;
        if(x1>x2){
            tension = -0.3;
        }
        var delta = (x2-x1)*tension;
        var hx1=x1+delta;
        var hy1=y1;
        var hx2=x2-delta;
        var hy2=y2;
        var path = "M "  + x1 + " " + y1 +
                   " C " + hx1 + " " + hy1
                         + " "  + hx2 + " " + hy2
                   + " " + ( x2 - 15 ) + " " + y2;
        return path;
    }

    // const getCircle = (rect) => {
    //     const diameter = rect.height / 2;
    //     const x = rect.right;
    //     const y = rect.bottom - diameter;
    //     return <circle cx={x} cy={y} r={diameter/2} fill="red" />;
    // }

    

    return (
        <svg id='highlight_svg' x='0' y='0' height={height} width={width} viewBox={'0 0 ' + width + ' ' + height} style={{display: show, left: 0, top: 0, position: 'fixed'}} xmlSpace="preserve">
            <style jsx={'true'}>{`
                .st0 {
                    opacity:0.8;fill:#FFFFFF;
                }
                .producer_svg {
                    fill: #ffc2c2;
                }
                .producer_svg path,
                .consumer_svg path {
                    fill: none;
                    stroke: #000;
                    stroke-width: 2px;
                }
                .consumer_svg {
                    fill: #c2dcff;
                }
                .topic_svg {
                    fill: #d5ffc2;
                }
                .producer_svg text,
                .consumer_svg text,
                .topic_svg text {
                    fill: #000;
                }
                .arrows {
                    stroke: none !important;
                    fill: red !important;
                }
            `}
            </style>
            <rect y="0" className="st0" width={width} height={height}/>
            { producers && producers.map((producer, index) => {
                return <g className={'producer_svg'} key={'producer_svg' + index}>
                <svg x={producer.x} y={producer.y} height={producer.height} width={producer.width}>
                    <Rect />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{ 'Producer ' + link.producers[index]}</text>
                </svg>
                <Arrow id={'producer_' + index} />
                <path d={getPath(producer, topic)} markerEnd={'url(#producer_' + index + ')'} markerStart='url(#dot)' />
                {/* {getCircle(producer, index)} */}
                </g>
            })}
            { consumers && consumers.map((consumer, index) => {
                return <g className={'consumer_svg'} key={'consumer_svg' + index}> <svg x={consumer.x} y ={consumer.y} width={consumer.width} height={consumer.height}><Rect />
                <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{ 'Consumer ' + link.consumers[index]}</text>
                </svg>
                <Arrow id={'consumer_' + index} />
                <path d={getPath(topic, consumer )} markerEnd={'url(#consumer_' + index + ')'} markerStart='url(#dot)'/>
                </g>
            })}

            { topic && <g>
                <svg className={'topic_svg'} x={topic.x} y={topic.y} width={topic.width} height={topic.height}>
                    <Rect />
                    <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle">{ 'topic '}</text>
                </svg>
                {/* {getCircle(topic)} */}
            </g>}
        </svg>
    )
}

export default HighlighComponent;