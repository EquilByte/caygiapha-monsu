import { useState, useEffect, useRef } from 'react';
import { useProfile, PersonProfile } from '../context/ProfileContext';
import { X, Upload, User as UserIcon, Calendar, Award, FileText, Save, Edit2 } from 'lucide-react';
import { getAllPeople } from '../data/familyTree';
import { cn } from '../utils/cn';

const allPeople = getAllPeople();

export default function ProfileSidebar() {
  const { selectedPersonId, setSelectedPersonId, profiles, updateProfile } = useProfile();
  const [isEditing, setIsEditing] = useState(false);
  const [editForm, setEditForm] = useState<PersonProfile>({});
  const fileInputRef = useRef<HTMLInputElement>(null);

  const person = selectedPersonId ? allPeople[selectedPersonId] : null;
  const profile = selectedPersonId ? profiles[selectedPersonId] || {} : {};

  useEffect(() => {
    if (selectedPersonId) {
      setEditForm(profiles[selectedPersonId] || {});
      setIsEditing(false);
    }
  }, [selectedPersonId, profiles]);

  if (!person) return null;

  const handleSave = () => {
    if (selectedPersonId) {
      updateProfile(selectedPersonId, editForm);
      setIsEditing(false);
    }
  };

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setEditForm((prev) => ({ ...prev, photoUrl: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleChange = (field: keyof PersonProfile, value: string) => {
    setEditForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl transition-transform duration-300 ease-in-out flex flex-col border-l border-slate-200">
      <div className="flex items-center justify-between p-4 border-b border-slate-100">
        <h2 className="text-lg font-semibold text-slate-800">Hồ sơ cá nhân</h2>
        <button
          onClick={() => setSelectedPersonId(null)}
          className="p-2 rounded-full hover:bg-slate-100 text-slate-500 transition-colors"
        >
          <X size={20} />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <div
              className={cn(
                'w-32 h-32 rounded-full border-4 flex items-center justify-center overflow-hidden bg-slate-50',
                person.gender === 'M' ? 'border-blue-100 text-blue-500' : person.gender === 'F' ? 'border-pink-100 text-pink-500' : 'border-slate-100 text-slate-500'
              )}
            >
              {(isEditing ? editForm.photoUrl : profile.photoUrl) ? (
                <img
                  src={isEditing ? editForm.photoUrl : profile.photoUrl}
                  alt={person.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <UserIcon size={48} strokeWidth={1.5} />
              )}
            </div>

            {isEditing && (
              <button
                onClick={() => fileInputRef.current?.click()}
                className="absolute bottom-0 right-0 p-2 bg-white rounded-full shadow-md border border-slate-200 text-slate-600 hover:text-blue-600 transition-colors"
                title="Tải ảnh lên"
              >
                <Upload size={16} />
              </button>
            )}
            <input
              type="file"
              ref={fileInputRef}
              onChange={handlePhotoUpload}
              accept="image/*"
              className="hidden"
            />
          </div>

          <h3 className="mt-4 text-2xl font-bold text-slate-800 text-center">{person.name}</h3>
          {person.role && <p className="text-sm font-medium text-slate-500 mt-1">{person.role}</p>}
        </div>

        <div className="space-y-6">
          {/* Dates */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Calendar size={18} className="text-slate-400" />
              <h4>Thời gian</h4>
            </div>
            <div className="grid grid-cols-2 gap-4 pl-6">
              <div>
                <label className="block text-xs text-slate-500 mb-1">Ngày sinh</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editForm.birthDate || ''}
                    onChange={(e) => handleChange('birthDate', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-sm text-slate-800">{profile.birthDate || 'Chưa cập nhật'}</p>
                )}
              </div>
              <div>
                <label className="block text-xs text-slate-500 mb-1">Ngày mất</label>
                {isEditing ? (
                  <input
                    type="date"
                    value={editForm.deathDate || ''}
                    onChange={(e) => handleChange('deathDate', e.target.value)}
                    className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <p className="text-sm text-slate-800">{profile.deathDate || '-'}</p>
                )}
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <FileText size={18} className="text-slate-400" />
              <h4>Tiểu sử</h4>
            </div>
            <div className="pl-6">
              {isEditing ? (
                <textarea
                  value={editForm.bio || ''}
                  onChange={(e) => handleChange('bio', e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Nhập tiểu sử ngắn gọn..."
                />
              ) : (
                <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {profile.bio || 'Chưa có thông tin tiểu sử.'}
                </p>
              )}
            </div>
          </div>

          {/* Achievements */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-slate-700 font-medium">
              <Award size={18} className="text-slate-400" />
              <h4>Thành tựu nổi bật</h4>
            </div>
            <div className="pl-6">
              {isEditing ? (
                <textarea
                  value={editForm.achievements || ''}
                  onChange={(e) => handleChange('achievements', e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Nhập các thành tựu nổi bật..."
                />
              ) : (
                <p className="text-sm text-slate-800 whitespace-pre-wrap leading-relaxed">
                  {profile.achievements || 'Chưa có thông tin thành tựu.'}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end gap-3">
        {isEditing ? (
          <>
            <button
              onClick={() => setIsEditing(false)}
              className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-800 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={handleSave}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
            >
              <Save size={16} />
              Lưu thay đổi
            </button>
          </>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="flex items-center gap-2 px-4 py-2 bg-slate-800 text-white text-sm font-medium rounded-lg hover:bg-slate-900 transition-colors shadow-sm"
          >
            <Edit2 size={16} />
            Chỉnh sửa
          </button>
        )}
      </div>
    </div>
  );
}
