import { ClassType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import image1 from "@/assets/image1.png"
import image2 from "@/assets/image2.png"
import image3 from "@/assets/image3.png"
import image4 from "@/assets/image4.png"
import image5 from "@/assets/image5.png"
import image6 from "@/assets/image6.png"
import Htag from "@/shared/Htag";
import Class from "./Class";

const classes:Array<ClassType>=[
    {
        name:"Weight Traininmg class",
        image:image1,
    },
    {
        name:"yyak jfgb class",
        description:"qdfhqw qo87gqwr qruherf r8er qryr qeryqr reruiierrher rrhqrherqer hr ",
        image:image2,
    },
    {
        name:"Weiwreghght wrhw class",
        description:"qdfhqw qo87gqwr qruherf r8er qryr qeryqr reruiierrher rrhqrherqer hr ",
        image:image3,
    },
    {
        name:"Weight Traininmg ",
        image:image4,
    },
    {
        name:" Traininmg class",
        image:image5,
    },
    {
        name:"Weight class",
        description:"qdfhqw qo87gqwr qruherf r8er qryr qeryqr reruiierrher rrhqrherqer hr ",
        image:image6,
    },
]

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const OurClasses = ({setSelectedPage}: Props) => {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-40">
        <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.OurClasses)}>
            <motion.div className="mx-auto w-5/6"
                initial="hidden" whileInView="visible"
                viewport={{once:true,amount:0.5}}
                transition={{delay:0.2,duration:0.5}}
                variants={{
                    hidden:{opacity:0,x: -50},//inital position
                    visible:{opacity:1,x:0},//final position
                }}
            >
                <div className="md:w-3/5">
                    <Htag>Our Classes</Htag>
                    <p className="py-5">rer87g rgrg rgerg rrgerg ggv rgerigr gergerg 
                        rgwer8eg rger87g rgereg eughgrg e8r7geug rgeirg 
                        rgerg , rugerig rgerg , rgerg orgergye98g .
                    </p>
                </div>
            </motion.div>

            <div className="mt-10 h-[353px] w-full overflow-x-auto overflow-y-hidden">
                <ul className="w-[2800px] whitespace-nowrap">
                    {classes.map((item:ClassType,index)=>(
                        <Class 
                            key={`${item.name}-${index}`}
                            name={item.name}
                            description={item.description}
                            image={item.image}
                        />
                    ))}
                </ul>
            </div>
        </motion.div>
    </section>
  )
}

export default OurClasses