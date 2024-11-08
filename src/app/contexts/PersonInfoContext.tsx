import { createContext, ReactNode } from 'react';

// PersonInfoの型定義
type Person = {
  name: string;
  age: number;
};

// 初期データの定義
const initialPersonInfo: Person = {
  name: 'Taro',
  age: 28,
};

// PersonInfoContextの作成
const PersonInfoContext = createContext<Person>(initialPersonInfo);

// コンテキストプロバイダーの作成
export const PersonInfoProvider = ({ children }: { children: ReactNode }) => {
  return <PersonInfoContext.Provider value={initialPersonInfo}>{children}</PersonInfoContext.Provider>;
};

export default PersonInfoContext;
