import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Row, Col, Card, CardBody, Button } from "reactstrap";
import { getSources } from "../../actions/sourceActions";
import { getServices } from "../../actions/serviceActions";
import AddEditSourceModal from "./AddEditSourceModal";
import AddEditServiceModal from "./AddEditServiceModal";
import FontAwesome from "react-fontawesome";

class Rule extends Component {
   state = {
      rules: [
         {
            enabaledSources: [],
            enabaledServices: []
         }
      ],

      showSourceModal: false,
      showServiceModal: false,
      currentIndex: null
   };

   componentDidMount() {
      this.props.getSources();
      this.props.getServices();
   }

   handleAddRule = () => {
      this.setState({
         rules: this.state.rules.concat([
            {
               enabaledSources: [],
               enabaledServices: []
            }
         ])
      });
   };

   closeModal = () => {
      this.setState({
         showSourceModal: false,
         showServiceModal: false
      });
   };

   getSourceFromChild = sourceFromChild => {
      this.setState(prevState => ({
         rules: prevState.rules.map((rule, index) => {
            if (index === sourceFromChild.index) {
               return {
                  enabaledSources: [
                     ...rule.enabaledSources,
                     sourceFromChild.childSource
                  ]
               };
            } else {
               return rule;
            }
         })
      }));
   };

   render() {
      const { sources } = this.props.sources;
      const { services } = this.props.services;

      return (
         <Container>
            {this.state.rules.map((rule, index) => {
               return (
                  <Row key={index}>
                     <Col md={4}>
                        <h3
                           style={{
                              marginTop: "15px"
                           }}
                        >
                           Source Group
                        </h3>
                        <Card>
                           <CardBody>
                              <span
                                 className="add-new-item"
                                 onClick={() => {
                                    this.setState({
                                       showSourceModal: true,
                                       currentIndex: index
                                    });
                                 }}
                              >
                                 <FontAwesome name="edit" />
                              </span>
                              <ul className="list-items">
                                 {rule.enabaledSources.map((item, index) => {
                                    return (
                                       <li key={index} className="list-item">
                                          <span>{item}</span>
                                          {/* <span
																className="remove-item"
																onClick={this.removeItem.bind(
																	this,
																	item
																)}
															>
																<FontAwesome name="trash" />
															</span> */}
                                       </li>
                                    );
                                 })}
                              </ul>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col md={4}>
                        <h3
                           style={{
                              marginTop: "15px"
                           }}
                        >
                           Destination Group
                        </h3>
                        <Card>
                           <CardBody>
                              <span
                                 className="add-new-item"
                                 onClick={this.openModal}
                              >
                                 <FontAwesome name="edit" />
                              </span>
                           </CardBody>
                        </Card>
                     </Col>
                     <Col md={4}>
                        <h3
                           style={{
                              marginTop: "15px"
                           }}
                        >
                           Service Group
                        </h3>
                        <Card>
                           <CardBody>
                              <span
                                 className="add-new-item"
                                 onClick={() => {
                                    this.setState({
                                       showServiceModal: true,
                                       currentIndex: index
                                    });
                                 }}
                              >
                                 <FontAwesome name="edit" />
                              </span>
                           </CardBody>
                        </Card>
                     </Col>
                  </Row>
               );
            })}
            <Row
               style={{
                  marginTop: "30px",
                  textAlign: "right"
               }}
            >
               <Col md={12}>
                  <Button
                     color="info"
                     id="add-rule-2"
                     onClick={this.handleAddRule}
                  >
                     Add New Rule
                  </Button>
               </Col>
            </Row>
            <AddEditSourceModal
               showSourceModal={this.state.showSourceModal}
               onClose={this.closeModal}
               sources={sources}
               callbackFromSource={this.getSourceFromChild}
               index={this.state.currentIndex}
            />
            <AddEditServiceModal
               showServiceModal={this.state.showServiceModal}
               onClose={this.closeModal}
               services={services}
            />
         </Container>
      );
   }
}

const mapStateToProps = state => ({
   sources: state.sources,
   services: state.services
});
export default connect(
   mapStateToProps,
   { getSources, getServices }
)(Rule);
