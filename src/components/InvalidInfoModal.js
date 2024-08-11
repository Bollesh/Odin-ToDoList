import { motion } from "framer-motion";
import { useContext } from "react";

import { ShowInvalidInfoModalContext } from "../context/InvalidInfoModal";

export default function InvalidInfoModal(){
    const setInvalidIndoModal = useContext(ShowInvalidInfoModalContext);

    function closeInvalidInfoModal(){
        setInvalidIndoModal(false);
    }
    return (
        <motion.div 
            initial={{opacity: 0, y: -1000}}
            animate={{opacity: 1, y: 1}}
            exit={{y: -1000}}
            transition={{type: "spring", stiffness: 80}}
            className="invalidInfoModal"
        >
            <div className="invalidInfo">
                <div className="invalidInfoHeader"><button className="closeInvalidInfo" onClick={closeInvalidInfoModal}><img src={require("../images/x-solid.svg")} alt="" className="exit" /></button></div>
                <h1>PLS enter a title and select a due date</h1>
            </div>
        </motion.div>
    )
}