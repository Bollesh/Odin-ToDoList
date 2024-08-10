//npm modules:
import { motion } from "framer-motion"
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

//components:
import Header from "components/Header";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";
import AddPage from "./components/AddPage";

//context
import { AddModalContext } from "./context/AddModalContext";

export default function App(){
    // console.log(AddModalContext)
    const isModalVisible = useContext(AddModalContext)
    console.log(isModalVisible)
    return (
        <motion.div className="mainPage">
                <Header />
                <div className="body">
                    <Sidebar />
                    <ListPage />
                </div>
            <AnimatePresence>
                {isModalVisible && <AddPage key="add"/>}
            </AnimatePresence>
        </motion.div>
    )
}