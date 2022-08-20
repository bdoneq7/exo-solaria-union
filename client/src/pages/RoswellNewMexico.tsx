import styled from "styled-components";
import { Link } from "react-router-dom";
import RoswellHeader from "../images/ufo/roswellheader.jpg";
import Saucer from ".././images/ufo/saucer.png";
import RoswellDailyRecord from ".././images/ufo/RoswellDailyRecord.jpg";
import RameyDuboseDebris from ".././images/ufo/Ramey-dubose-debris.jpg";
import MarcellRoswellDebris from ".././images/ufo/Marcel-roswell-debris.jpg";


const BreadCrumbs = styled.div`
`;

const BrowseBackground = styled.div`
background-image: linear-gradient( 99.9deg, rgba(50,4,89,1) 21.2%, rgba(27,24,31,1) 84.8% );
width: 100%;
`;


const HeaderImage = styled.div`
width: 100%;
height: 400px;
margin-bottom: 20px;
`;

const ObservableContainer = styled.div`
width: 100%;
height: 175px;
`;

const SightingContainer = styled.div`
width: 100%;
height: 175px;
display: flex;
margin-bottom: 20px;
`;

const RoswellContainer = styled.div`
width: 100%;
height: 400px;
display: flex;
margin-bottom: 20px;
`;

const DescripContainer = styled.div`
width: 100%;
height: 350px;
display: flex;
margin-bottom: 20px;
`;

const FilterContainer = styled.div`
width: 100%;
height: 75px;
`;

const SightingImage = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 150px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;

const RoswellImage = styled.div`
flex: 1;
display: flex;
justify-content: center;
align-items: center;
width: 10%;
height: 325px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;



const SightingContent = styled.div`
flex: 1;
width: 87%;
height: 150px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;

const DescripContent = styled.div`
flex: 1;
width: 87%;
height: 325px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
margin-bottom: 20px;
padding: 10px;
`;

const ObservableContent = styled.div`
width: 97%;
height: 150px;
color: #000000;
background-color: #ffffff;
border: 2px solid #000000;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;

const FilterContent = styled.div`
width: 97%;
height: 50px;
color: #000000;
background-color: #F4D03F;
border: 2px solid #000000;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;





const RoswellNewMexico = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} <Link to="/UfoEncounters" >UFO / UAP Encounters</Link> {'>'} 1947 Roswell NewMexico Encounter
        </BreadCrumbs>

        <HeaderImage>
        <img src={RoswellHeader} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        </HeaderImage>

        

        


        <SightingContainer>

        <SightingImage>
        <img src={Saucer} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "500px", height: "125px"}}/>
        
        </SightingImage>

        <SightingContent>
         1947<br/>
           Roswell, New Mexico
        </SightingContent>
        
        </SightingContainer>

        <DescripContainer>

         <DescripContent>
         The Roswell incident is the 1947 recovery of balloon debris from a ranch near Corona, New Mexico by United States Army Air Forces officers from Roswell Army Air Field, and the conspiracy theories, decades later, claiming that the debris involved a flying saucer and that the truth had been covered up by the United States government. On July 8, 1947, Roswell Army Air Field issued a press release stating that they had recovered a "flying disc". The Army quickly retracted the statement and said instead that the crashed object was a conventional weather balloon.<br/><br/>

The Roswell incident did not surface again until the late 1970s, when retired lieutenant colonel Jesse Marcel, in an interview with ufologist Stanton Friedman, said he believed the debris he retrieved was extraterrestrial. Ufologists began promoting a variety of increasingly elaborate conspiracy theories, claiming that one or more alien spacecraft had crash-landed and that the extraterrestrial occupants had been recovered by the military, which then engaged in a cover-up.<br/><br/>

In 1994, the United States Air Force published a report identifying the crashed object as a nuclear test surveillance balloon from Project Mogul. A second Air Force report, published in 1997, concluded that stories of "aliens bodies" probably stemmed from test dummies being dropped from high altitude.

Conspiracy theories about the event nevertheless persist, and the Roswell incident continues to be of interest in popular media. The incident has been described as "the world's most famous, most exhaustively investigated, and most thoroughly debunked UFO claim".

The city of Roswell, New Mexico has capitalized on the event; the city's official seal now features a little green man while the city contains countless ufology attractions, events, statues and iconography.
         </DescripContent>

         </DescripContainer>


         <RoswellContainer>

        <RoswellImage>
        <img src={RoswellDailyRecord} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "500px", height: "300px"}}/>
        
        </RoswellImage>

        <RoswellImage>
        <img src={RameyDuboseDebris} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "500px", height: "300px"}}/>
        </RoswellImage>
        
        </RoswellContainer>


        <RoswellContainer>

<RoswellImage>
<img src={MarcellRoswellDebris} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "500px", height: "300px"}}/>

</RoswellImage>

<RoswellImage>
Image
</RoswellImage>

</RoswellContainer>





        <SightingContainer>

        <SightingContent>
           Videos
        </SightingContent>
        
        </SightingContainer>

        
        <SightingContainer>

        <SightingContent>
           Drawings
        </SightingContent>
        
        </SightingContainer>

        
        <SightingContainer>

        <SightingContent>
           Google Map
        </SightingContent>
        
        </SightingContainer>

        <SightingContainer>

        <SightingContent>
           Witnesses
        </SightingContent>
        
        </SightingContainer>

        <SightingContainer>

        <SightingContent>
           Physical Evidence
        </SightingContent>
        
        </SightingContainer>
         
        
        </BrowseBackground>
        
    
    );
};

export default RoswellNewMexico;