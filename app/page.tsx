import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Image from "next/image";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { IoDocumentText } from "react-icons/io5";

export default function Home() {
  return (
    <main className="text-[30px] relative bg-black-100 flex
    justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-0 px-5">
      <div className=" max-w-7xl w-full">
        <FloatingNav navItems={[
          {name : 'Home', link:'/', icon :<FaHome/>},
          {name : 'Projects', link:'#recent-projects',icon:<FaGithub/>},
          {name : 'Resume', link:'public/latestresume.pdf',icon:<IoDocumentText/>}
          ]} />
        <Hero />
        <Grid />
        <RecentProjects/>
      </div>

    </main>
  );
}
