import DevImg from "./DevImg";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from "lucide-react";

const infoData = [
  {
    icon: <User2 size={20} />,
    text: "Seon Byeong Cheol",
  },
  {
    icon: <PhoneCall size={20} />,
    text: "010 2267 9147",
  },
  {
    icon: <MailIcon size={20} />,
    text: "tuski0@naver.com",
  },
  {
    icon: <Calendar size={20} />,
    text: "2000. 06. 18",
  },
  {
    icon: <GraduationCap size={20} />,
    text: "Master on IT Software",
  },
  {
    icon: <HomeIcon size={20} />,
    text: "강원도 동해시",
  },
];

const qualificationData = [
  {
    title: "education",
    data: [
      {
        university: "삼척마이스터고",
        qualification: "졸업",
        years: "2015 - 2018",
      },
      {
        university: "신구대학교",
        qualification: "졸업",
        years: "2021 - 2024",
      },
    ],
  },
];

const skillData = [
  {
    title: "certificate",
    data: [
      {
        name: "설비보전 기능사",
        date: "2016.06.24",
      },
      {
        name: "정보처리 기능사",
        date: "2016.09.28",
      },
      {
        name: "전산응용기계제도기능사",
        date: "2017.07.07",
      },
      {
        name: "SW 코딩 자격 1급",
        date: "2023.11.30",
      },
    ],
  },
  
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          About Me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="hidden xl:flex flex-1 relative">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  Qualification
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="certificate">
                certificate   
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className="text-lg mt-12 xl:mt-8">
                {/* personal */}
                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="h3 mb-4"></h3>
                    <p className="subtitle max-w-xl max-auto xl:mx-0">
                      개발에 관한 이야기
                    </p>
                    {/* icons */}
                    <div className="grid xl:grid-cols-2 gap-4 mb-12">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center gap-x-4 mx-auto xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border"></div>
                      <div>Korean, English, Japanese</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications  */}
                <TabsContent value="qualification">
                  <div>
                    <h3 className="h3 mb-8 text-center xl:text-left">
                      My Awesome Journey
                    </h3>
                    {/* exprience & education wrapper */}
                    <div>
                      {/* education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap size={28} />
                          <h4 className="capitalize font-medium">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8 ">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className="flex gap-x-8 group" key={index}>
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div>
                                  </div>
                                  <div>
                                    <div className="font-semibold text-xl leading-none mb-2">
                                      {university}
                                    </div>
                                    <div className="text-lg leading-none text-muted-foreground mb-4">
                                      {qualification}
                                    </div>
                                    <div className="text-base fond-medium">
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="certificate">
                  {/* certificate */}
                  <div className="text-center xl:text-left">
                    <div className="mb-16">
                      <h4 className="text-xl font-semibold mb-2">자격증</h4>
                      <div className="border-b border-border mb-4"></div>
                      {/* Skill list */}
                      <div>
                        {getData(skillData, "certificate").data.map(
                          (item, index) => {
                            const { name, date} = item;
                            return (
                              <div
                                className="w-2/4 text-center xl:text-left mx-auto xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium">{name}</div>
                                <div className="font-medium mb-4">{date}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                    
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
