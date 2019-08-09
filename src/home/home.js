import React from "react"
import "./home.css"
import Carousel from "../carousel/carousel"

class Home extends React.Component {
    render() {
        return(
            <div>
            <div class="row">
                <div class="col-6 square">
                    <div class="image">
                        <h2>Paysage</h2>
                    </div>
                </div>
                <div class="col-6 square">
                    <div class="image">
                        <h2>Portait</h2>
                    </div>
                </div>
            </div>
            <div>
            <h2>Paysage</h2>
            </div>
            <React.Fragment>
            <Carousel/>
            </React.Fragment>
            <h2>Portrait</h2>
            <React.Fragment>
            <Carousel/>
            </React.Fragment>
            <footer>
                blabla
            </footer>
            </div>
        )}
}

export default Home