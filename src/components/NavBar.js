import React, { Component } from "react";
import { Link } from "react-router-dom";
import "font-awesome/css/font-awesome.css";
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   UncontrolledDropdown,
   DropdownToggle,
   DropdownMenu,
   DropdownItem
} from "reactstrap";
import FontAwesome from "react-fontawesome";

class NavBar extends Component {
   state = {
      isOpen: false
   };

   toggle = () => {
      this.setState({
         isOpen: !this.state.isOpen
      });
   };
   render() {
      return (
         <div>
            <Navbar color="info" light expand="md" className="app-nav">
               <NavbarBrand href="/"> Customer Form </NavbarBrand>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                  <Nav className="ml-auto" navbar>
                     <UncontrolledDropdown nav inNavbar>
                        <DropdownToggle nav caret>
                           <FontAwesome
                              className="last-recent-onsite-visit"
                              name="user-circle"
                           />{" "}
                           Atiq
                        </DropdownToggle>
                        <DropdownMenu right>
                           <DropdownItem>
                              <Link to="/">Logout</Link>
                           </DropdownItem>
                        </DropdownMenu>
                     </UncontrolledDropdown>
                  </Nav>
               </Collapse>
            </Navbar>
         </div>
      );
   }
}

export default NavBar;
