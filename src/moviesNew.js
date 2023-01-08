import "./style.css"
export default function MoviesNew(erfan){
    const {data} = erfan;
    function renderFarm2(){
        return data.nMovie.map(function(item){
            return(
                <li>
                    <img src={item.image} alt="تصویر فیلم"/>
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
    return (
        <div className="container">
            <h1>تازه های نماوا</h1>
            <div className="movie-nbox">
                <ul className="ul-tag">{renderFarm2()}</ul>
            </div>
        </div>
    )
}