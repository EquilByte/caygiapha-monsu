import { createContext, useContext, useState, ReactNode, useEffect } from 'react';

export type PersonProfile = {
  photoUrl?: string;
  birthDate?: string;
  deathDate?: string;
  bio?: string;
  achievements?: string;
};

type ProfileContextType = {
  profiles: Record<string, PersonProfile>;
  updateProfile: (id: string, profile: PersonProfile) => void;
  selectedPersonId: string | null;
  setSelectedPersonId: (id: string | null) => void;
};

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export function ProfileProvider({ children }: { children: ReactNode }) {
  const [profiles, setProfiles] = useState<Record<string, PersonProfile>>(() => {
    try {
      const saved = localStorage.getItem('familyProfiles');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      console.error('Failed to load profiles from local storage', e);
      return {};
    }
  });
  const [selectedPersonId, setSelectedPersonId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('familyProfiles', JSON.stringify(profiles));
    } catch (e) {
      console.error('Failed to save profiles to local storage', e);
    }
  }, [profiles]);

  const updateProfile = (id: string, profile: PersonProfile) => {
    setProfiles((prev) => ({ ...prev, [id]: profile }));
  };

  return (
    <ProfileContext.Provider value={{ profiles, updateProfile, selectedPersonId, setSelectedPersonId }}>
      {children}
    </ProfileContext.Provider>
  );
}

export function useProfile() {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
}
