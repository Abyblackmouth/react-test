
export default function CardProducts ( props ) {
    return(
        <div className="card">
            <h2>{props.name}</h2>
            <div className="image-container"></div>
            <img className="cover" src={props.image} alt="" />
            <h3>{props.description}</h3>
            <h4>{props.url}</h4>
        </div>

    )

}