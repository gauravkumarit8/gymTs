import Htag from "@/shared/Htag";
import { BenefitType, SelectedPage } from "@/shared/types";
import { HomeModernIcon,AcademicCapIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSelectedPage:(value:SelectedPage)=>void;
}

const benefits:Array<BenefitType>=[
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title:"State of the Facilities",
    description: "Neque aduoffoiffv fuvhweuifuv rvrue ufheui vervh",
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title:"100's Facilities",
    description: "34ggr  4th Neque aduoffoiffv fuvhweuifuv rvrue ufheui vervh",
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title:"yuffvu ereer ",
    description: "889l 8i9l Neque aduoffoiffv fuvhweuifuv rvrue ufheui vervh",
  },
]

const container={
  hidden:{},
  visible:{
    transition:{staggerChildren:0.2}
  }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={()=>setSelectedPage(SelectedPage.Benefits)}
      >
        {/* Header */}
        <motion.div
          initial="hidden" whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
              hidden:{opacity:0,x: -50},//inital position
              visible:{opacity:1,x:0},//final position
          }}
          className="md:my-5 md:w-3/5"
        >
          <Htag>MORE THAN A GYM..</Htag>
          <p className="my-5 text-sm">
            Here you vawudf yru9 rygfwegev 
            rerufghwerf efgrweruif ruryfgwefg,
            rrifugeruif weergerfger eurhgyurfgerfg huier 
          </p>
        </motion.div>
        {/* Benefits */}
        <motion.div 
          className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden"
          whileInView="visible"
          viewport={{once:true,amount:0.5}}
          variants={container}
        >
          {benefits.map((benefit:BenefitType)=>(
            <Benefit key={benefit.title}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>
        {/* Graphic and description */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* graphic */}
          <img className="mx-auto"
            alt="benefits-page-graphic"
            src={BenefitsPageGraphic}
          />

          {/* Description */}
          <div>
            {/* Title */}
            <motion.div 
              initial="hidden" whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.2,duration:0.5}}
              variants={{
                  hidden:{opacity:0,x: -50},//inital position
                  visible:{opacity:1,x:0},//final position
              }}
              className="relative"
            > {/*className="relative" */}
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                <div>
                  <Htag>Millions of HAPPY Getting{" "}
                    <span className="text-primary-500">FIT</span>
                  </Htag>
                </div>
              </div>
            </motion.div>
            {/* Description */}
            <motion.div
              initial="hidden" whileInView="visible"
              viewport={{once:true,amount:0.5}}
              transition={{delay:0.3,duration:0.5}}
              variants={{
                  hidden:{opacity:0,x: 50},//inital position
                  visible:{opacity:1,x:0},//final position
              }}
            >
              <p className="my-5">e9rgyr r8gtr87g 89gyfij fdjighdsfjg 
                gihjgb. tu9gtb tgrtb tughwerw ggoitguhri wtrughrg rutghurtg,
                9jrt9g t8gwtr9gh bbhjigbdsfb bwihghr.
              </p>
              <p className="mb-5">
                efrrghwer worhgwerg wughweoug preifigf jfgbweiugh  ruhgwerg , 8erhgeri gyrrg 
                wefhgwefug iirhgweighe geiegege.
              </p>
            </motion.div>
            {/* button */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Benefits