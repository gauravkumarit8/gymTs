import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/ActionButton";
import HomePageText from '@/assets/HomePageText.png';
import HomePageGraphic from '@/assets/HomePageGraphic.png';
import SponsorForbes from '@/assets/SponsorForbes.png';
import SponsorFortune from '@/assets/SponsorFortune.png';
import SponsorRedBull from '@/assets/SponsorRedBull.png';
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const Home = ({setSelectedPage}: Props) => {
    const isAboveMediumScreens=useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pd-0">
        {/* image main header */}
        <motion.div 
            className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 "
            onClick={()=>setSelectedPage(SelectedPage.Home)}
        >
            {/* main header */}
            <div className="z-10 mt-32 md:basis-3/5" >
                {/* Header */}
                <motion.div 
                    className="md:-mt-20"
                    initial="hidden" whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x: -50},//inital position
                        visible:{opacity:1,x:0},//final position
                    }}
                >
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                            <img alt="home-page-text" src={HomePageText}/>
                        </div>
                    </div>
                    <p className="mt-8 text-sm">Lorem ipsum dolor sit amet consectetur, 
                        adipisicing elit. Aliquam cum autem molestias, 
                        expedita possimus, optio exercitationem odio 
                        deserunt dignissimos at ex error quisquam sint 
                        debitis sit ipsa perspiciatis minus enim.
                    </p>
                </motion.div>
                {/* Actions */}
                <motion.div 
                    className="mt-8 flex items-center gap-8"
                    initial="hidden" whileInView="visible"
                    viewport={{once:true,amount:0.5}}
                    transition={{delay:0.2,duration:0.5}}
                    variants={{
                        hidden:{opacity:0,x: -50},//inital position
                        visible:{opacity:1,x:0},//final position
                    }}
                >
                    <ActionButton setSelectedPage={setSelectedPage}>
                        Join now
                    </ActionButton>
                    <AnchorLink 
                        className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                        onClick={()=>setSelectedPage(SelectedPage.ContacUs)}
                        href={`${SelectedPage.ContacUs}`}
                    >
                        <p>Learn more..</p>
                    </AnchorLink>
                </motion.div>
            </div>
            {/* Image */}
            <div className="flex basis-3/5 justify-center md:z-10 md:ml-40 md:mt-16 md:justify-items-end">
                <img alt="home-pageGraphic" src={HomePageGraphic} />
            </div>
        </motion.div>

        {/* Sponsers */}
        {isAboveMediumScreens &&(
            <div className="h-[150px] w-full bg-primary-100 py-10">
                <div className="mx-auto w-5/6">
                    <div className="flex w-3/5 items-center justify-between gap-8 ">
                        <img alt="redbull-sponsor" src={SponsorRedBull} />
                        <img alt="forbes-sponsor" src={SponsorForbes} />
                        <img alt="fortune-sponsor" src={SponsorFortune} />
                    </div>
                </div>
            </div>
        )}
    </section>
  )
}

export default Home