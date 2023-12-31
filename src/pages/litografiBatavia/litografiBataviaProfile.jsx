import React from "react";
import { useParams, Link } from "react-router-dom";
import { useDetect } from "../../hooks/hooks";
import { useEffect, useState } from "react";
import {motion} from "framer-motion"
import axios from "axios";
import './litografiBatavia.css'
import BackButton from "../../assets/icon-backButton.png"
import CloseButton from "../../assets/icon-closeButton.png"
import Post from "../../assets/icon-post.png"
import NonBatavia from "../../assets/icon-nonBatavia.png"
import MuseumLogo from "../../assets/icon-museumLogo.png"



const LitografiBataviaProfile = () => {


    const {id} = useParams()
    const index = parseInt(id)
    const [passing, setPassing] = useState([])
    const [modal, setModal] = useState([])
    const [toggle, setToggle] = useState(false)
    const orientation = useDetect()
    const [active, setActive] = useState(null)
    const [state, setState] = useState(passing)


    const onGetData = async() => {

        try {
            let response = await axios.get(
                "https://prehistoric.cyclic.app/litografiBatavia"
                )
            setPassing(response.data[index])
        } 
        catch (error) {
        }
    }

    useEffect(() => {
        onGetData()
        window.scrollTo(0, 0)
      }, [])

    const stateDeclaration = () => {

        if (active === null || active === true) {
            return setState(passing.workBatavia)
        }
        else if (active === false) {
            return setState(passing.workNonBatavia)}
    }
   

    useEffect(() => {
        stateDeclaration()
        // console.log(state)
    })

    const getModal = (index) => {
            setModal(state[index])
            setToggle(!toggle)
    }

    let closeModal = () => {
        setModal([])
        setToggle(!toggle)
    }

    useEffect(() => {
        
        if (toggle) {
          document.body.style.overflow = 'hidden'}
        else {
            document.body.style.overflow = 'unset'}
      }, [toggle])

    const feedsMap = () => {

        return state === undefined? 
                
            "" :    state.map((a, b ) => {

                        return (
                            <div className={orientation? "feedThumbnail" : "landscapeFeedThumbnail"}>
                            <div className={orientation? "feedThumbnailImage" : "landscapeFeedThumbnailImage"}
                                style={{backgroundImage: `url(${a.thumbnail})`,
                                        backgroundPosition: "center center",
                                        backgroundSize: "150% auto",
                                        cursor: "pointer"}} 
                                key={a.id}
                                onClick={() => getModal(b)}>
                            </div>
                        </div> 
                        )})
                    }

    return (
        <>
            <div className={orientation? "profileContainer" : "landscapeProfileContainer"}>
                <div className={orientation? "profileHeader" : "landscapeProfileHeader"}>
                    <Link to="/litografi-batavia" className={orientation? "backButton" : "landscapeBackButton"}>
                        <img src={BackButton}/>
                    </Link>
                    <div className={orientation? "authorNickName" : "landscapeAuthorNickname"}>
                        <h1>Profile</h1>
                    </div>
                </div>

                <div className={orientation? "bioWrapper" : "landscapeBioWrapper"}>
                <div className={orientation? "authorBio" : "landscapeAuthorBio"}>
                    <div className={orientation? "bioProfile" : "landscapeBioProfile"}>
                        <span style={{backgroundImage: `url(${passing.picture})`, backgroundSize: "105% auto", backgroundPosition: "center center"}}></span>
                        <div className="nameContainer" style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                            <h1 className={orientation? "authorName" : "landscapeAuthorName"}>{passing.nickName}</h1>
                            <h2 className={orientation? "activeYear" : "landscapeActiveYear"} style={{margin: "0", color: "rgb(107, 108, 109)"}}>{passing.year}</h2>
                        </div>
                    </div>
                    <div className={orientation? "bioDescription" : "landscapeBioDescription"}>
                        <h1>{passing.author}</h1>
                        <h2 style={{color: "#6b6c6d"}}>{passing.employment}</h2>
                        <p>{passing.story}</p>
                    </div>
                </div>


                <div className={orientation? "authorWork" : "landscapeAuthorWork"} style={{display: "flex", flexDirection: "column"}}>
                    <div className={orientation? "workPanel" : "landscapeWorkPanel"}>
                        <div className={orientation? "bataviaPanel" : "landscapeBataviaPanel"} onClick={() => setActive(true)} style={{cursor: "pointer"}}>
                            <div className={orientation? "activeBar" : "landscapeActiveBar"} id={active === true || active === null? "selected" : "notSelected" }></div>
                            <img src={Post} alt="post"/>
                        </div>
                        <div className={orientation? "nonBataviaPanel" : "landscapeNonBataviaPanel"} onClick={() => setActive(false)} style={{cursor: "pointer"}}>
                            <div className={orientation? "activeBar" : "landscapeActiveBar"} id={active === true || active === null? "notSelected" : "selected" }></div>
                            <img src={NonBatavia}/>
                        </div>
                    </div>
                    <div className={orientation? "work" : "landscapeWork"}>
                        <div className="workContainer">
                            {feedsMap()}
                        </div>
                    </div>
                </div>
            </div>
            </div>
            {toggle &&             
            <div style={{position: "fixed", width: "100%", 
                        height: "100vh", zIndex: "12", 
                        top: 0, left: "0", right: "0", 
                        bottom: "0", display: "flex", 
                        justifyContent: "center", alignItems: "center"}}>
                <div className="modalOverlay" 
                                onClick={closeModal}
                                style={{position: "absolute",
                                        top: "0",
                                        bottom: "0",
                                        left: "0",
                                        right: "0",
                                        backgroundColor: "rgba(0, 0, 0, .7)",
                                        zIndex: "12"}}>
                </div>

                <motion.div className={orientation? "litografiModal" : "landscapeLitografiModal"} 
                     style={{position: "absolute", zIndex: "13"}}
                     initial={{
                        scale: 0
                    }}
                    animate={{
                        scale: 1
                    }}>
                    <div className={orientation? "modalTitle" : "landscapeModalTitle"}>
                        <div className="modalTitleWrapper">
                            <h1>{modal.title}</h1>
                        </div>
                        <img onClick={closeModal} src={CloseButton} style={{cursor: "pointer"}}/>
                    </div>
                    <div className={orientation? "test" : "landscapeTest"}>
                        <div className={orientation? "modalImageContainer" : "landscapeModalImageContainer"}>
                            <img src={modal.thumbnail}/>
                        </div>
                        <div className={orientation? "test2" : "landscapeTest2"}>
                            <div className={orientation? "litografiSource" : "landscapeLitografiSource"}>
                                <img src={MuseumLogo} alt="logo museum"/>
                                <p><b>publikasi </b>{modal.source}</p>
                            </div>
                            <div className={orientation? "modalContent" : "landscapeModalContent"}><p><b>{modal.author} </b>{modal.description}</p></div>
                        </div>
                    </div>
                    
                </motion.div>
            </div>
            }
        </>
    )
}

export default LitografiBataviaProfile


