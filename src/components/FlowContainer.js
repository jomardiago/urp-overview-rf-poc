import React, { useState, useEffect } from 'react';
import ReactFlow from "react-flow-renderer";
import Node from './Node';
import { getInitialElements } from './initialElements';
import { Application16, Archive16, WordCloud16 } from '@carbon/icons-react';

const nodeTypes = {
    customNode: Node
};

function FlowContainer() {
    const [initialElements, setInitialElements] = useState();
    const [noOfLayers, setNoOfLayers] = useState([
        { id: 1, name: 'Application', icon: 'application', noOfNodes: 1 },
        { id: 2, name: 'Web', icon: 'web', noOfNodes: 2 },
        { id: 3, name: 'Database', icon: 'archive', noOfNodes: 3 },
        { id: 4, name: 'Archive', icon: 'archive', noOfNodes: 3 }
    ]);

    useEffect(() => {
        setInitialElements(getInitialElements(noOfLayers));
    }, [noOfLayers]);

    function getIcon(icon) {
        switch (icon) {
            case 'application':
                return (<Application16 />);
            case 'archive':
                return (<Archive16 />);
            case 'web':
                return (<WordCloud16 />);
            default:
                break;
        }
    }

    function getFlowChartHeight() {
        const sizeOfBox = 100;
        const sizeOfEmptySpace = 90;
        const paddingTopBottom = 30;
        const totalSizeOfBoxes = noOfLayers.length * sizeOfBox;
        const totalSizeOfEmptySpaces = (noOfLayers.length - 1) * sizeOfEmptySpace;
        return paddingTopBottom + totalSizeOfBoxes + totalSizeOfEmptySpaces;
    }

    function getFlowChartWidth() {
        const widthOfNode = 200;
        const maximumNoOfNodes = Math.max(...noOfLayers.map(layer => (layer.noOfNodes)));
        const totalWidthOfNodes = widthOfNode * maximumNoOfNodes;
        const assumedSpaceBetween = 50;
        const totalAssumedSpaceBetween = (maximumNoOfNodes + 1) * assumedSpaceBetween;
        return totalWidthOfNodes + totalAssumedSpaceBetween;
    }

    function onLoad(reactFlowInstance) {
        reactFlowInstance.fitView()
    }

    return (
        <div className="flow-container">
            <div className="flow-border-container">
                {
                    noOfLayers && noOfLayers.map((layer, index) => (
                        <div key={index} className="flow-border-holder" style={{ height: '100px', marginTop: index > 0 ? '90px' : '' }}>
                            <div className="flow-border-content">
                                <p>{getIcon(layer.icon)} {layer.name} ({ layer.noOfNodes })</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flow-chart-container">
                <div className="flow-chart" style={{ height: getFlowChartHeight() + 'px', width: getFlowChartWidth() + 'px' }}>
                    <ReactFlow
                        elements={initialElements}
                        nodeTypes={nodeTypes}
                        onLoad={onLoad}
                        selectNodesOnDrag={false}
                        nodesDraggable={false}
                        nodesConnectable={false}
                        paneMoveable={false}
                        zoomOnScroll={false}
                        panOnScroll={false}
                        zoomOnDoubleClick={false}
                        elementsSelectable={false}
                    />
                </div>
            </div>
        </div>
    )
}

export default FlowContainer;
