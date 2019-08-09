import React from "react"
import './title.css'


class Title extends React.Component{
    render(){
        return(
            <div class="jumbotron jumbotron-fluid title-container">
  <div class="container">
    <h1 class="display-4 title">Justine Liastrat</h1>
    <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
  </div>
</div> 
        );
        
    }
}
export default Title;
