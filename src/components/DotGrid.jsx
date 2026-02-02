import React from 'react';

const DotGrid = () => {
    // 4 rows, 7 columns = 28 dots
    const rows = 4;
    const cols = 7;
    const totalDots = rows * cols;

    return (
        <div className="d-flex flex-column gap-2" style={{ width: 'fit-content' }}>
            {/* We can use a grid or just map rows/cols. 
                Using a grid is cleaner for exact alignment. */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${cols}, 1fr)`,
                gap: '10px 16px', // Adjust gap for spacing
            }}>
                {Array.from({ length: totalDots }).map((_, index) => (
                    <div
                        key={index}
                        className="bg-secondary"
                        style={{
                            width: '6px',
                            height: '6px',
                            borderRadius: '50%'
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default DotGrid;
