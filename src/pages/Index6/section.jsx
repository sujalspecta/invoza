import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

//Importing Modal
import ModalSection from '../../components/common/ModalSection';

class Section extends Component {
    constructor() {
        super();
        this.state = {
            isOpen: false
        }
        this.modalRef = React.createRef();
    }

    callModal = () => {
        if (this.modalRef.current) {
            this.modalRef.current.openModal();
        }
    };

    render() {

        return (
            <React.Fragment>
                <section className="hero-section-2 bg-primary" id="home">
                    <Container>
                        <Row className="justify-content-center">
                            <Col lg={7}>
                                <div className="hero-wrapper text-center mb-4">
                                    <p className="font-16 text-white-50 text-uppercase">Discover Invoza Today</p>
                                    <h1 className="hero-title text-white mb-4">Make your Site Amazing & Unique with <span className="text-success">Invoza</span></h1>

                                    <p className="text-white-50">To an English person, it will seem like simplified English, as a skeptical Cambridge friend of mine occidental</p>

                                    <div className="watch-video pt-5">
                                        <Link onClick={this.callModal} to="#" className="video-play-icon text-light"><i className="mdi mdi-play play-icon-circle play play-iconbar"></i> WATCH VIDEO</Link>
                                    </div>
                                </div>

                            </Col>
                        </Row>
                        {/* Render ModalSection Component for Modal */}
                        <ModalSection ref={this.modalRef} channel='vimeo' videoId='99025203' />
                    </Container>
                </section>
            </React.Fragment>
        );
    }
}

export default Section;