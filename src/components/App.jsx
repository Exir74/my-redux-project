import { CloseCircleTwoTone } from "@ant-design/icons";
import { Drawer, Flex, FloatButton, Layout, Modal, Typography } from "antd";
import { Content, Footer } from "antd/es/layout/layout.js";
import { useEffect, useState } from "react";
import { fetchPhotos } from "../utils/photoData.js";
import AppHeader from "./AppHeader.jsx";
import DrawerCard from "./DrawerCard/DrawerCard.jsx";
import MainContent from "./MainContent/MainContent.jsx";

const layoutStyle = {
  minHeight: "100vh",
  minWidth: "100vw", // было vv
};

function App() {
  const initialLikedImage = JSON.parse(localStorage.getItem("likedImages"));
  const [photo, setPhoto] = useState(null);
  const [photosArr, setPhotosArr] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [likedImages, setLikedImages] = useState(initialLikedImage || []);

  useEffect(() => {
    fetchPhotos().then((photos) => {
      setPhotosArr(photos.results);
    });
  }, []);
  //код нужный НЕ УДАЛЯТЬ___________________---------------______________-------------
  // useEffect(() => {
  // 	getRandomPhoto()
  // 		.then(photo => {
  // 			setPhoto(photo)
  // 			setIsModalOpen(false)
  // 		})
  // 		.catch(err => {
  // 			setErrorMessage(getErrorMessage(err.status))
  // 			setIsModalOpen(true)
  // 		})
  // }, [])

  const foundImage = (image) =>
    likedImages.find((item) => item.id === image.id);

  const likesHandler = (image) => {
    if (!foundImage(image)) {
      const addImage = [...likedImages, image].reverse();
      setLikedImages(addImage);
      localStorage.setItem("likedImages", JSON.stringify(addImage));
    } else {
      const deletedImage = likedImages.filter((item) => item.id !== image.id);
      setLikedImages(deletedImage);
      localStorage.setItem("likedImages", JSON.stringify(deletedImage));
    }
  };

  const footerStyle = {
    textAlign: "center",
    color: "#fff",
    backgroundColor: "#4096ff",
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onClose = () => {
    setIsDrawerOpen(false);
  };
  const showDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <Layout style={layoutStyle}>
      <AppHeader />
      <Layout>
        <FloatButton
          onClick={showDrawer}
          style={{
            left: "20px",
            top: "200px",
          }}
        />
        <Drawer
          title="Сохраненные карточки"
          placement="left"
          width={300}
          onClose={onClose}
          open={isDrawerOpen}
        >
          <DrawerCard
            likedImages={likedImages}
            likesHandler={likesHandler}
            foundImage={foundImage}
          />
        </Drawer>
        <Content className="content">
          {photosArr ? (
            <MainContent
              photosArr={photosArr}
              likedImages={likedImages}
              likesHandler={likesHandler}
              foundImage={foundImage}
            />
          ) : (
            <Modal
              open={isModalOpen}
              onCancel={handleCancel}
              footer={false}
              keyboard
              centred
              width={400}
              className="modal"
            >
              <Flex align="center" vertical gap={"large"} className="test">
                <CloseCircleTwoTone
                  className="modal__wrapper"
                  twoToneColor="#cf1322"
                />
                <Typography.Text className="modal__header" strong>
                  {errorMessage}
                </Typography.Text>
              </Flex>
            </Modal>
          )}
        </Content>
      </Layout>
      <Footer style={footerStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
