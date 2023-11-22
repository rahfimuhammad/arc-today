import React from "react"
import { useFetch, useDetect } from "../hooks/hooks"
import "./traditionalBoatsOfIndonesia.css"
import Navbar from "../components/Navbar"
import { useEffect, useState, useRef } from "react"
import Grid from "../assets/trb-Grid.svg"

const TraditionalBoatsOfIndonesia = () => {

    const orientation = useDetect()
    const data = useFetch("https://prehistoric.cyclic.app//traditionalBoats")
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliderRef = useRef(null);
    const [toggle, setToggle] = useState(false)
    const [modal, setModal] = useState([])
    const [trigger, setTrigger] = useState(0)

    useEffect(() => {

        const handleScroll = () => {
                   
            const scrollXValue = sliderRef.current.scrollLeft;
                return  setTrigger(scrollXValue)};
                
                sliderRef.current.addEventListener('scroll', handleScroll);}, []);

    const handleNext = () => {
            
            const newIndex = sliderRef.current.scrollLeft + sliderRef.current.offsetWidth ;
            setCurrentIndex(newIndex);
            snapToSlide(newIndex);
                         };
                      
    const handlePrev = () => {
                        
            const newIndex = sliderRef.current.scrollLeft - sliderRef.current.offsetWidth ;
            setCurrentIndex(newIndex);
            snapToSlide(newIndex);
                         };
                      
    const snapToSlide = (key) => {
                           
            sliderRef.current.scrollTo({
                left: key,
                behavior: 'smooth'});
                };

    useEffect(() => {
            
        setTrigger(sliderRef.current.scrollLeft)
                                    
                },[])

    const getModal = (index) => {

        setModal(data[index])
        setToggle(!toggle)
        }

    let closeModal = () => {
        setModal([])
        setToggle(!toggle)
        }

    useEffect(() => {
        
        window.scrollTo(0, 0)
        alert("Database masih dalam pengembangan")
            },[])
        
    const mapContent = () => {
                
        return data.map((value, index) => {
                return (
                    <div className="boatsContentContainer" key={index}>
                        <div className={orientation? "boatsContentWrapperPortrait": "boatsContentWrapperLandscape"} style={{width: "90%"}}>
                            <div className={orientation? "boatsDescriptionPortrait" : "boatsDescriptionLandscape"}>
                                <div className="descriptionWrapper">
                                    <div className={orientation? "boatsTitle" : "boatsTitleLandscape"}><h2>{value.name}</h2></div>
                                    <div className="boatsLine" style={{padding: orientation? "0 3vw" : "0 1vw"}}></div>
                                    <div className={orientation? "boatsSummary" : "boatsSummaryLandscape"}>
                                        <p style={{textAlign: "justify", display: orientation? "" : "none"}}>{value.summary}<span style={{cursor: "pointer"}} onClick={() => getModal(index)}><b><u> selengkapnya...</u></b></span></p>
                                        <p style={{textAlign: "justify", display: orientation? "none" : ""}}>{value.description}</p>
                                    </div>
                                </div>
                            </div>
                            <div className={orientation? "boatsImagePortrait" : "boatsImageLandscape"}>
                                <h3 className={orientation? "boatsImageSourcePortrait" : "boatsImageSourceLandscape"}>{value.source}</h3>
                                <div className={orientation? "boatsImage" : "boatsImageLand"}  style={{position: "absolute", backgroundColor: "#2c363b", backgroundSize: "120px 120px", backgroundRepeat: "repeat", backgroundImage: `url(${Grid})`}}></div>
                                <div className={orientation? "boatsImage" : "boatsImageLand"} style={{position: "absolute", backgroundSize: "100% auto", backgroundPosition: "center bottom", backgroundRepeat: "no-repeat", backgroundImage: `url(${value.image})`}}></div>
                            </div>
                        </div>
                    </div>       
                    )
                })
            }
    
    return (
        <>
            <div className="mainBoatsContainer">
                <div style={{position: "fixed", zIndex: "13"}}>
                    <Navbar/>
                </div>
                <div className="buttonContainer" style={{display:"flex", flexDirection: "row",justifyContent: "space-between", position: "absolute", zIndex:"12", bottom: "5vh", right: "5%", width: "30vw", height: "5vw"}}>
                    <div onClick={handlePrev} className="prevButtonContainer"  id={orientation || trigger < window.innerWidth? "buttonContainerFalse" : "buttonContainerTrue"} style={{display:"flex", justifyContent: "center", alignItems: "center", width: "14vw", height: "100%", cursor: "pointer", border: "2px solid rgb(48, 67, 89)"}}>
                         <div className="prevButton" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "12.5vw", height: "3.5vw", border: "2px solid rgb(48, 67, 89)"}}>
                             <h3 className="boatsImageSourceLandscape" style={{position: "static", color: "rgb(48, 67, 89)"}}>prev</h3>
                         </div>
                     </div>
                     <div onClick={handleNext} type="button" className="nextButtonContainer" id={orientation || trigger < window.innerWidth? "buttonContainerFalse" : "buttonContainerTrue"} style={{display: currentIndex < 0? "none" : "flex", justifyContent: "center", alignItems: "center", width: "14vw", height: "100%", cursor: "pointer", border: "2px solid rgb(48, 67, 89)"}}>
                         <div className="nextButton" style={{display: "flex", justifyContent: "center", alignItems: "center", width: "12.5vw", height: "3.5vw", border: "2px solid rgb(48, 67, 89)"}}>
                             <h3 className="boatsImageSourceLandscape" style={{position: "static", color: "rgb(48, 67, 89)"}}>next</h3>
                         </div>
                     </div>
                 </div>
                <div className="scroller snapsInline" style={{backgroundColor: "#2c363b", backgroundImage: `url(${Grid})`, backgroundRepeat: "repeat"}} ref={sliderRef}>
                    <div className="boatsContentContainer">
                        <div className={orientation? "coverWrapper" : "landscapeCoverWrapper"} style={{width: "100vw", height: "100vh", zIndex: "14", position: "absolute"}}>
                            <div onClick={handleNext} className={orientation? "enter" : "enterLandscape"} style={{border: "none", position: "absolute"}}><h2>Test</h2></div>
                         </div>
                     </div>       
                    {mapContent()}      
                </div>
                {toggle && <div className="boatsModalContainer" onClick={closeModal} style={{display: orientation? "flex" : "none", position: "absolute", zIndex: "14", top: "0", left: "0", width: "100%", height: "100vh", backgroundColor: "rgb(0, 0, 0, 0.8)"}}>
                    <div className="boatsModal">
                        <p style={{textAlign: "justify", padding: "3vw 3vw"}}>{modal.description}</p>
                    </div>
                </div>}
            </div>
        
        </>
    )
}

export default TraditionalBoatsOfIndonesia