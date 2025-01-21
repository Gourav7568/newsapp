import React, { Component } from "react";
import{formatDistanceToNow} from "date-fns"
import Spinner from "./spinner";

class News extends Component {

    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0,
            cardInfo: [], // Array to store like and dislike info for each card
        };
    }


    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=f7401e037be644bcb3f5a3da071131e2&page=1&pagesize=12";

        let Parsedata;
        try {
            let data = await fetch(url);
            Parsedata = await data.json();
            if (Parsedata && Parsedata.articles) {
                const cardInfo = Parsedata.articles.map(() => ({
                    likes: 0,
                    liked: false,
                    dislikes: 0,
                    disliked: false,
                }));

                this.setState({
                    articles: Parsedata.articles,
                    totalResults: Parsedata.totalResults,
                    loading: false,
                    cardInfo: cardInfo,
                });
            }

        }
        catch (error) {
            console.error("Error fetching parsing data ", error);
        }
    }

    handleLike = (index) => {
        const newCardInfo = [...this.state.cardInfo];
        newCardInfo[index].liked = true;
        newCardInfo[index].likes += 1;

        this.setState({
            cardInfo: newCardInfo,
        });

        setTimeout(() => {
            newCardInfo[index].liked = false;
            this.setState({
                cardInfo: newCardInfo,
            });
        }, 1000);
    };

    handleDis = (index) => {
        const newCardInfo = [...this.state.cardInfo];
        newCardInfo[index].disliked = true;
        newCardInfo[index].dislikes += 1;

        this.setState({
            cardInfo: newCardInfo,
        });

        setTimeout(() => {
            newCardInfo[index].disliked = false;
            this.setState({
                cardInfo: newCardInfo,
            });
        }, 1000);
    };


    handPre = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f7401e037be644bcb3f5a3da071131e2&page=${this.state.page - 1}&pagesize=12`;
        this.setState({
            loading: true
        })
        let data = await fetch(url);
        let Parsedata = await data.json(data);
        this.setState({
            page: this.state.page - 1,
            articles: Parsedata.articles,
            loading: false
        })
    }

    handNex = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 12)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f7401e037be644bcb3f5a3da071131e2&page=${this.state.page + 1}&pagesize=12`;
            this.setState({
                loading: true
            })
            let data = await fetch(url);
            let Parsedata = await data.json(data);
            this.setState({
                page: this.state.page + 1,
                articles: Parsedata.articles,
                loading: false
            })
        }
    }

    render() {
        return (
            <>
                {this.state.loading && <Spinner />}
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {!this.state.loading && this.state.articles.map((element, index) => {
                        // Calculate the time difference
                        const lastUpdatedTime = formatDistanceToNow(
                            new Date(element.publishedAt) // Use the actual publishedAt time from the article
                        );
                        return (

                            <div className="col" key={element.url}>
                                <div className="card">
                                    {/* Card content */}
                                    <img src={element.urlToImage ? element.urlToImage : "https://tse4.explicit.bing.net/th?id=OIP.eNTrYCjaqmA8zJ5VRIxPhwHaE3&pid=Api&P=0&h=180"} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="fw-bold">{element.source.name}</h5>
                                        <p className="card-text">{element.description ? element.description : "Want to know more about this news click on button that is given below"}</p>
                                        <a href={element.url} className="btn btn-dark">Read More</a>
                                        <p className="card-text mt-3"><small className="text-body-secondary">Last updated {lastUpdatedTime} ago</small></p>
                                    </div>
                                    <div className="thumb">
                                        <i className={`fa-regular fa-thumbs-up ${this.state.cardInfo[index].liked ? 'liked' : ''}`} onClick={() => this.handleLike(index)}>
                                            {this.state.cardInfo[index].likes}
                                        </i>
                                        <i className={`fa-regular fa-thumbs-down ${this.state.cardInfo[index].disliked ? 'disliked' : ''}`} onClick={() => this.handleDis(index)}>
                                            {this.state.cardInfo[index].dislikes}
                                        </i>
                                    </div>
                                </div>
                            </div>

                        );
                    })}
                </div>

                {/* Navigation section */}
                <div className="butt d-flex justify-content-around">
                    <button disabled={this.state.page <= 1} className="btn btn-secondary " onClick={this.handPre}><i className="fa-solid fa-arrow-left fa-sm"></i> Prev</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 12)} className="btn btn-secondary " onClick={this.handNex}>Next <i className="fa-solid fa-arrow-right fa-sm"></i></button>
                </div>

            </>
        );
    }
}



export default News;
