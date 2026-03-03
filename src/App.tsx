import { useCallback, useMemo, useState } from 'react';
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
import Joyride, { CallBackProps, STATUS, Step } from 'react-joyride';
import { ChevronDown, ChevronUp } from 'lucide-react';

import FamilyNode from './components/FamilyNode';
import { initialNodes, initialEdges } from './data/familyTree';
import { getLayoutedElements } from './utils/layout';
import { ProfileProvider } from './context/ProfileContext';
import ProfileSidebar from './components/ProfileSidebar';
import { FilterProvider } from './context/FilterContext';
import FilterPanel from './components/FilterPanel';
import { cn } from './utils/cn';

const { nodes: layoutedNodes, edges: layoutedEdges } = getLayoutedElements(
  initialNodes,
  initialEdges
);

function FamilyTreeApp() {
  const [nodes, setNodes, onNodesChange] = useNodesState(layoutedNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(layoutedEdges);
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [runTour, setRunTour] = useState(() => {
    return localStorage.getItem('tourCompleted') !== 'true';
  });

  const nodeTypes = useMemo(() => ({ family: FamilyNode }), []);

  const onConnect = useCallback(
    (params: Connection | Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges]
  );

  const steps: Step[] = [
    {
      target: '.react-flow__pane',
      content: 'Kéo thả để di chuyển, cuộn chuột hoặc dùng hai ngón tay để phóng to/thu nhỏ cây gia phả.',
      disableBeacon: true,
    },
    {
      target: '.tour-panel',
      content: 'Xem chú thích màu sắc và tìm kiếm/lọc thành viên trong gia đình.',
    },
    {
      target: '.tour-node',
      content: 'Nhấn vào ảnh hoặc tên của một người để xem và chỉnh sửa hồ sơ chi tiết.',
    },
    {
      target: '.react-flow__controls',
      content: 'Sử dụng các nút này để phóng to, thu nhỏ hoặc căn giữa cây gia phả.',
    },
  ];

  const handleJoyrideCallback = (data: CallBackProps) => {
    const { status } = data;
    const finishedStatuses: string[] = [STATUS.FINISHED, STATUS.SKIPPED];

    if (finishedStatuses.includes(status)) {
      setRunTour(false);
      localStorage.setItem('tourCompleted', 'true');
    }
  };

  return (
    <div className="h-screen w-screen bg-slate-50 font-sans relative overflow-hidden">
      <Joyride
        steps={steps}
        run={runTour}
        continuous={true}
        showProgress={true}
        showSkipButton={true}
        callback={handleJoyrideCallback}
        styles={{
          options: {
            primaryColor: '#2563eb',
            zIndex: 1000,
          },
        }}
        locale={{
          back: 'Quay lại',
          close: 'Đóng',
          last: 'Hoàn thành',
          next: 'Tiếp theo',
          skip: 'Bỏ qua',
        }}
      />
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
        <Panel position="top-left" className="flex flex-col gap-2 w-[calc(100vw-32px)] sm:w-80 max-w-full tour-panel z-50">
          <div className="bg-white/90 backdrop-blur-md p-3 sm:p-4 rounded-xl shadow-sm border border-slate-200 pointer-events-auto">
            <div className="flex justify-between items-center cursor-pointer sm:cursor-default" onClick={() => setIsPanelOpen(!isPanelOpen)}>
              <h1 className="text-lg sm:text-xl font-bold text-slate-800">Cây Gia Phả</h1>
              <button className="sm:hidden p-1 rounded-md hover:bg-slate-100">
                {isPanelOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
            </div>
            
            <div className={cn("transition-all duration-300 overflow-hidden", isPanelOpen ? "max-h-96 opacity-100 mt-2 sm:mt-4" : "max-h-0 opacity-0 sm:max-h-96 sm:opacity-100 sm:mt-4")}>
              <p className="text-xs sm:text-sm text-slate-500">Nhánh Ngoại (Họ Lê & Họ Trịnh) & Nhánh Nội (Họ Nguyễn)</p>
              <div className="mt-3 flex flex-col gap-2 text-[10px] sm:text-xs text-slate-600">
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
          </div>
          <div className={cn("transition-all duration-300 overflow-hidden", isPanelOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0 sm:max-h-96 sm:opacity-100")}>
            <FilterPanel />
          </div>
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
