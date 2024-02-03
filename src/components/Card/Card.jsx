import './Card.css'


export default function Card({ photo }) {
    return (

        <>
            <div className="card-items">
                <img src={photo} alt="" />
            </div>
        </>)



}