
import React from 'react';

const SVGWrap: React.FC<{ children: React.ReactNode; width?: number; height?: number }> = ({ children, width = 180, height = 130 }) => (
  <svg 
    width={width} 
    height={height} 
    viewBox={`0 0 ${width} ${height}`} 
    className="inline-block align-middle ml-4 drop-shadow-sm"
    style={{ overflow: 'visible' }}
  >
    {children}
  </svg>
);

export const PerpendicularDiagram = () => (
  <SVGWrap>
    <line x1="20" y1="100" x2="150" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <text x="155" y="105" fontSize="14" fill="#1f2937" fontWeight="bold">b</text>
    <line x1="85" y1="20" x2="85" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <text x="80" y="15" fontSize="14" fill="#1f2937" fontWeight="bold">a</text>
    <rect x="85" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <circle cx="90" cy="95" r="1.5" fill="#ef4444" />
  </SVGWrap>
);

export const ParallelDiagram = () => (
  <SVGWrap>
    <line x1="20" y1="45" x2="150" y2="45" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
    <text x="155" y="50" fontSize="14" fill="#2563eb" fontWeight="bold">a</text>
    <line x1="20" y1="85" x2="150" y2="85" stroke="#2563eb" strokeWidth="2.5" strokeLinecap="round" />
    <text x="155" y="90" fontSize="14" fill="#2563eb" fontWeight="bold">b</text>
    <path d="M 80 38 L 92 45 L 80 52" fill="none" stroke="#2563eb" strokeWidth="2" />
    <path d="M 80 78 L 92 85 L 80 92" fill="none" stroke="#2563eb" strokeWidth="2" />
  </SVGWrap>
);

export const RightAngleDiagram = () => (
  <SVGWrap>
    <line x1="45" y1="100" x2="140" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="45" y1="100" x2="45" y2="20" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <rect x="45" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="75" y="75" fontSize="15" fill="#ef4444" fontWeight="bold" textAnchor="middle">α=90°</text>
  </SVGWrap>
);

export const AcuteAngleDiagram = () => (
  <SVGWrap>
    <line x1="40" y1="100" x2="140" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="40" y1="100" x2="120" y2="30" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 75 100 A 35 35 0 0 0 66.3 76.9" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="85" y="83" fontSize="16" fill="#ef4444" fontWeight="bold">α</text>
  </SVGWrap>
);

export const ObtuseAngleDiagram = () => (
  <SVGWrap>
    <line x1="80" y1="100" x2="160" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="80" y1="100" x2="20" y2="50" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 115 100 A 35 35 0 0 0 53.1 77.4" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="87" y="81" fontSize="16" fill="#ef4444" fontWeight="bold" textAnchor="middle">α</text>
  </SVGWrap>
);

export const StraightAngleDiagram = () => (
  <SVGWrap>
    <line x1="20" y1="90" x2="160" y2="90" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <circle cx="90" cy="90" r="3" fill="#1f2937" />
    <path d="M 55 90 A 35 35 0 0 1 125 90" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="90" y="45" fontSize="15" fill="#ef4444" fontWeight="bold" textAnchor="middle">α=180°</text>
  </SVGWrap>
);

export const AdjacentAnglesDiagram = () => (
  <SVGWrap>
    <line x1="20" y1="100" x2="160" y2="100" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="90" y1="100" x2="135" y2="35" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 120 100 A 30 30 0 0 0 107 75.3" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="125" y="81" fontSize="16" fill="#ef4444" fontWeight="bold">β</text>
    <path d="M 104.2 79.4 A 25 25 0 0 0 65 100" fill="none" stroke="#2563eb" strokeWidth="2.5" />
    <text x="65" y="85" fontSize="16" fill="#2563eb" fontWeight="bold" textAnchor="middle">α</text>
    <circle cx="90" cy="100" r="3.5" fill="#1f2937" />
  </SVGWrap>
);

