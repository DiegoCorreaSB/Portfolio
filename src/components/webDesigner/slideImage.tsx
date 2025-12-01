import cartaoVisita1 from "../../assets/cartao-visita1.jpg"
import { motion } from 'framer-motion';
import { useState, useEffect, useRef } from "react";
import '../../style/webdesigner.css'

const image = [cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1, cartaoVisita1];

export default () => {
    const carousel = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        if (carousel.current) {
            setWidth (carousel.current?.scrollWidth - carousel.current?.offsetWidth)
        }
    }, [])

    return (
        <>
            <div className="slide-image">
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing" }}>
                    <motion.div
                        className="inner-webdesigner"
                        drag="x"
                        dragConstraints={{right: 0, left: -width}}
                        initial={{ x : 100 }}
                        animate={{ x : 0 }}
                        transition={{ duration: 0.8}}
                        >
                        {image.map(image => (
                            <motion.div className="item-webdesigner" key={image}>
                                <img src={image} alt="" />
                            </motion.div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti assumenda laborum voluptatum, eum numquam repellat dolore repudiandae reiciendis nobis similique ipsa, esse saepe, libero dolores. Laboriosam, tempore. Iste, fugit saepe.lorem</p>

        </>
    )
};  