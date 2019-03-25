import React, { Component } from "react";
import {
   Container,
   Form,
   FormGroup,
   Label,
   Modal,
   ModalBody,
   ModalFooter,
   Button
} from "reactstrap";
import Select from "react-select";

class AddEditServiceModal extends Component {
   state = {
      defaultValue: null
   };

   onCloseModal = () => {
      this.props.onClose(false);
   };

   handleChange = e => {
      this.setState({
         defaultValue: e
      });
   };

   showContent = () => {};

   render() {
      const options = this.props.services.map(item => {
         let { id, name } = item;

         let nameValue = {
            label: name,
            value: id
         };

         return nameValue;
      });

      return (
         <Container className="add-edit-modal">
            <Modal
               isOpen={this.props.showServiceModal}
               onClosed={this.onCloseModal}
               className={this.props.className}
            >
               <ModalBody>
                  <Form>
                     <FormGroup>
                        <Label for="exampleSelect">Select Source Group</Label>
                        <Select
                           placeholder="Select an Option"
                           name="SelectanOption"
                           options={options}
                           value={this.state.defaultValue}
                           defaultValue={0}
                           onChange={this.handleChange}
                        />
                     </FormGroup>
                  </Form>
                  <div>{this.showContent()}</div>
               </ModalBody>
               <ModalFooter>
                  <Button color="info" onClick={this.onCloseModal}>
                     Close
                  </Button>
                  <Button color="info" onClick={this.passDataToParent}>
                     Save
                  </Button>
               </ModalFooter>
            </Modal>
         </Container>
      );
   }
}

export default AddEditServiceModal;
