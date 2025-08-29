import React from "react";

function CircleDiagram({ title, segments, sla }) {
  const radius = 35;
  const strokeWidth = 8;
  const total = segments.reduce((sum, seg) => sum + seg.value, 0);
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = 2 * Math.PI * normalizedRadius;

  let offset = 0;

  const getSlaColor = () => {
    if (sla > 90) return "#21a038";
    if (sla >= 70) return "#ff9f45";
    return "#ff4545";
  };

  return (
    <div className="circle-diagram">
      <span className="circle-diagram__title">{title}</span>
      <svg width={radius * 2} height={radius * 2}>
        {total === 0 ? (
          <circle
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            fill="transparent"
            stroke="#ccc"
            strokeWidth={strokeWidth}
          />
        ) : (
          segments.map((seg, i) => {
            const valueRatio = seg.value / total;
            const dash = valueRatio * circumference;

            const segment = (
              <circle
                key={i}
                r={normalizedRadius}
                cx={radius}
                cy={radius}
                fill="transparent"
                stroke={seg.color}
                strokeWidth={strokeWidth}
                strokeDasharray={`${dash} ${circumference - dash}`}
                strokeDashoffset={offset}
                transform={`rotate(-90 ${radius} ${radius})`}
              />
            );

            offset -= dash;
            return segment;
          })
        )}

        {/* SLA в центре */}
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="14"
          fontWeight="bold"
          fill={getSlaColor()}
        >
          {sla}%
        </text>
      </svg>
    </div>
  );
}

export default CircleDiagram;
