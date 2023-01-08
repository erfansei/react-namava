import "./style.css"
export default function MoviesSpecial(props){
    const {data} = props;
    function renderFarm(){
        return data.movie.map(function (item){
            return (
                <li>
                    <img src={item.image} alt="تصویر فیلم" />
                    <div>{item.title}</div>
                    <div className="hoverbox">
                        <div>{item.type}</div>
                        <div>{item.year}</div>
                        <div>{item.rate}</div>
                        <div>{item.imdb}</div>
                        <div>{item.subtitle}</div>
                    </div>
                </li>
            )    
        })
    }
    return(
        <div className="container">
            <h1>ویژه</h1>
            <div className="movie-sbox">
                <ul className="ul-tag">{renderFarm()}</ul>
            </div>
        </div>
    )
}