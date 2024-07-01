import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import PropTypes from "prop-types";
import { EditForm } from "../../components";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateTransactionStatus } from "../../servises/servises";
import { useState } from "react";

export const BasicModal = ({ title, id, status, deleteOneTransaction }) => {
  const [newStatus, setNewStatus] = useState(status);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: updateTransactionStatus,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ["transactions"] }),
  });

  const editStatus = () => {
    mutate({ id, status: newStatus });
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>{title}</Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          {title === "Delete" && (
            <ModalBody> Are you sure to delete one?</ModalBody>
          )}
          {title === "Edit" && (
            <ModalBody>
              <EditForm setStatus={setNewStatus} status={newStatus} />
            </ModalBody>
          )}
          <ModalFooter>
            {title === "Delete" && (
              <Button colorScheme="teal" mr={3} onClick={deleteOneTransaction}>
                {title}
              </Button>
            )}
            {title === "Edit" && (
              <Button colorScheme="teal" mr={3} onClick={editStatus}>
                Save
              </Button>
            )}

            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

BasicModal.propTypes = {
  deleteOneTransaction: PropTypes.func,
  title: PropTypes.string,
  id: PropTypes.number,
  status: PropTypes.string,
};
