import React, { useState, useEffect } from 'react';
import ReactFlow from "react-flow-renderer";
import Node from './Node';
import { getInitialElements } from './initialElements';

const nodeTypes = {
    customNode: Node
};

function FlowContainer() {
    const [initialElements, setInitialElements] = useState();
    const [noOfLayers, setNoOfLayers] = useState();

    useEffect(() => {
        const noOfLayersBasedFromDB = [
            { id: 1, noOfNodes: 1 },
            { id: 2, noOfNodes: 2 },
            { id: 3, noOfNodes: 3 },
            { id: 4, noOfNodes: 3 }
        ];
        setNoOfLayers(noOfLayersBasedFromDB);
        setInitialElements(getInitialElements(noOfLayersBasedFromDB));
    }, []);

    function onLoad(reactFlowInstance) {
        reactFlowInstance.fitView()
    };

    return (
        <div className="flow-container">
            <div className="flow-border-container">
                {
                    noOfLayers && noOfLayers.map((layer, index) => (
                        <div key={index} className="flow-border-holder" style={{ height: '100px', marginTop: index > 0 ? '90px' : '' }}>
                            <div className="flow-border-content">
                                <p>Recovery Order{index + 1} ({ layer.noOfNodes })</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="flow-chart">
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
    )
}

export default FlowContainer;
