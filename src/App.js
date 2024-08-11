//npm modules:
import { motion } from "framer-motion"
import { useContext } from "react";
import { AnimatePresence } from "framer-motion";

//components:
import Header from "components/Header";
import Sidebar from "./components/Sidebar";
import ListPage from "./components/ListPage";
import AddPage from "./components/AddPage";
import TodayList from "./components/TodayList";
import WeekList from "./components/WeekList";
import InvalidInfoModal from "./components/InvalidInfoModal";

//context
import { AddModalContext } from "./context/AddModalContext";
import { PageContext } from "./context/PageContext";
import { InvalidInfoModalContext } from "./context/InvalidInfoModal";

export default function App(){
    const isModalVisible = useContext(AddModalContext)
    const isPage = useContext(PageContext)
    const isInvalidModal = useContext(InvalidInfoModalContext)
    return (
        <motion.div className="mainPage">
                <Header />
                <div className="body">
                    <Sidebar />
                    {isPage.home && <ListPage />}
                    {isPage.today && <TodayList />}
                    {isPage.week && <WeekList />}
                </div>
            <AnimatePresence>
                {isInvalidModal && <InvalidInfoModal />}
            </AnimatePresence>
            <AnimatePresence>
                {isModalVisible && <AddPage key="add"/>}
            </AnimatePresence>
        </motion.div>
    )
}