import React from "react";
import { Modal, Navbar as NextUINav, Text } from "@nextui-org/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import router from "next/router";

type Props = {};
const Navbar = (props: Props) => {
  const [visible, setVisible] = React.useState(false);
  const [modalContent, setContent] = React.useState("Coming Soon");
  const handler = (content: string) => {
    setContent(content);
    setVisible(true);
  };

  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };

  return (
    <NextUINav isBordered variant="floating">
      <NextUINav.Brand>
        <NextUINav.Toggle aria-label="toggle navigation" showIn="xs" />
        <span style={{ padding: "0 8px" }}></span>
        <span style={{ cursor: "pointer" }} onClick={()=> {router.push("/")}}>
          <Text h2 i b color="inherit">
            Afriverse
          </Text>
        </span>
      </NextUINav.Brand>
      <NextUINav.Content hideIn="xs">
        <NextUINav.Link href="/explore">Explore</NextUINav.Link>
        <NextUINav.Link
          onClick={() =>
            handler(
              "The gift shop is currently under construction and would be available soon."
            )
          }
          href="#"
        >
          Gift Shop
        </NextUINav.Link>
        <NextUINav.Link
          onClick={() =>
            handler(
              "Please send an email to proajibolaojo+afriverse@gmail.com to get started"
            )
          }
          href="#"
        >
          Create Content
        </NextUINav.Link>
      </NextUINav.Content>
      <NextUINav.Content>
        <NextUINav.Item>
          <ConnectButton />
        </NextUINav.Item>
      </NextUINav.Content>
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            Welcome to
            <Text b i size={18}>
              {" "}
              Afriverse
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>{modalContent}</Modal.Body>
        <Modal.Footer>
          &copy; <i>Afriverse</i> {new Date().getFullYear()}
        </Modal.Footer>
      </Modal>
    </NextUINav>
  );
};

export default Navbar;
