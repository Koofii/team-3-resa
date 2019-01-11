import React from 'react';
import './index.css';

export class Ratings extends React.Component {

    state = {
        ratings: [],
        comments: []
    };

    //hämtar ratings
    componentWillMount() {
        fetch('http://localhost:3001/getallratings')
        .then(res => res.json())
        .then(data => this.setState({
            ratings: data,   
        }))
    }

    componentDidUpdate(){
        this.printStars();
    }

    //funktionen för att visa stars
    printStars(){
        let starValues = 0;
        let commentCount = 0;
        let roundValue = 0;
        let stars=[];

        this.state.ratings.forEach(element => {
          if(element.id === this.props.id){
              starValues += element.rating;
              commentCount++;
              roundValue = Math.round((starValues/commentCount))
          }
        });

        for (let i= 0; i<5; i++) {
           if(i < roundValue){
             stars.push('<span class="fa fa-star checked" style="color:orange"></span>');
           }
           else{
               stars.push('<span class="fa fa-star"></span>');
           }
        }
         stars = stars.toString().replace(/,/g, '');
         document.getElementById("star-container").innerHTML = stars + "(" + commentCount +")";
    }

    //funktionen för att printa kommentarer
    printComments(){
        let comments = [];
        this.state.ratings.forEach(element => {
            if(element.id === this.props.id){
               comments.push(element)
            }
          });
          this.setState({comments:comments});
    }

    render (){

        return(
            <div className="ratings">
                  <div id="star-container"></div>
                  <div className="btn-show-more" onClick={() => this.printComments()}>Visa recensioner</div>
                  {this.state.comments.map((index,key) =>
                    <div className="comment-box">
                       <h4 key={key}>{" Stars : "+ index.rating}</h4>
                       <p key={key}>{"Name : "+index.name}</p>
                       <p key={key}>{"Comment :"+index.comment + " stars"}</p>
                    </div> )}
            </div>
        )
    }
}

export default Ratings;