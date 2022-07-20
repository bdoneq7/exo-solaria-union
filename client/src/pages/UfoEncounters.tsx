import styled from "styled-components";
import { Link } from "react-router-dom";
import UfoHeader from "../images/ufoheader.jpg";
import SaucerIcon from "../images/ufo/saucer_icon.png";
import TriangleIcon from "../images/ufo/triangle_icon.png";
import TicTacIcon from "../images/ufo/tictac_icon.png";



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

const SightingContainer = styled.div`
width: 100%;
height: 200px;
`;

const SightingContent = styled.div`
width: 97%;
height: 150px;
color: #ffffff;
background-color: #1A5276;
border: 2px solid #ffffff;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;

const ObservableContent = styled.div`
width: 97%;
height: 150px;
color: #000000;
background-color: #F4D03F;
border: 2px solid #000000;
border-radius:25px;
margin-left: 20px;
margin-right: 20px;
padding: 10px;
`;





const UfoEncounters = () => {

    



    return (
        
        
        <BrowseBackground>

        <BreadCrumbs className="breadcrumbs">
        <Link to="/dashboard" >Dashboard</Link> {'>'} UFO / UAP Encounters
        </BreadCrumbs>

        <HeaderImage>
        <img src={UfoHeader} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100%", height: "100%"}}/>
        </HeaderImage>

        <SightingContainer>
        <ObservableContent>
            6 UFO OBSERVABLES:<br/><br/>
            1. Instantaneous Acceleration &nbsp;&nbsp;
            2. Hypersonic Velocity (3,700 MPH +) &nbsp;&nbsp;
            3. Trans-Medium Travel (Move through Air, Water, Space) &nbsp;&nbsp;
            4. Anti-Gravity (No Visible Means of Propulsion) &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            5. Low Observability &nbsp;&nbsp;
            6. Biological Effects
            </ObservableContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            June 1947: Mount Rainier, Washington [GLOWING UFO'S]<br/><br/>
            Civilian pilot Kenneth Arnold reported seeing nine glowing objects flying in a “V” formation over Mount Rainier—at an estimated speed of 1,700 m.p.h. He compared their motion to “a saucer if you skip it across water,” which news reports translated as the shape of the crafts themselves. Air Force investigators deemed Arnold a credible witness, but concluded what he had seen was a mirage.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            June 28, 1947: Maury Island, Washington [DONUT-SHAPED UFO'S]<br/><br/>
            After Harold Dahl, his son and dog saw six donut-shaped UFOs over their boat in Puget Sound, the strange crafts started raining metallic debris. (The pooch didn't survive.) The next day, Dahl was visited by a man in a black suit who somehow knew all the details. His message? Forget the whole thing—or suffer consequences.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Summer 1947: Roswell, New Mexico [SAUCER-SHAPED UFO] <img src={SaucerIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/>
        <br/><br/>
            After U.S. Army Air Forces shockingly announced they had recovered remnants of a “flying disc” from a New Mexico ranch, officials quickly backtracked, claiming the debris actually came from a downed “weather balloon.” Decades later, the Air Force admitted they’d concocted that story to cover the fact that the wreckage came from an aerial spy device. Conspiracy theories endure about captured aliens and government cover-ups.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            July 1948: Montgomery, Alabama [CIGAR-SHAPED UFO]<br/><br/>
            Two Eastern Air Lines pilots, flying in the wee hours, reported seeing a cigar-shaped aircraft with two rows of windows. But after investigators generated a top-secret report, the Air Force incinerated it. Some wonder if the craft was Soviet, or part of the rocketry tests being run by former Nazi aerospace engineers spirited to the U.S. after the war.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Oct 1, 1948: Fargo, North Dakota [WHITE-LIGHT UFO]<br/><br/>
            A WWII veteran fighter pilot was just finishing a cross-country flight when a strange white light appeared on his wing. After it made aggressive moves, he engaged with it in the night sky for 27 minutes—but it outmaneuvered his plane, sometimes at speeds exceeding 400 m.p.h. The government called it a weather balloon.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Dec 1948: Los Alamos, New Mexico [BALLS OF FIRE UFO'S]<br/><br/>
            Witnesses reported seeing “green balls of fire” in the skies around the Los Alamos and Sandia atomic-weapons laboratories and other highly sensitive military installations. In one instance, the fireball raced head-on toward a plane, forcing the pilot to swerve. Some explanations: Soviet spy devices, nuclear fallout debris or an alternate form of lightning.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Aug 1951: Lubbock, Texas [BLUE-GREEN LIGHT UFO'S] <br/><br/>
            Over a two-week stretch, hundreds of residents in this university town—including several prominent scientists—saw mysterious blue-green lights streaking across the night sky. One Texas Tech freshman snapped pictures, which show a cluster of lights in a “V” formation. The official explanation: migratory birds reflecting street lights.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            July 1952: Washington, D.C. [SAUCER UFO'S] <img src={SaucerIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/><br/>
            One air-traffic controller at National Airport joked about the radar blips being flying saucers. But after colleagues saw them too—and after the lights buzzed the Capitol and Whit House—fighter jets were deployed. As newspaper headlines screamed “Saucers Swarm Over Capital,” the Air Force blamed a temperature inversion.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Aug 1952: Everglades, Florida [SAUCER UFO - RED MIST] <img src={SaucerIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/><br/>
            Scoutmaster Sonny DesVergers was driving some Boy Scouts near West Palm Beach when they saw a bright light flash over a palmetto grove. He stopped to investigate—and later emerged terrified, with burns on his arms and a tale of a 30-foot diameter saucer that had enveloped him in a red mist. Grass in the grove was singed, and its roots charred.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Sep 1952: North Yorkshire, England [UNKNOWN UFO'S]<br/><br/>
            Numerous UFO reports emerged during NATOs Exercise Mainbrace, the largest peacetime military exercise since World War II, organized in the North Atlantic. In one case, officers and crew at a RAF base reported a sighting so perplexing that even Prime Minister Winston Churchill demanded details.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Nov 23, 1953: Keweenaw Point, Michigan [UNKNOWN UFO]<br/><br/>
            When radar picked up an unidentified craft in restricted airspace over Lake Superior, a F-89C Scorpion jet was scrambled to intercept. After the two blips briefly locked together on radar, the Scorpion vanished—and the UFO sped off. Wreckage was never found, and the Air Force gave conflicting explanations to the pilot’s widow.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Dec 1980: Rendlesham Forest, England [TRIANGULAR AND LIGHT UFO'S] <img src={TriangleIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/> <br/><br/>
            The UKs most notorious UFO incident happened in a pine forest adjacent to two NATO air force bases, RAF Bentwaters and RAF Woodbridge. Over several nights at Christmastime, credible military witnesses reported strange colorful lights above and in the forest. A patrol sent to investigate observed a triangular craft at close range; one deputy base commander made a now-famous audiotape of the encounter.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            1995: Alaska? [VERY BRIGHT GLOWING UFO DESCENDS AND ASCENDS FROM AURORA BOREALIS] <br/><br/>
            Pilots on KC-135 Aircraft on mission to resupply bombers
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            March 13, 1997: Phoenix, Arizona [BLACK TRIANGLE UFO] <img src={TriangleIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/><br/>
            Lights of varying descriptions were seen by thousands of people between 7:30 pm and 10:30 pm MST, in a space of about 300 miles (480 km), from the Nevada line, through Phoenix, to the edge of Tucson. There were two distinct events involved in the incident: a triangular formation of lights seen to pass over the state, and a series of stationary lights seen in the Phoenix area. 
        </SightingContent>
        </SightingContainer>
        
        <SightingContainer>
        <SightingContent>
            November 10, 2004: USS Nimitz Carrier Group in Pacific Ocean near San Diego [WHITE TIC TAC UFO'S] <img src={TicTacIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/><br/>
            White, wingless 40 to 45 feet long UFOs that looked like a Tic Tac, engaged with top-gun fighter pilots from the USS Nimitz carrier strike group. Both pilots and radar operators reported that the objects traveled at hypersonic speeds, appeared to be intelligently controlled and possessed aerodynamic capabilities that far surpass any currently known aircraft technology.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Jan 8, 2008: Stephensville, TX [SAUCER UFO] <img src={SaucerIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/>
            Dozens of people — including a pilot and a police officer — said a UFO hovered over the farming community. The unidentified object was described as being 1 mile by 0.5 miles with flashing strobe lights — and it was totally silent.
            The UFO sped away at more than 2,100 mph, followed by two F-16 fighter jets that were hopelessly outmaneuvered.
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            2014: East Coast Fighter Jets Encounter<br/> 
            Cube inside translucent Sphere<br/>
            Tic Tacs <img src={TicTacIcon} alt="Browse Star Systems" title="Browse Star Systems" style={{color: "#ffffff", width: "100px", height: "31px"}}/><br/>
            Saucers
        </SightingContent>
        </SightingContainer>

        <SightingContainer>
        <SightingContent>
            Mar 2015: USS Theodore Roosevelt<br/>
            Circular Objects Shadowed Carrier Group to Middle East from East Coast
        </SightingContent>
        </SightingContainer>
         
        
        </BrowseBackground>
        
    
    );
};

export default UfoEncounters;