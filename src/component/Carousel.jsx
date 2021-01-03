import React from "react";


function Carousel(){
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            
                                <h1>Welcome To E-Evolve !!!</h1>
                                <h3> Start you course today</h3>
                           
                        </div>
                        <div class="carousel-item">
                            <h1>Welcome To E-Evolve !!!</h1>
                            <h3> Start you course today</h3>
                        </div>
                        <div class="carousel-item">
                                <h1>Welcome To E-Evolve !!!</h1>
                             <h3> Start you course today</h3>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
            </div>
    )
}

export default Carousel;