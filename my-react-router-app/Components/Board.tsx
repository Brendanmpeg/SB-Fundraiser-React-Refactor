import { useState } from 'react'
import Box from 'Components/Box'

export default function Board() {

    const [Status, useStatus] = useState("")
    
    function handleBoxClick ({BoxId}: {BoxId: number}) {

    }
    
    return <>
    <div>
        {/* This div is for the board 'Title' and remove button */}
    </div>
    <table className='table-auto border-collapse border border-black-400 mx-auto'>
        <caption className='caption-top'>Board 1</caption>
        <tbody>
        <tr>
            <Box Id = {1} Status='Unassigned'/>
            <Box Id = {2} Status='Open'/>
            <Box Id = {3} Status='Sold'/>
            <Box Id = {4} Status='Paid'/>
            <Box Id = {5} Status='Assigned'/>
            <Box Id = {6} Status='Assigned'/>
            <Box Id = {7} Status='Assigned'/>
            <Box Id = {8} Status='Assigned'/>
            <Box Id = {9} Status='Assigned'/>
            <Box Id = {10} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {11} Status='Assigned'/>
            <Box Id = {12} Status='Assigned'/>
            <Box Id = {13} Status='Assigned'/>
            <Box Id = {14} Status='Assigned'/>
            <Box Id = {15} Status='Assigned'/>
            <Box Id = {16} Status='Assigned'/>
            <Box Id = {17} Status='Assigned'/>
            <Box Id = {18} Status='Assigned'/>
            <Box Id = {19} Status='Assigned'/>
            <Box Id = {20} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {21} Status='Assigned'/>
            <Box Id = {22} Status='Assigned'/>
            <Box Id = {23} Status='Assigned'/>
            <Box Id = {24} Status='Assigned'/>
            <Box Id = {25} Status='Assigned'/>
            <Box Id = {26} Status='Assigned'/>
            <Box Id = {27} Status='Assigned'/>
            <Box Id = {28} Status='Assigned'/>
            <Box Id = {29} Status='Assigned'/>
            <Box Id = {30} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {31} Status='Assigned'/>
            <Box Id = {32} Status='Assigned'/>
            <Box Id = {33} Status='Assigned'/>
            <Box Id = {34} Status='Assigned'/>
            <Box Id = {35} Status='Assigned'/>
            <Box Id = {36} Status='Assigned'/>
            <Box Id = {37} Status='Assigned'/>
            <Box Id = {38} Status='Assigned'/>
            <Box Id = {39} Status='Assigned'/>
            <Box Id = {40} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {41} Status='Assigned'/>
            <Box Id = {42} Status='Assigned'/>
            <Box Id = {43} Status='Assigned'/>
            <Box Id = {44} Status='Assigned'/>
            <Box Id = {45} Status='Assigned'/>
            <Box Id = {46} Status='Assigned'/>
            <Box Id = {47} Status='Assigned'/>
            <Box Id = {48} Status='Assigned'/>
            <Box Id = {49} Status='Assigned'/>
            <Box Id = {50} Status='Assigned'/>
        </tr>
                <tr>
            <Box Id = {51} Status='Assigned'/>
            <Box Id = {52} Status='Assigned'/>
            <Box Id = {53} Status='Assigned'/>
            <Box Id = {54} Status='Assigned'/>
            <Box Id = {55} Status='Assigned'/>
            <Box Id = {56} Status='Assigned'/>
            <Box Id = {57} Status='Assigned'/>
            <Box Id = {58} Status='Assigned'/>
            <Box Id = {59} Status='Assigned'/>
            <Box Id = {60} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {61} Status='Assigned'/>
            <Box Id = {62} Status='Assigned'/>
            <Box Id = {63} Status='Assigned'/>
            <Box Id = {64} Status='Assigned'/>
            <Box Id = {65} Status='Assigned'/>
            <Box Id = {66} Status='Assigned'/>
            <Box Id = {67} Status='Assigned'/>
            <Box Id = {68} Status='Assigned'/>
            <Box Id = {69} Status='Assigned'/>
            <Box Id = {70} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {71} Status='Assigned'/>
            <Box Id = {72} Status='Assigned'/>
            <Box Id = {73} Status='Assigned'/>
            <Box Id = {74} Status='Assigned'/>
            <Box Id = {75} Status='Assigned'/>
            <Box Id = {76} Status='Assigned'/>
            <Box Id = {77} Status='Assigned'/>
            <Box Id = {78} Status='Assigned'/>
            <Box Id = {79} Status='Assigned'/>
            <Box Id = {80} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {81} Status='Assigned'/>
            <Box Id = {82} Status='Assigned'/>
            <Box Id = {83} Status='Assigned'/>
            <Box Id = {84} Status='Assigned'/>
            <Box Id = {85} Status='Assigned'/>
            <Box Id = {86} Status='Assigned'/>
            <Box Id = {87} Status='Assigned'/>
            <Box Id = {88} Status='Assigned'/>
            <Box Id = {89} Status='Assigned'/>
            <Box Id = {90} Status='Assigned'/>
        </tr>
        <tr>
            <Box Id = {91} Status='Assigned'/>
            <Box Id = {92} Status='Assigned'/>
            <Box Id = {93} Status='Assigned'/>
            <Box Id = {94} Status='Assigned'/>
            <Box Id = {95} Status='Assigned'/>
            <Box Id = {96} Status='Assigned'/>
            <Box Id = {97} Status='Assigned'/>
            <Box Id = {98} Status='Assigned'/>
            <Box Id = {99} Status='Assigned'/>
            <Box Id = {100} Status='Assigned'/>
        </tr>
        </tbody>
    </table>
    </>
}