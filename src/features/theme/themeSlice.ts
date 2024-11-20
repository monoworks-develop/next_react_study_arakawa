import { createSlice } from '@reduxjs/toolkit';

// 状態の型を定義
interface ThemeState {
  mode: 'light' | 'dark';
}

// 初期状態
const initialState: ThemeState = {
  mode: 'light',
};

// スライスの作成
const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.mode = state.mode === 'light' ? 'dark' : 'light';
    },
  },
});

// アクションとリデューサーをエクスポート
export const { toggleTheme } = themeSlice.actions;
export default themeSlice.reducer;