export const VerticalAnglesDiagram: React.FC = () => (
  <SVGWrap width={160} height={120}>
    <line x1="30" y1="30" x2="130" y2="90" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="30" y1="90" x2="130" y2="30" stroke="#1f2937" strokeWidth="2.5" strokeLinecap="round" />
    <path d="M 55 60 A 25 25 0 0 1 60.3 43.6" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="43" y="60" fontSize="16" fill="#ef4444" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">1</text>
    <path d="M 105 60 A 25 25 0 0 0 99.7 43.6" fill="none" stroke="#ef4444" strokeWidth="2.5" />
    <text x="117" y="60" fontSize="16" fill="#ef4444" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">2</text>
    <circle cx="80" cy="60" r="3.5" fill="#1f2937" />
  </SVGWrap>
);

/**
 * EXPERT: Triangle Sum Diagram
 * Visualizes the theorem that the sum of angles is 180 by adding a parallel line.
 */
export const TriangleSumDiagram = () => {
  const A = { x: 95, y: 45 };
  const B = { x: 45, y: 110 };
  const C = { x: 155, y: 110 };
  
  return (
    <SVGWrap width={200} height={145}>
      {/* Parallel Auxiliary Line */}
      <line x1="25" y1="45" x2="185" y2="45" stroke="#94a3b8" strokeWidth="1.5" strokeDasharray="5,3" />
      
      {/* Triangle Path */}
      <path d={`M ${B.x} ${B.y} L ${C.x} ${C.y} L ${A.x} ${A.y} Z`} fill="#f1f5f9" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
      
      {/* Base Arcs (β and γ) */}
      <path d="M 70 110 A 25 25 0 0 0 59.3 90.5" fill="none" stroke="#ef4444" strokeWidth="2.5" />
      <text x="73" y="103" fontSize="16" fill="#ef4444" fontWeight="bold">β</text>
      
      <path d="M 130 110 A 25 25 0 0 1 140.7 90.5" fill="none" stroke="#ef4444" strokeWidth="2.5" />
      <text x="120" y="103" fontSize="16" fill="#ef4444" fontWeight="bold">γ</text>
      
      {/* Apex Arcs (α, β', γ') */}
      {/* Interior α */}
      <path d="M 110 60 A 20 20 0 0 1 80 60" fill="none" stroke="#ef4444" strokeWidth="2.5" />
      <text x="95" y="77" fontSize="16" fill="#ef4444" fontWeight="bold" textAnchor="middle">α</text>
      
      {/* Alternate Interior β' */}
      <path d="M 70 45 A 25 25 0 0 1 76.5 57.5" fill="none" stroke="#2563eb" strokeWidth="2" />
      <text x="65" y="38" fontSize="14" fill="#2563eb" fontWeight="bold">β</text>
      
      {/* Alternate Interior γ' */}
      <path d="M 113.5 57.5 A 25 25 0 0 0 120 45" fill="none" stroke="#2563eb" strokeWidth="2" />
      <text x="120" y="38" fontSize="14" fill="#2563eb" fontWeight="bold">γ</text>

      {/* Vertex Labels */}
      <text x={A.x} y={A.y - 12} fontSize="14" fill="#1e293b" fontWeight="bold" textAnchor="middle">A</text>
      <text x={B.x - 12} y={B.y + 10} fontSize="14" fill="#1e293b" fontWeight="bold" textAnchor="middle">B</text>
      <text x={C.x + 12} y={C.y + 10} fontSize="14" fill="#1e293b" fontWeight="bold" textAnchor="middle">C</text>
    </SVGWrap>
  );
};

