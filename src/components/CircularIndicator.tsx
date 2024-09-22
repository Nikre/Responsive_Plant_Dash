import React from 'react';

interface IndicatorProps {
    value: number;
    max: number;
}

const CircularIndicator = ({ value, max = 1000 }: IndicatorProps) => {
    const radius = 50;
    const externalStrokeWidt = 3
    const internalStrokeWidth = 10;
    const offset = 20;

    const rotation = (radius*2 +offset)/2;

    const normalizedRadius = radius - internalStrokeWidth / 2;
    const circumference = normalizedRadius * 2 * Math.PI;
    const strokeDashoffset = circumference - (value / max) * circumference;

    const getColor = (value: number) => {
        if (value <= 33) return '#FF0000';
        if (value <= 66) return '#FFFF00';
        return '#00FF00';
    };

    return (
        <svg height={radius * 2 + offset} width={radius * 2 + offset}>
            <circle
                stroke="#d6d6d6"
                fill="transparent"
                strokeWidth={externalStrokeWidt}
                r={normalizedRadius}
                cx="50%"
                cy="50%"
            />
            <circle
                stroke={getColor((value / max) * 100)}
                fill="transparent"
                strokeWidth={internalStrokeWidth}
                strokeDasharray={circumference + ' ' + circumference}
                strokeLinecap="round"
                style={{ strokeDashoffset }}
                r={normalizedRadius}
                cx="50%"
                cy="50%"
                transform={`rotate(-90 ${rotation} ${rotation})`}
            />
            <text
                x="50%"
                y="50%"
                textAnchor="middle"
                dy=".3em"
                fontSize="20">
                {value}
            </text>
        </svg>
    );
};

export default CircularIndicator;