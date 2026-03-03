import { Edge, Node } from '@xyflow/react';
import { FamilyNodeData, Person } from '../components/FamilyNode';

export const initialNodes: Node<FamilyNodeData>[] = [
  // Thế hệ 1 Ngoại
  {
    id: 'n_cu_ngoai',
    type: 'family',
    data: {
      label: 'Thế hệ 1: Cụ Ngoại',
      people: [
        { id: 'le_huu_cau', name: 'Lê Hữu Cầu', role: 'Ông cố', gender: 'M' },
        { id: 'le_thi_coi', name: 'Lê Thị Cới', role: 'Bà cố', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  // Thế hệ 2 Ngoại siblings
  {
    id: 'n_chi_2_ngoai',
    type: 'family',
    data: {
      people: [{ id: 'le_thi_toi', name: 'Lê Thị Tới', role: 'Chị 2', gender: 'F' }],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_em_ut_ngoai',
    type: 'family',
    data: {
      people: [{ id: 'le_thi_lan', name: 'Lê Thị Lân', role: 'Em gái út', gender: 'F' }],
    },
    position: { x: 0, y: 0 },
  },
  // Thế hệ 2 Ngoại (Ông bà ngoại)
  {
    id: 'n_ong_ba_ngoai',
    type: 'family',
    data: {
      label: 'Thế hệ 2: Ông Bà Ngoại',
      people: [
        { id: 'trinh_dinh_cu', name: 'Trịnh Đình Cứ', role: 'Ông ngoại', gender: 'M' },
        { id: 'le_thi_chau', name: 'Lê Thị Châu', role: 'Bà ngoại', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  // Anh em ông ngoại
  {
    id: 'n_anh_em_ong_ngoai',
    type: 'family',
    data: {
      label: 'Anh chị em Ông Ngoại',
      people: [
        { id: 'trinh_thi_chuyen', name: 'Trịnh Thị Chuyên', role: 'Em', gender: 'F' },
        { id: 'trinh_dinh_huan', name: 'Trịnh Đình Huấn', role: 'Em', gender: 'M' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  // Thế hệ 3 Ngoại
  {
    id: 'n_bac_tuan',
    type: 'family',
    data: {
      people: [
        { id: 'trinh_quoc_tuan', name: 'Trịnh Quốc Tuấn', role: 'Trai cả', gender: 'M' },
        { id: 'nguyen_thi_thuy', name: 'Nguyễn Thị Thủy', role: 'Vợ', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_bac_hai',
    type: 'family',
    data: {
      people: [{ id: 'trinh_son_hai', name: 'Trịnh Sơn Hải', role: 'Anh 3', gender: 'M' }],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_bac_lan_anh',
    type: 'family',
    data: {
      people: [{ id: 'trinh_thi_lan_anh', name: 'Trịnh Thị Lan Anh', role: 'Chị 4', gender: 'F' }],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_cau_dung',
    type: 'family',
    data: {
      people: [
        { id: 'trinh_tien_dung', name: 'Trịnh Tiến Dũng', role: 'Anh 5', gender: 'M' },
        { id: 'nguyen_thi_cam_vy', name: 'Nguyễn Thị Cẩm Vy', role: 'Vợ', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_cau_viet_anh',
    type: 'family',
    data: {
      people: [
        { id: 'trinh_viet_anh', name: 'Trịnh Việt Anh', role: 'Anh 6', gender: 'M' },
        { id: 'dao_kim_thuy', name: 'Đào Kim Thùy', role: 'Vợ', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },

  // Thế hệ 4 Ngoại (Cháu)
  {
    id: 'n_bao_minh',
    type: 'family',
    data: { people: [{ id: 'trinh_bao_minh', name: 'Trịnh Bảo Minh', gender: 'M' }] },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_con_lan_anh',
    type: 'family',
    data: {
      people: [
        { id: 'ngo_thanh_van', name: 'Ngô Thanh Vân', gender: 'F' },
        { id: 'do_ngoc_phuong_uyen', name: 'Đỗ Ngọc Phương Uyên', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_con_dung',
    type: 'family',
    data: {
      people: [
        { id: 'trinh_thanh_dat', name: 'Trịnh Thành Đạt', gender: 'M' },
        { id: 'trinh_minh_phat', name: 'Trịnh Minh Phát', gender: 'M' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_con_viet_anh',
    type: 'family',
    data: {
      people: [
        { id: 'trinh_viet_trung', name: 'Trịnh Việt Trung', gender: 'M' },
        { id: 'trinh_dang_khoa', name: 'Trịnh Đăng Khoa', gender: 'M' },
      ],
    },
    position: { x: 0, y: 0 },
  },

  // Thế hệ 2 Nội (Ông bà nội)
  {
    id: 'n_ong_ba_noi',
    type: 'family',
    data: {
      label: 'Thế hệ 2: Ông Bà Nội',
      people: [
        { id: 'nguyen_viet_ky', name: 'Nguyễn Viết Kỳ', role: 'Ông nội', gender: 'M' },
        { id: 'nguyen_thi_chung', name: 'Nguyễn Thị Chung', role: 'Bà nội', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },

  // Thế hệ 3 Nội
  {
    id: 'n_co_lan_anh_noi',
    type: 'family',
    data: {
      people: [
        { id: 'nguyen_thi_lan_anh_noi', name: 'Nguyễn Thị Lan Anh', role: 'Em 3', gender: 'F' },
        { id: 'nguyen_phan_thu', name: 'Nguyễn Phan Thư', role: 'Chồng', gender: 'M' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_chu_dung',
    type: 'family',
    data: {
      people: [
        { id: 'nguyen_xuan_dung', name: 'Nguyễn Xuân Dũng', role: 'Em 4', gender: 'M' },
        { id: 'nguyen_yen_vy', name: 'Nguyễn Yến Vy', role: 'Vợ', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },

  // Thế hệ 4 Nội
  {
    id: 'n_con_lan_anh_noi',
    type: 'family',
    data: {
      people: [
        { id: 'nguyen_phan_duy_khang', name: 'Nguyễn Phan Duy Khang', gender: 'M' },
        { id: 'nguyen_phan_minh_duc', name: 'Nguyễn Phan Minh Đức', gender: 'M' },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_con_chu_dung',
    type: 'family',
    data: {
      people: [
        { id: 'su', name: 'Su', gender: 'F' },
        { id: 'si', name: 'Si', gender: 'F' },
      ],
    },
    position: { x: 0, y: 0 },
  },

  // Gia đình trung tâm
  {
    id: 'n_gia_dinh_trung_tam',
    type: 'family',
    data: {
      label: '❤️ GIA ĐÌNH TRUNG TÂM',
      isCenter: true,
      people: [
        { id: 'nguyen_xuan_khanh', name: 'Nguyễn Xuân Khánh', role: 'Anh 2 (Nội)', gender: 'M', isMain: true },
        { id: 'trinh_thi_to_loan', name: 'Trịnh Thị Tố Loan', role: 'Em út (Ngoại)', gender: 'F', isMain: true },
      ],
    },
    position: { x: 0, y: 0 },
  },
  {
    id: 'n_con_trung_tam',
    type: 'family',
    data: {
      isCenter: true,
      people: [
        { id: 'nguyen_khanh_hung', name: 'Nguyễn Khánh Hưng', role: 'Con trai', gender: 'M', isMain: true },
        { id: 'nguyen_khanh_ngan', name: 'Nguyễn Khánh Ngân', role: 'Con gái', gender: 'F', isMain: true },
      ],
    },
    position: { x: 0, y: 0 },
  },
];

export const getAllPeople = () => {
  const people: Record<string, Person> = {};
  initialNodes.forEach((node) => {
    node.data.people.forEach((p) => {
      people[p.id] = p;
    });
  });
  return people;
};

export const initialEdges: Edge[] = [
  // Cụ Ngoại -> Các con
  { id: 'e_cu_ngoai_toi', source: 'n_cu_ngoai', target: 'n_chi_2_ngoai' },
  { id: 'e_cu_ngoai_lan', source: 'n_cu_ngoai', target: 'n_em_ut_ngoai' },
  { id: 'e_cu_ngoai_chau', source: 'n_cu_ngoai', target: 'n_ong_ba_ngoai' }, // Lê Thị Châu

  // Anh em ông ngoại (Dashed line from ông bà ngoại to show sibling relationship)
  { id: 'e_ob_ngoai_anh_em', source: 'n_ong_ba_ngoai', target: 'n_anh_em_ong_ngoai', style: { strokeDasharray: '5,5', stroke: '#94a3b8' } },

  // Ông bà ngoại -> Các con
  { id: 'e_ob_ngoai_tuan', source: 'n_ong_ba_ngoai', target: 'n_bac_tuan' },
  { id: 'e_ob_ngoai_hai', source: 'n_ong_ba_ngoai', target: 'n_bac_hai' },
  { id: 'e_ob_ngoai_lan_anh', source: 'n_ong_ba_ngoai', target: 'n_bac_lan_anh' },
  { id: 'e_ob_ngoai_dung', source: 'n_ong_ba_ngoai', target: 'n_cau_dung' },
  { id: 'e_ob_ngoai_viet_anh', source: 'n_ong_ba_ngoai', target: 'n_cau_viet_anh' },
  { id: 'e_ob_ngoai_loan', source: 'n_ong_ba_ngoai', target: 'n_gia_dinh_trung_tam', animated: true, style: { stroke: '#ef4444', strokeWidth: 2 } },

  // Các con ngoại -> Cháu ngoại
  { id: 'e_tuan_minh', source: 'n_bac_tuan', target: 'n_bao_minh' },
  { id: 'e_lan_anh_con', source: 'n_bac_lan_anh', target: 'n_con_lan_anh' },
  { id: 'e_dung_con', source: 'n_cau_dung', target: 'n_con_dung' },
  { id: 'e_viet_anh_con', source: 'n_cau_viet_anh', target: 'n_con_viet_anh' },

  // Ông bà nội -> Các con
  { id: 'e_ob_noi_khanh', source: 'n_ong_ba_noi', target: 'n_gia_dinh_trung_tam', animated: true, style: { stroke: '#3b82f6', strokeWidth: 2 } },
  { id: 'e_ob_noi_lan_anh', source: 'n_ong_ba_noi', target: 'n_co_lan_anh_noi' },
  { id: 'e_ob_noi_dung', source: 'n_ong_ba_noi', target: 'n_chu_dung' },

  // Các con nội -> Cháu nội
  { id: 'e_lan_anh_noi_con', source: 'n_co_lan_anh_noi', target: 'n_con_lan_anh_noi' },
  { id: 'e_dung_noi_con', source: 'n_chu_dung', target: 'n_con_chu_dung' },

  // Gia đình trung tâm -> Con
  { id: 'e_trung_tam_con', source: 'n_gia_dinh_trung_tam', target: 'n_con_trung_tam', animated: true, style: { stroke: '#10b981', strokeWidth: 2 } },
];
