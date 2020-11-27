import React from 'react'
import { Col } from 'antd';

function GridCards(props) {

    if(props.landingPage){
        return(
        <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <a href={`/movie/${props.movieId}`}>
                        <img style = {{ width: '100%', height: '320px'}} src={props.image} alt={props.movieName} />
                    </a>
                </div>
            </Col>
        )
    } else{
        return (
            //반응형을 만들기 위해
            //large 일때는 column이 6개 이고, 따라서 row가 24/6=4인 형태로
            <Col lg={6} md={8} xs={24}>
                <div style={{position: 'relative'}}>
                    <img style = {{ width: '100%', height: '320px'}} src={props.image} alt={props.characterName} />
                </div>
            </Col>
        )
    }
}

export default GridCards
