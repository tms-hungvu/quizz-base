import Image from "next/image";
import { Inter } from "next/font/google";
import getLayoutGuest from "./_components/layout/GuestLayout";
import { Button } from 'antd';
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1> This is home page list quizzes </h1>
      <Button type="primary">Button from ant design</Button>
    </main>
  );
}

Home.getLayout = getLayoutGuest;
