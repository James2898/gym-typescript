import { SelectedPage } from "@/shared/types";
import Class from "@/scenes/ourClasses/Class";
import image1 from "@/assets/image1.png";
import image2 from "@/assets/image2.png";
import image3 from "@/assets/image3.png";
import image4 from "@/assets/image4.png";
import image5 from "@/assets/image5.png";
import image6 from "@/assets/image6.png";
import { motion } from "framer-motion";
import HText from "@/shared/HText";

const classes = [
  {
    name: "Weight Training Classes",
    description:
      "Magna proident magna eiusmod eiusmod qui ea voluptate aute proident",
    image: image1,
  },
  {
    name: "Yoga Classes",
    description:
      "Et ad qui magna incididunt esse aliquip excepteur excepteur proident dolor.",
    image: image2,
  },
  {
    name: "Ab Classes",
    description:
      "Nisi irure ipsum id elit sunt enim officia adipisicing incididunt ex commodo nulla laborum nostrud.",
    image: image3,
  },
  {
    name: "Adventure Classes",
    description:
      "Aliquip enim non labore labore reprehenderit laborum minim Lorem non aute officia ullamco Lorem duis.",
    image: image4,
  },
  {
    name: "Fitness Classes",
    description:
      "Velit minim Lorem amet aliqua deserunt laborum eu sint sunt nulla deserunt velit Lorem ea.",
    image: image5,
  },
  {
    name: "Training Classes",
    description:
      "Lorem dolor Lorem veniam cupidatat magna adipisicing consectetur id excepteur cupidatat veniam.",
    image: image6,
  },
];

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function OurClasses({ setSelectedPage }: Props) {
  return (
    <section id="ourclasses" className="w-full bg-primary-100 py-4">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClass)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duraiton: 1 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="mx-auto w-5/6"
        >
          <div className="md:w-3/5">
            <HText>Our Classes</HText>
            <p className="py-5">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum."
            </p>
          </div>
        </motion.div>
        <div className="mt-10 h-[350px] w-full overflow-x-auto overflow-y-hidden">
          <ul className="w-[2800px] whitespace-nowrap">
            {classes.map((item, index) => (
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
  );
}

export default OurClasses;
