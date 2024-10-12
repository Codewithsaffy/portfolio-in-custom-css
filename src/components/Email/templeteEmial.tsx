import {
  Body,
  Container,
  Head,
  Html,
  Heading,
  Text,
  Section,
} from "@react-email/components";
import * as React from "react";

interface ContactEmailTemplateProps {
  senderName: string;
  senderEmail: string;
  message: string;
}

const ContactEmailTemplate = ({
  senderName,
  senderEmail,
  message,
}: ContactEmailTemplateProps) => (
  <Html>
    <Head />
    <Body style={main}>
      <Container style={container}>
        <Heading style={heading}>
          New Contact Form Submission from {senderName}
        </Heading>
        <Section>
          <Text><strong>Email:</strong> {senderEmail}</Text>
          <Text><strong>Message:</strong> {message}</Text>
        </Section>
      </Container>
    </Body>
  </Html>
);

export default ContactEmailTemplate;

const main = {
  backgroundColor: "#f9fafb",
  fontFamily: "Helvetica, Arial, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  borderRadius: "8px",
  padding: "20px",
  margin: "40px auto",
  maxWidth: "500px",
};

const heading = {
  fontSize: "24px",
  fontWeight: "bold",
  marginBottom: "20px",
};
