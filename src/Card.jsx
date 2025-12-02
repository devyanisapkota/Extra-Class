import lotus from "./assets/lotus.jpg"
function Card(){
    return(
        <div className="card">
            <img src={lotus} alt="card-img" className="card-image"></img>
            <h2>Devyani Sapkota</h2>
            <p>Student at CCT</p>

        </div>
    );
}


export default Card