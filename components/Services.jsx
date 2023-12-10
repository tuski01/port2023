import { GanttChartSquare, Blocks, Gem } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const servicesData = [
  {
    icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
    title: 'Front-End',
    description: 'HTML, CSS, JavaScript',
    description2: 'React, Next.js',
    description3: "TailwindCSS"
  },
  {
    icon: <Blocks size={72} strokeWidth={0.8} />,
    title: 'Back-End',
    description: 'PHP, JAVA, Node.js',
    description2: "Spring, Mysql"
  },
  {
    icon: <Gem size={72} strokeWidth={0.8} />,
    title: 'Tools',
    description: 'Eclipse, IntelliJ, VSCode',
    description2: 'Git, Github',
    description3: 'AdobeXD, Figma',
  },
];

const Services = () => {
  return <section className="mb-12 xl:mb-36">
    <div className="container mx-auto">
      <h2 className="section-title mb-24 ml:mb-24 text-center mx-auto ">
        My Skills
      </h2>
      {/* grid items */}
      <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8">
        {servicesData.map((item, index)=>{
          return <Card className='w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative' key={index}>
            <CardHeader className='text-primary absolute -top-[60px]' >
              <div className="w-[140px] h-[80px] dark:bg-background flex justify-center items-center">{item.icon}</div>
            </CardHeader>
            <CardContent className='text-center' >
              <CardTitle className='mb-4' >{item.title}</CardTitle>
              <CardDescription className='text-lg' >{item.description}</CardDescription>
              <CardDescription className='text-lg' >{item.description2}</CardDescription>
              <CardDescription className='text-lg' >{item.description3}</CardDescription>
            </CardContent>
          </Card>
        })}
      </div>
    </div>
  </section>
};

export default Services;
