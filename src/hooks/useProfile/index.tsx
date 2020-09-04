import React, {
  useCallback,
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Profile {
  name: string;
  image: string;
  theme: string;
}

interface UpdateDTO {
  key: 'name' | 'image' | 'theme';
  value: string;
}

interface ContextProps {
  data: Profile;
  saveProfile(profile: Profile): Promise<void>;
  getProfile(): Promise<void>;
  updateProfile(dto: UpdateDTO): Promise<void>;
}

const Context = createContext<ContextProps>({} as ContextProps);

const useProfile = (): ContextProps => {
  const context = useContext(Context);

  if (!context) {
    throw new Error();
  }

  return context;
};

const ProfileProvider: React.FC = ({children}) => {
  const [data, setData] = useState<Profile>({} as Profile);
  const [loading, setLoading] = useState(true);

  const saveProfile = useCallback(async (dto: Profile) => {
    await AsyncStorage.multiSet([
      ['@Jotting:name', dto.name],
      ['@Jotting:image', dto.image],
      ['@Jotting:theme', dto.theme],
    ]);

    setData(dto);
  }, []);

  const updateProfile = useCallback(
    async (dto: UpdateDTO) => {
      const {key, value} = dto;

      await AsyncStorage.setItem(`@Jotting:${key}`, value);

      const updatedData: Profile = data;
      updatedData[key] = value;

      setData(updatedData);
    },
    [data],
  );

  const getProfile = useCallback(async () => {
    const values = await AsyncStorage.multiGet([
      '@Jotting:name',
      '@Jotting:image',
      '@Jotting:theme',
    ]);

    const [, name] = values[0];
    const [, image] = values[1];
    const [, theme] = values[2];

    if (!name || !image || !theme) {
      return;
    }

    setData({name, image, theme});
  }, []);

  useEffect(() => {
    getProfile().then(() => {
      setLoading(false);
    });
  }, [getProfile]);

  if (loading) {
    return <></>;
  }

  return (
    <Context.Provider
      value={{
        data,
        saveProfile,
        getProfile,
        updateProfile,
      }}>
      {children}
    </Context.Provider>
  );
};

export {ProfileProvider, useProfile};
export type {Profile};
