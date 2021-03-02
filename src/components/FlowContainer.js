import React, { useState, useEffect } from 'react';
import ReactFlow from "react-flow-renderer";
import Node from './Node';

const nodeStyle = {
    success: {
        borderTop: "1px solid green",
        borderRight: "1px solid green",
        borderBottom: "1px solid green",
        borderLeft: "5px solid green"
    },
    failed: {
        borderTop: "1px solid red",
        borderRight: "1px solid red",
        borderBottom: "1px solid red",
        borderLeft: "5px solid red"
    },
    warning: {
        borderTop: "1px solid orange",
        borderRight: "1px solid orange",
        borderBottom: "1px solid orange",
        borderLeft: "5px solid orange"
    },
    default: {
        height: '50px',
        width: '200px',
        borderRadius: '5px'
    }
};

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
        setInitialElements([
            {
                id: 'vmName1',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 1',
                    subLabel: 'Start Sequence 1',
                    handleBottom: { id: 'vmName1Bottom', type: 'source' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(1, 1), y: getYNodePosition(noOfLayersBasedFromDB.length, 1) },
                draggable: false
            },
            {
                id: 'vmName2',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 2',
                    subLabel: 'Start Sequence 2',
                    handleTop: { id: 'vmName2Top', type: 'target' },
                    handleBottom: { id: 'vmName2Bottom', type: 'source' }
                },
                style: {...nodeStyle.failed, ...nodeStyle.default},
                position: { x: getXNodePosition(2, 1), y: getYNodePosition(noOfLayersBasedFromDB.length, 2) },
                draggable: false
            },
            {
                id: 'vmName3',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 3',
                    subLabel: 'Start Sequence 3',
                    handleTop: { id: 'vmName2Top', type: 'target' },
                    handleBottom: { id: 'vmName2Bottom', type: 'source' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(2, 2), y: getYNodePosition(noOfLayersBasedFromDB.length, 2) },
                draggable: false
            },
            {
                id: 'vmName4',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 4',
                    subLabel: 'Start Sequence 4',
                    handleTop: { id: 'vmName4Top', type: 'target' },
                    handleBottom: { id: 'vmName4Bottom', type: 'source' }
                },
                style: {...nodeStyle.failed, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 1), y: getYNodePosition(noOfLayersBasedFromDB.length, 3) },
                draggable: false
            },
            {
                id: 'vmName5',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 5',
                    subLabel: 'Start Sequence 5',
                    handleTop: { id: 'vmName5Top', type: 'target' },
                    handleBottom: { id: 'vmName5Bottom', type: 'source' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 2), y: getYNodePosition(noOfLayersBasedFromDB.length, 3) },
                draggable: false
            },
            {
                id: 'vmName6',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 6',
                    subLabel: 'Start Sequence 6',
                    handleTop: { id: 'vmName6Top', type: 'target' },
                    handleBottom: { id: 'vmName6Bottom', type: 'source' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 3), y: getYNodePosition(noOfLayersBasedFromDB.length, 3) },
                draggable: false
            },
            {
                id: 'vmName7',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 7',
                    subLabel: 'Start Sequence 7',
                    handleTop: { id: 'vmName7Top', type: 'target' }
                },
                style: {...nodeStyle.warning, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 1), y: getYNodePosition(noOfLayersBasedFromDB.length, 4) },
                draggable: false
            },
            {
                id: 'vmName8',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 8',
                    subLabel: 'Start Sequence 8',
                    handleTop: { id: 'vmName8Top', type: 'target' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 2), y: getYNodePosition(noOfLayersBasedFromDB.length, 4) },
                draggable: false
            },
            {
                id: 'vmName9',
                type: 'customNode',
                className: 'dark-node',
                data: {
                    label: 'VM Name 9',
                    subLabel: 'Start Sequence 9',
                    handleTop: { id: 'vmName9Top', type: 'target' }
                },
                style: {...nodeStyle.success, ...nodeStyle.default},
                position: { x: getXNodePosition(3, 3), y: getYNodePosition(noOfLayersBasedFromDB.length, 4) },
                draggable: false
            },
            {
                id: "vmName1ToVmName2",
                source: "vmName1",
                sourceHandle: "vmName1Bottom",
                type: "smoothstep",
                target: "vmName2",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName1ToVmName3",
                source: "vmName1",
                sourceHandle: "vmName1Bottom",
                type: "smoothstep",
                target: "vmName3",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName2ToVmName4",
                source: "vmName2",
                sourceHandle: "vmName2Bottom",
                type: "smoothstep",
                target: "vmName4",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName2ToVmName5",
                source: "vmName2",
                sourceHandle: "vmName2Bottom",
                type: "smoothstep",
                target: "vmName5",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName3ToVmName5",
                source: "vmName3",
                sourceHandle: "vmName3Bottom",
                type: "smoothstep",
                target: "vmName5",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName3ToVmName6",
                source: "vmName3",
                sourceHandle: "vmName3Bottom",
                type: "smoothstep",
                target: "vmName6",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName4ToVmName7",
                source: "vmName4",
                sourceHandle: "vmName4Bottom",
                type: "smoothstep",
                target: "vmName7",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName5ToVmName7",
                source: "vmName5",
                sourceHandle: "vmName5Bottom",
                type: "smoothstep",
                target: "vmName7",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName5ToVmName9",
                source: "vmName5",
                sourceHandle: "vmName5Bottom",
                type: "smoothstep",
                target: "vmName9",
                arrowHeadType: "arrowclosed"
            },
            {
                id: "vmName6ToVmName8",
                source: "vmName6",
                sourceHandle: "vmName6Bottom",
                type: "smoothstep",
                target: "vmName8",
                arrowHeadType: "arrowclosed"
            }
        ]);
    }, []);

    function getXNodePosition(noOfNodes, nodePosition) {
        const containerSize = document.querySelector('.flow-chart').offsetWidth;
        const sizeOfNode = 200;
        const totalEmptySpaceSize = containerSize - (sizeOfNode * noOfNodes);
        const noOfEmptySpace = noOfNodes + 1;
        const emptySpaceSize = totalEmptySpaceSize / noOfEmptySpace;
        let position = 0;

        for (let i = 1; i <= nodePosition; i++ ) {
            if (i === 1) {
                position = position + emptySpaceSize;
            } else {
                position = position + sizeOfNode + emptySpaceSize;
            }
        }
        return position;
    }

    function getYNodePosition(layers, layer) {
        const containerSize = document.querySelector('.flow-chart').offsetHeight - 10;
        const sizeOfNode = 50;
        const noOfEmptySpace = layers - 1;
        const totalEmptySpaceSize = containerSize - (sizeOfNode * layers);
        const emptySpaceSize = totalEmptySpaceSize / noOfEmptySpace;
        let position = 0;

        for (let i = 1; i <= layer; i++) {
            if (i !== 1) {
                position = position + sizeOfNode + emptySpaceSize;
            }
        }

        return position;
    };

    function computeMarginTop(layers, index) {
        if (index === 0) {
            return '0px';
        } else {
            const containerSize = document.querySelector('.flow-chart').offsetHeight - 10;
            const sizeOfNode = 50;
            const noOfEmptySpace = layers.length - 1;
            const totalEmptySpaceSize = containerSize - (sizeOfNode * layers.length);
            const emptySpaceSize = totalEmptySpaceSize / noOfEmptySpace;

            return emptySpaceSize.toString() + 'px';
        }
    }

    function onLoad(reactFlowInstance) {
        reactFlowInstance.fitView()
    };

    return (
        <div className="flow-container">
            <div className="flow-title">
                {
                    noOfLayers && noOfLayers.map((layer, index) => (
                        <div className="flow-border" style={{ height: '50px', marginLeft: '20px', marginTop: computeMarginTop(noOfLayers, index) }}>
                            <p style={{ borderBottom: '1px solid black' }}><strong>Recovery Order {index + 1} ({layer.noOfNodes})</strong></p>
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
