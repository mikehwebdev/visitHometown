import '../css/Activities.css'
import Card from './Card'
import blakeys from "/src/assets/img/Blakeys.jpg"
import common from "/src/assets/img/common.jpg"
import ducks from "/src/assets/img/ducks.jpg"

export default function Activities (){
    
    return (
        <div className="activities">
        <h1>Top three activities to do in Mulbarton</h1>
        <div className="card-container">
        <Card
                img={blakeys}
                title="Stop at our amazing Bus Café"
                description="Grab a nibble to eat and a hot cuppa at the amazing converted double decker bus café - Blakeys!"
           />
        <Card
                img={common}
                title="Visit Mulbarton Common"
                description="Explore the 45 acres of Mulbarton Common with it's many ponds and pits - and watch out for the rabbits!"
           />
         <Card
                img={ducks}
                title="Feed the ducks at the pond"
                description="Help our village keep our Crackers Quackers fat and healthy all year round"
           />   
           </div>
        </div>
    )
}