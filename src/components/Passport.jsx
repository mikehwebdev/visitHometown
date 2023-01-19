import '../css/Passport.css'
import mike from "/src/assets/img/mike.jpg"

export default function Passport(){
    return (
        <>
        <div className="passport">
            <img src={mike}/>
            <div className="flex-details">
                <h1>Your guide</h1>
                <p>"I've lived in Mulbarton for more than 5 years so I can show you around all the amazing sites and beautiful nature on offer in our village"</p>
                <h2>Mike Hatton</h2>
            </div>
        </div>
        </>
    )
}