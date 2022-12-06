import { Avatar, Input, useDisclosure, VStack } from "@chakra-ui/react";
import { ImageUploadWithPreview, Modal } from "@simplimods/components";
import { useSelectFile } from "@simplimods/hooks";
import React, { useEffect, useRef } from "react";

interface ProfileAvatarUploadProps {
  userAvatar: string;
}

export const ProfileAvatarUpload = ({
  userAvatar,
}: ProfileAvatarUploadProps) => {
  const avatarUploadRefBtn = useRef<HTMLInputElement>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();
  const { selectedFile, setSelectedFile, onSelectedFile } = useSelectFile();

  // TODO: Fix bug when deleting an uploaded image and reuploading the same image previously uploaded does not show
  const onDeleteImageHandler = () => {
    setSelectedFile("");
    onClose();
  };

  useEffect(() => {
    if (selectedFile !== "") {
      onOpen();
    }
  }, [onOpen, selectedFile]);

  return (
    <VStack>
      <Avatar
        bg="wzy.600"
        name="Oshigaki Kisame"
        src={userAvatar ? userAvatar : ""}
        size="xl"
        _hover={{
          opacity: 0.76,
        }}
        cursor="pointer"
        onClick={() => avatarUploadRefBtn.current?.click()}
      />
      <Input
        onChange={(event) => onSelectedFile(event)}
        hidden
        ref={avatarUploadRefBtn}
        accept="image/png, image/jpeg"
        cursor="pointer"
        type="file"
        w="full"
      />
      <Modal isOpen={isOpen} onClose={onClose} title="Update your avatar">
        <ImageUploadWithPreview
          onUploadSubmit={() => console.log("Upload")}
          selectedImageUrl={selectedFile}
          onDeleteClick={onDeleteImageHandler}
          onUploadChange={onSelectedFile}
        />
      </Modal>
    </VStack>
  );
};

export default ProfileAvatarUpload;
