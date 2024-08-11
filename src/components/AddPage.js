//npm modules:
import { useContext, useState } from "react"
import { motion } from "framer-motion";

//contexts:
import { SetModalContext } from "../context/AddModalContext";
import { ListContext } from "../context/ListContext";
import { SetListContext } from "../context/ListContext";
import { ShowInvalidInfoModalContext } from "../context/InvalidInfoModal";

//Components
import TodayList from "./TodayList";

export default function AddPage(){
    const [toDoList, setList] = useState({title: "", date: "", prior: ""});
    const setModalVisibility = useContext(SetModalContext)
    const list = useContext(ListContext)
    const setListC = useContext(SetListContext)
    const setInvalidIndoModal = useContext(ShowInvalidInfoModalContext)

    function titleInpHandler(e){
        setList(prev=>{
            return {...prev, title: e.target.value}
        })
    }

    function dateInpHandler(e){
        setList(prev=>{
            return {...prev, date: e.target.value}
        })
    }

    function priorInpHandler(e){
        setList(prev=>{
            return {...prev, prior: e.target.id} 
        })
    }

    function submitHandler(event){
        event.preventDefault();
        if(!toDoList.title && !TodayList.date){
            setInvalidIndoModal(true)
            return
        }
        setListC(prev => [...prev, toDoList])
        closeModal();
    }

    function closeModal(){
        setModalVisibility(false);
    }
    return(
        <motion.div className="addPage"
            initial={{opacity: 0, display: "none"}}
            animate={{opacity: 1, display: "flex"}}
            exit={{opacity: 0, transition:"opacity 0.3s"}}
            transition={{duration: 0.5}}
        >
            <motion.div className="addPageModal">
                <h1>Create a new...
                    <button className="exit" onClick={closeModal}><img src={require(`../images/x-solid.svg`)} alt="close button image" /></button>
                </h1>
                <form className="addItem" action="">
                    <input type="text" className="title" placeholder="What do you want to do?" onInput={titleInpHandler}/>
                    <div className="Box">
                        <div className="dateBox">
                            <label htmlFor="date">Due Date: </label>
                            <input type="date" name="date" id="date" onInput={dateInpHandler}/>
                        </div>
                        <div className="priorityBox">
                            <label htmlFor="priority">Priority: </label>
                            <label>
                                <input type="radio" name="priority" className="prior" id="P1" onClick={priorInpHandler}/>
                            P1</label> 
                            <label>
                                <input type="radio" name="priority" className="prior" id="P2" onClick={priorInpHandler}/>
                            P2</label>
                            <label >
                                <input type="radio" name="priority" className="prior" id="P3" onClick={priorInpHandler}/>
                            P3</label>
                        </div>
                    </div>
                    <button type="submit" onClick={submitHandler}>Add</button>
                </form>
            </motion.div>
        </motion.div>
    )
}