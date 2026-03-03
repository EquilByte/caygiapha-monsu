import { Handle, Position } from '@xyflow/react';
import { User, Heart } from 'lucide-react';
import { cn } from '../utils/cn';
import { useProfile } from '../context/ProfileContext';

export type Person = {
  id: string;
  name: string;
  role?: string;
  gender?: 'M' | 'F';
  isMain?: boolean;
};

export type FamilyNodeData = {
  label?: string;
  people: Person[];
  isCenter?: boolean;
};

export default function FamilyNode({ data }: { data: FamilyNodeData }) {
  const isCouple = data.people.length > 1;
  const { profiles, setSelectedPersonId } = useProfile();

  return (
    <div
      className={cn(
        'relative flex flex-col items-center rounded-2xl border-2 bg-white/90 p-4 shadow-sm backdrop-blur-sm transition-all hover:-translate-y-1 hover:shadow-lg',
        data.isCenter ? 'border-rose-400 shadow-rose-100' : 'border-slate-200',
        'min-w-[200px]'
      )}
    >
      <Handle type="target" position={Position.Top} className="!bg-slate-400 !w-3 !h-3" />
      
      {data.label && (
        <div
          className={cn(
            'absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-3 py-0.5 text-xs font-semibold tracking-wide text-white',
            data.isCenter ? 'bg-rose-500' : 'bg-slate-500'
          )}
        >
          {data.label}
        </div>
      )}

      <div className="mt-2 flex items-center justify-center gap-4">
        {data.people.map((person) => {
          const profile = profiles[person.id];
          return (
            <div 
              key={person.id} 
              className="flex flex-col items-center gap-1 cursor-pointer group"
              onClick={() => setSelectedPersonId(person.id)}
            >
              <div
                className={cn(
                  'flex h-14 w-14 items-center justify-center rounded-full border-2 overflow-hidden transition-transform group-hover:scale-110',
                  person.gender === 'M'
                    ? 'border-blue-200 bg-blue-50 text-blue-600'
                    : person.gender === 'F'
                    ? 'border-pink-200 bg-pink-50 text-pink-600'
                    : 'border-slate-200 bg-slate-50 text-slate-600',
                  person.isMain && 'ring-4 ring-rose-200 ring-offset-2'
                )}
              >
                {profile?.photoUrl ? (
                  <img src={profile.photoUrl} alt={person.name} className="w-full h-full object-cover" />
                ) : (
                  <User size={24} strokeWidth={1.5} />
                )}
              </div>
              <div className="text-center">
                <div className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">{person.name}</div>
                {person.role && (
                  <div className="text-xs font-medium text-slate-500">{person.role}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {isCouple && (
        <div className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-1">
          <Heart size={16} className="fill-rose-100 text-rose-400" />
        </div>
      )}

      <Handle type="source" position={Position.Bottom} className="!bg-slate-400 !w-3 !h-3" />
    </div>
  );
}
