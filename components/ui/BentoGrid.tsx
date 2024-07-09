import { cn } from "@/components/utils/cn";

import { Globe } from "./Globe";
import { GlobeDemo } from "./GridGlobe";
import { TextGenerateEffect } from "./TextGenerateEffect";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        // change gap-4 to gap-8, change grid-cols-3 to grid-cols-5, remove md:auto-rows-[18rem], add responsive code
        "grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  id,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  spareImg?: string;
  titleClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4 border border-white/[0.1]",
        className
      )}
      style={{
        background: 'rgb(8,10,40)',
        backgroundColor: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(255,255,255,0.7390243902439024) 74%, rgba(0,212,255,1) 100%)'
      }}
    >
      <div className={`${id == 6}&& 'flex justify-center h-full'`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, 'object-cover,object-center')}
            />
          )}

        </div>
        <div className={`absolute right-0 -bottom-5 ${id === 5 && 'w-full opacity-80'}`}>
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={'object-cover,object-center w-full h-full'}
            />
          )}

        </div>
        <div>

          <div className={cn(
            titleClassName, 'group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10 '
          )}>
            <div className="font-sans font-bold text-lg lg:text-3xl max-w-126 z-10">
              {title}
            </div>

            <div className="font-sans font-light text-[#fbfcfd] text-[30px] z-10">

              <TextGenerateEffect words={description || ""} />

            </div>


            {id === 2 && <GlobeDemo />}
            {id === 3 && (
              <div className="flex gap-1 lg:gap-5 w-fit absolute -right-2 lg:-right-2 mt-20">
                <div className="flex flex-col gap-3 lg:gap-8 ">
                  {['React.js', 'Next.js', 'TypeScript'].map
                    ((item) => (
                      <span key={item} className="py-8 lg:py4 lg:px-3 px-3 text-xs lg:text-base
                opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 ">
                  {['Java', 'C/C++', 'SQL'].map
                    ((item) => (
                      <span key={item} className="py-8 lg:py4 lg:px-3 px-3 text-xs lg:text-base
                opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
                <div className="flex flex-col gap-3 lg:gap-8 mr-10">
                  {['Python', 'HTML/CSS', 'Bash'].map
                    ((item) => (
                      <span key={item} className="py-8 lg:py4 lg:px-3 px-3 text-xs lg:text-base
                opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]">
                        {item}
                      </span>
                    ))}
                  <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                </div>
              </div>
            )}
            <div className="text-[30px]">


              {id === 6 && (
                <a className={className} href="https://www.linkedin.com/in/sebastian-chkourko-982a1a295/" target="_blank" rel="noopener noreferrer">
                  {description}              </a>
              )}
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
