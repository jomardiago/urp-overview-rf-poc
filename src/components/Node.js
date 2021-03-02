import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';

function Node({ data }) {
    const { label, subLabel, handleTop, handleBottom } = data;

    return (
        <div>
            <div style={{ margin: '0', padding: '5px 10px' }}>
                <p style={{ fontSize: '1rem', margin: '0', padding: '0' }}><strong>{label}</strong></p>
                <p style={{ color: '#9a9a9a', fontSize: '0.8rem', margin: '0', padding: '0' }}>{subLabel}</p>
            </div>
            { handleTop && (
                <Handle
                    type={handleTop.type}
                    position='top'
                    id={handleTop.id}
                />
            )}
            { handleBottom && (
                <Handle
                    type={handleBottom.type}
                    position='bottom'
                    id={handleBottom.id}
                />
            )}
        </div>
    )
}

export default memo(Node);
