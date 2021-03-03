import React, { memo } from 'react';
import { Handle } from 'react-flow-renderer';
import { StopFilled20, PauseOutlineFilled20 } from '@carbon/icons-react';

function Node({ data }) {
    const { label, subLabel, handleTop, handleBottom, type } = data;

    return (
        <div>
            <div style={{ margin: '0', padding: '5px 10px', display: 'flex' }}>
                <div className="node-texts">
                    <p style={{ fontSize: '1rem', margin: '0', padding: '0' }}><strong>{label}</strong></p>
                    <p style={{ color: '#9a9a9a', fontSize: '0.8rem', margin: '0', padding: '0' }}>{subLabel}</p>
                </div>
                <div className="node-icon" style={{ marginLeft: 'auto', marginRight: 0 }}>
                    {
                        type && type === 'failed' && <StopFilled20 style={{ color: 'red' }} />
                    }
                    {
                        type && type === 'paused' && <PauseOutlineFilled20 style={{ color: 'orange' }} />
                    }
                </div>
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
