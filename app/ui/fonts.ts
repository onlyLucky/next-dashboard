import { Inter,Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

export const lusitana = Lusitana({
  weight: ['400', '700'],// 加载400和700两个字体
  subsets: ['latin'],// 只加载拉丁文字体
});