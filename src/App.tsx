import { useCallback, useMemo } from 'react';
import {
  ReactFlow,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Connection,
  Edge,
  Panel,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import FamilyNode from './components/FamilyNode';
import { initialNodes, initialEdges } from './data/familyTree';
import { getLayoutedElements } from './utils/layout';
import { ProfileProvider } from './context/ProfileContext';
import ProfileSidebar from './components/ProfileSidebar';
import { FilterProvider } from './context/FilterContext';
import FilterPanel from './components/FilterPanel';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function FamilyTreeApp() {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);

  const nodeTypes = useMemo(() => ({ family: FamilyNode }), []);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  return (
    <div className="h-screen w-screen bg-slate-50 font-sans relative overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        defaultEdgeOptions={{ type: 'smoothstep', style: { strokeWidth: 2, stroke: '#94a3b8' } }}
        fitView
        minZoom={0.1}
        attributionPosition="bottom-right"
      >
        <Background color="#cbd5e1" gap={16} />
        <Controls className="bg-white shadow-md rounded-xl border-slate-200" />
        <Panel position="top-left" className="flex flex-col gap-2 sm:gap-4 max-w-[calc(100vw-1rem)] sm:max-w-sm !m-2 sm:!m-4">
          <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm border border-slate-200 pointer-events-auto">
            <h1 className="text-base sm:text-xl font-bold text-slate-800">Cây Gia Phả</h1>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5 sm:mt-1">Nhánh Ngoại (Họ Lê & Họ Trịnh) & Nhánh Nội (Họ Nguyễn)</p>
            <div className="mt-2 sm:mt-4 flex flex-col gap-1.5 sm:gap-2 text-[10px] sm:text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-rose-500"></div>
                <span>Gia đình trung tâm</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-0.5 sm:w-3 sm:h-0.5 bg-rose-500"></div>
                <span>Kết nối từ họ Trịnh</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-0.5 sm:w-3 sm:h-0.5 bg-blue-500"></div>
                <span>Kết nối từ họ Nguyễn</span>
              </div>
            </div>
          </div>
          <FilterPanel />
        </Panel>
      </ReactFlow>
      
      <ProfileSidebar />
    </div>
  );
}

export default function App() {
  return (
    <ProfileProvider>
      <FilterProvider>
        <FamilyTreeApp />
      </FilterProvider>
    </ProfileProvider>
  );
}
