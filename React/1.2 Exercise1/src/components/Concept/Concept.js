function Concept({data}){
    const image = data.image;
    const title = data.title;
    const description = data.description;
    return(
        <li className="concept">
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p>{description}</p>
        </li>
    )
}
export default Concept;