export const TriangleDiagram = () => (
  <SVGWrap>
    <path d="M 45 100 L 145 100 L 95 30 Z" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <text x="95" y="22" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">A</text>
    <text x="35" y="112" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">B</text>
    <text x="155" y="112" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">C</text>
    <path d="M 125 100 A 20 20 0 0 0 133.4 83.7" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="122" y="93" fontSize="12" fill="#ef4444" fontWeight="bold">γ</text>
    <path d="M 65 100 A 20 20 0 0 1 56.6 83.7" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="62" y="93" fontSize="12" fill="#ef4444" fontWeight="bold">β</text>
    <path d="M 82.8 47.1 A 15 15 0 0 0 107.2 47.1" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="95" y="58" fontSize="12" fill="#ef4444" fontWeight="bold" textAnchor="middle">α</text>
  </SVGWrap>
);

export const AltitudeInsideDiagram = () => (
  <SVGWrap>
    <path d="M 35 100 L 155 100 L 105 30 Z" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="105" y1="30" x2="105" y2="100" stroke="#ef4444" strokeWidth="2.5" />
    <rect x="105" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="112" y="65" fontSize="15" fill="#ef4444" fontWeight="bold">h</text>
    <text x="95" y="118" fontSize="15" fill="#1f2937" fontWeight="bold" textAnchor="middle">a</text>
  </SVGWrap>
);

export const AltitudeOutsideDiagram = () => (
  <SVGWrap>
    <path d="M 100 100 L 165 100 L 65 40 Z" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="100" y1="100" x2="65" y2="100" stroke="#9ca3af" strokeWidth="1.5" strokeDasharray="4,2" />
    <line x1="65" y1="40" x2="65" y2="100" stroke="#ef4444" strokeWidth="2.5" />
    <rect x="65" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="50" y="70" fontSize="15" fill="#ef4444" fontWeight="bold" textAnchor="middle">h</text>
    <text x="135" y="118" fontSize="15" fill="#1f2937" fontWeight="bold" textAnchor="middle">a</text>
  </SVGWrap>
);

export const AltitudeOnSideDiagram = () => (
  <SVGWrap>
    <path d="M 55 100 L 160 100 L 55 30 Z" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="55" y1="30" x2="55" y2="100" stroke="#ef4444" strokeWidth="3" />
    <rect x="55" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1.5" />
    <text x="35" y="65" fontSize="15" fill="#ef4444" fontWeight="bold" textAnchor="middle">h</text>
    <text x="110" y="118" fontSize="15" fill="#1f2937" fontWeight="bold" textAnchor="middle">a</text>
  </SVGWrap>
);

export const TriangleAltitudeDiagram: React.FC = () => (
  <SVGWrap>
    <path d="M 30 100 L 150 100 L 110 35 Z" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="110" y1="35" x2="110" y2="100" stroke="#ef4444" strokeWidth="2" strokeDasharray="4,2" />
    {/* Fix: Changed second 'stroke' attribute to 'strokeWidth' to avoid duplicate attribute error */}
    <rect x="100" y="90" width="10" height="10" fill="none" stroke="#ef4444" strokeWidth="1" />
  </SVGWrap>
);

export const TriangleAreaDiagram = () => (
  <SVGWrap>
    <path d="M 40 100 L 140 100 L 90 40 Z" fill="#eff6ff" stroke="#1f2937" strokeWidth="2.5" strokeLinejoin="round" />
    <line x1="90" y1="40" x2="90" y2="100" stroke="#ef4444" strokeWidth="2" />
    <text x="102" y="70" fontSize="15" fill="#ef4444" fontWeight="bold">h</text>
    <text x="90" y="118" fontSize="15" fill="#1f2937" textAnchor="middle" fontWeight="bold">a</text>
  </SVGWrap>
);

