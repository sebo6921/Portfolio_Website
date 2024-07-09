import React from "react";

const MagicButton = ({
    title, icon, position, handleClick, otherClasses
}:{
    title: string; icon: React.ReactNode, position:string; 
    handleClick?: () => void; otherClasses?:string;
})=>{
    return (
        <button className="p-[4px] relative">
  <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
  <div className="text-[25px] px-20 py-3  bg-black rounded-[10px]  relative group transition duration-200 text-white hover:bg-transparent">
    My Projects

  </div>
</button>
    )
}
 export default MagicButton