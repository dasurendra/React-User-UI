import {
  Facebook,
  Pinterest,
  Twitter,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;
const Logo = styled.h1`
  color: darkblue;
  margin-bottom: 20px;
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  display: flex;
  margin: 5px;
  align-items: center;
  justify-content: center;
  background-color: #${(props) => props.color};
`;
const Center = styled.div`
  flex: 1;
  padding: 20px;
`;
const Title = styled.h3`
  margin-bottom: 30px;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 15px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 50%;
`;

export const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>E-Shop</Logo>
        <Desc>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Similique
          veritatis molestias i
        </Desc>
        <SocialContainer>
          <SocialIcon color="3B5999">
            <Facebook />
          </SocialIcon>

          <SocialIcon color="E4405F">
            <Twitter />
          </SocialIcon>

          <SocialIcon color="55ACEE">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Pinterest />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Promotion</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>

          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          Sydney,Australia
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +61-123456789
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          info@eshop.com.au
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};
