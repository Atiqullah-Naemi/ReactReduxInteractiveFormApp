import React from "react";
import { Container } from "reactstrap";

export const Home = () => {
   return (
      <div className="home">
         <Container>
            <h1>Welcome to DC Automation</h1>
            <p>
               Please select an option from the left to inorder to display some
               content
            </p>
            <p>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ut
               sodales orci, eget venenatis nisl. Pellentesque nec mi semper,
               fringilla mauris quis, molestie nunc. Vivamus porta sodales
               accumsan. Aenean et libero eget elit vulputate mollis. Integer
               pellentesque diam urna, at volutpat lectus dapibus vel. Mauris
               congue ultrices urna et sollicitudin. Pellentesque habitant morbi
               tristique senectus et netus et malesuada fames ac turpis egestas.
               Etiam metus mi, laoreet sit amet laoreet vel, porta at diam.
               Morbi posuere sed odio id tincidunt.
            </p>
         </Container>
      </div>
   );
};
