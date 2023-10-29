import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion";
import {useForm} from 'react-hook-form';
import ContactUsPageGraphic from '@/assets/ContactUsPageGraphic.png'
import Htag from "@/shared/Htag";

type Props = {
    setSelectedPage:(value:SelectedPage)=>void;
}

const ContactUs = ({setSelectedPage}: Props) => {

  const inputStyle=`mb-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e:any) => {
    const isValid = await trigger();
    if(!isValid){
      e.preventDefault();
    }
  }

  return (
    <section id="contactus" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div onViewportEnter={()=>setSelectedPage(SelectedPage.ContacUs)}>
        {/* header */}
        <motion.div className="md:w-3/5"
          initial="hidden" whileInView="visible"
          viewport={{once:true,amount:0.5}}
          transition={{delay:0.2,duration:0.5}}
          variants={{
              hidden:{opacity:0,x: -50},//inital position
              visible:{opacity:1,x:0},//final position
          }}
        >
          <Htag >
            <span className="text-primary-500">Join Now</span>
          </Htag>
          <p className="my-5">
            aysdgf fayw fryf rfeef . irfg hqeeiu riuyer ee elu ahfa-flip-horizontal
            qrge3r trghw45 w5h45 wth 436u 56u 7u j wtu fhn yjrtj fgh rtu3 5y fghghe56 
            eu eyjeyu yjry fgh rutuj 6fj5 .
          </p>
        </motion.div>
        {/* form and images */}
        <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div className="mt-10 basis-3/5 md:mt-0"
            initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y: 50},//inital position
                visible:{opacity:1,y:0},//final position
            }}
          >
            <form target="_blank" onSubmit={onSubmit}
              action="https://formsubmit.co/thagau508@gmail.com"
              method="POST"
            >
              <input className={inputStyle} type="text"
                placeholder="NAME" 
                {...register("name", {
                  required:true,
                  maxLength:100,
                })}
              />
              {errors.name && (
                <p className="mt-1 text-primary-500">
                  {errors.name.type==="required" && "This is required"}
                  {errors.name.type==="maxLength" && "Max length is allowed up to 100"}
                </p>
              )}

              <input className={inputStyle} type="text"
                placeholder="EMAIL" 
                {...register("email", {
                  required:true,
                  pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                })}
              />
              {errors.email && (
                <p className="mt-1 text-primary-500">
                  {errors.email.type==="required" && "This is required"}
                  {errors.email.type==="pattern" && "Enter valid email"}
                </p>
              )}

              <textarea className={inputStyle} rows={4} cols={50}
                placeholder="MESSAGE" 
                {...register("message", {
                  required:true,
                  maxLength:2000,
                })}
              />
              {errors.message && (
                <p className="mt-1 text-primary-500">
                  {errors.message.type==="required" && "This is required"}
                  {errors.message.type==="maxLength" && "Max length is allowed up to 2000"}
                </p>
              )}

              <button type="submit"
                className="mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:text-white"
              >
                SUBMIT
              </button>

            </form>
          </motion.div>

          <motion.div className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden" whileInView="visible"
            viewport={{once:true,amount:0.5}}
            transition={{delay:0.2,duration:0.5}}
            variants={{
                hidden:{opacity:0,y: 50},//inital position
                visible:{opacity:1,y:0},//final position
            }}
          >
            <div className="md:before:content-evolvetext w-full before:absolute before:-bottom-20 before:-right-10 before:z-[-1]">
              <img 
                className="w-full" alt="contact-us-page-graphic"
                src={ContactUsPageGraphic}
              />
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  )
}

export default ContactUs