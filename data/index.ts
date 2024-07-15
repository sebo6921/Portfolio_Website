export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About me: ",
    description: "I'm currently in my second year studying Computer Science and Software Engineering at Otago University. "+
    "When I'm not doing uni work, I enjoy solving LeetCode problems. I find it a fun and stimulating way to learn how to tackle "+
    "different types of challenges without it feeling like work. On the weekends, I like playing football with my mates and having a drink while enjoying good company.cock",
    className: "lg:col-span- md:col-span-5 md:row-span-1 lg:min-h-[20vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Travelling",
    description: "I love travelling, one of my favourite things to do whether "+
    "that's in New Zealand or overseas, I love exploring other countries cultures"+
    " and histories is one of the most interesting things for me.",
    className: "relative text-[10px] lg:col-span-4 md:col-span-2 md:row-span-5 lg:min-h-[40vh]",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "Tech Stack",
    description: "",
    className: "lg:min-h-[40vh] lg:min-w-[30vh]",
    imgClassName: "",
    titleClassName: "",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  
];

export const projects = [
  {
    id: 1,
    title: "ANDIE - A Non-Destructive Image Editor",
    des: "ANDIE is an image processing and editing program, a bit like Photoshop. As ANDIE is a non-destructive image editor, many image processing operations, such as blurring filters, cannot be reversed because information is lost in the process.",
    img: "public/capture.png",
    iconLists: ["java.png"],
    link: "https://github.com/sebo6921/Non-Destructive-photo-editor",
  },
  
];
