import React from 'react';
import './GalaxyStatsStyles.css';
import { IoStatsChart } from "react-icons/io5";



const GalaxyStats = () => {
    return  (
        <div className='galaxystats'>
            <div className='container'>
                <div className='content'>
                <h2><IoStatsChart className='iconmain' /><span> Milky Way Galaxy</span> Stats</h2>
                    
                    <div class="numbers">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--1" data-fake="8642519073">4</span>
    </span>
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--4" data-fake="0992343334">0</span>
    </span>
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--3" data-fake="8395216407">0</span>
    </span>
    <span class="numbers__windowtext">
        Billion Estimated Stars
    </span>
</div>


<div class="numbers">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--5" data-fake="8642519073">3</span>
    </span>
    <span class="numbers__windowtext">
        Trillion Estimated Planets
    </span>
</div>

<div class="numbers">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--5" data-fake="8642519073">1</span>
    </span>
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--5" data-fake="8642519073">0</span>
    </span>
    <span class="numbers__windowtext">
        Billlion Estimated Habitable Planets
    </span>
</div>

<div class="numbers">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--5" data-fake="8642519073">5</span>
    </span>
   
    <span class="numbers__windowtext">
        Earth-Like Planet Candidates Found
    </span>
</div>

<div class="numbers">
    <span class="numbers__window">
        <span class="numbers__window__digit numbers__window__digit--5" data-fake="8642519073">1</span>
    </span>
   
    <span class="numbers__windowtext">
        Truly Earth-Like Planet Known
    </span>
</div>

                    
                
                  
               
                    <div>
                        
                    </div>
                </div>
            </div>

        </div>
    )
}

export default GalaxyStats;