export const RectangleDiagram: React.FC = () => (
  <SVGWrap>
    <rect x="40" y="40" width="110" height="65" fill="#f8fafc" stroke="#1f2937" strokeWidth="2.5" />
    <text x="30" y="32" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">A</text>
    <text x="160" y="32" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">B</text>
    <text x="160" y="122" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">C</text>
    <text x="30" y="122" fontSize="14" fill="#1f2937" fontWeight="bold" textAnchor="middle">D</text>
    <text x="95" y="35" fontSize="14" fill="#2563eb" fontWeight="bold" textAnchor="middle">a</text>
    <text x="35" y="72.5" fontSize="14" fill="#2563eb" fontWeight="bold" textAnchor="middle" dominantBaseline="middle">b</text>
    <rect x="40" y="40" width="8" height="8" fill="none" stroke="#9ca3af" strokeWidth="1" />
    <rect x="142" y="40" width="8" height="8" fill="none" stroke="#9ca3af" strokeWidth="1" />
    <rect x="40" y="97" width="8" height="8" fill="none" stroke="#9ca3af" strokeWidth="1" />
    <rect x="142" y="97" width="8" height="8" fill="none" stroke="#9ca3af" strokeWidth="1" />
  </SVGWrap>
);

export const RectangleOppositeDiagram = () => (
  <SVGWrap>
    <rect x="40" y="40" width="110" height="65" fill="none" stroke="#1f2937" strokeWidth="2.5" />
    <text x="30" y="32" fontSize="12" fill="#1f2937" textAnchor="middle">A</text>
    <text x="160" y="32" fontSize="12" fill="#1f2937" textAnchor="middle">B</text>
    <text x="160" y="122" fontSize="12" fill="#1f2937" textAnchor="middle">C</text>
    <text x="30" y="122" fontSize="12" fill="#1f2937" textAnchor="middle">D</text>
    <line x1="95" y1="32" x2="95" y2="48" stroke="#ef4444" strokeWidth="3" />
    <line x1="95" y1="97" x2="95" y2="113" stroke="#ef4444" strokeWidth="3" />
    <line x1="32" y1="68" x2="48" y2="68" stroke="#2563eb" strokeWidth="2" />
    <line x1="32" y1="74" x2="48" y2="74" stroke="#2563eb" strokeWidth="2" />
    <line x1="142" y1="68" x2="158" y2="68" stroke="#2563eb" strokeWidth="2" />
    <line x1="142" y1="74" x2="158" y2="74" stroke="#2563eb" strokeWidth="2" />
  </SVGWrap>
);

export const RectangleAdjacentDiagram = () => (
  <SVGWrap>
    <rect x="40" y="40" width="110" height="65" fill="none" stroke="#1f2937" strokeWidth="2.5" />
    <text x="30" y="32" fontSize="12" fill="#1f2937" textAnchor="middle">A</text>
    <text x="160" y="32" fontSize="12" fill="#1f2937" textAnchor="middle">B</text>
    <text x="160" y="122" fontSize="12" fill="#1f2937" textAnchor="middle">C</text>
    <text x="30" y="122" fontSize="12" fill="#1f2937" textAnchor="middle">D</text>
    <path d="M 120 40 L 150 40 L 150 70" fill="none" stroke="#ef4444" strokeWidth="5" strokeLinecap="round" />
    <circle cx="150" cy="40" r="4.5" fill="#ef4444" />
  </SVGWrap>
);

export const RectangleSidesDiagram = () => (
  <SVGWrap>
    <rect x="40" y="40" width="100" height="65" fill="none" stroke="#1f2937" strokeWidth="2.5" />
    <text x="90" y="34" fontSize="12" textAnchor="middle" fontWeight="bold">אורך (a)</text>
    <text x="32" y="72" fontSize="12" textAnchor="middle" transform="rotate(-90, 32, 72)" fontWeight="bold">רוחב (b)</text>
  </SVGWrap>
);

export const RectangleAreaFormulaDiagram = () => (
  <SVGWrap>
    <rect x="40" y="40" width="110" height="65" fill="#f0fdf4" stroke="#1f2937" strokeWidth="2.5" />
    <text x="95" y="75" fontSize="16" textAnchor="middle" fill="#166534" fontWeight="bold" dominantBaseline="middle">שטח = a × b</text>
  </SVGWrap>
);
