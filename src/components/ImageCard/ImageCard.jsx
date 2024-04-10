/* eslint-disable no-mixed-spaces-and-tabs */
import { HeartOutlined } from "@ant-design/icons";
import { Card } from "antd";
import { useEffect, useState } from "react";
import styles from "./ImageCard.module.scss";
import { useSelector } from "react-redux";

const { Meta } = Card;
function ImageCard({ photo, foundImage, likedImages }) {
  // function ImageCard({ photo, likesHandler, foundImage, likedImages }) {
  const [isLiked, setIsLiked] = useState(false);

  const likesHandler = useSelector((state) => state.photoCard.cards);
  useEffect(() => {
    if (foundImage(photo)) {
      setIsLiked(true);
    } else setIsLiked(false);
  }, [likedImages, foundImage, photo]);

  const likeBtnHandler = () => {
    likesHandler(photo);
    setIsLiked(!isLiked);
  };
  return (
    <Card
      size={"small"}
      className={styles.cardWithImage}
      cover={
        <img
          alt={photo.description}
          src={photo.urls.regular}
          className={styles.cardImage}
        />
      }
      actions={[
        <HeartOutlined
          onClick={likeBtnHandler}
          key="like"
          style={isLiked ? { color: "red" } : { color: "green" }}
        />,
      ]}
    >
      <Meta
        style={{
          // width: '100%',
          // whiteSpace: 'nowrap',
          overflow: "hidden",
        }}
        title={photo.user.name}
        // description={photo.description || photo.alt_description}
      />
    </Card>
  );
}

export default ImageCard;
