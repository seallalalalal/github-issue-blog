"use client";
import React, { createContext, PropsWithChildren, ReactNode, useContext, useState } from "react";
import {
  Modal as NextModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

import { PressEvent } from "@react-types/shared";

type ModalContentType = {
  value: ModalStateType;
  set: React.Dispatch<React.SetStateAction<ModalStateType>>;
};

type ModalStateType = {
  open: boolean;
  title: ReactNode;
  content: ReactNode;
  footer?: (onClose: () => void, e: PressEvent) => ReactNode;
  onOk?: (onClose: () => void, e: PressEvent) => void;
  onCacel?: (onClose: () => void, e: PressEvent) => void;
};

export const ModalContext = createContext<ModalContentType>({
  value: {
    open: false,
    title: undefined,
    content: undefined,
    footer: undefined,
    onOk: undefined,
    onCacel: undefined,
  },
  set: () => {},
});

export const useModal = () => useContext(ModalContext);

export function ModalProvider({ children }: PropsWithChildren) {
  const [modalProps, setModalProps] = useState<ModalStateType>({
    open: false,
    title: null,
    content: null,
    footer: () => null,
  });

  return (
    <ModalContext.Provider value={{ value: modalProps, set: setModalProps }}>
      {children}
      <NextModal
        isOpen={modalProps.open}
        onOpenChange={() => setModalProps((prev) => ({ ...prev, open: false }))}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">{modalProps.title}</ModalHeader>
              <ModalBody>{modalProps.content}</ModalBody>
              <ModalFooter>
                <>
                  <Button
                    color="danger"
                    variant="light"
                    onPress={(e) => modalProps.onCacel?.(onClose, e)}
                  >
                    Cancel
                  </Button>
                  <Button
                    color="primary"
                    onPress={(e) => modalProps.onOk?.(onClose, e)}
                  >
                    Confirm
                  </Button>
                </>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </NextModal>
    </ModalContext.Provider>
  );
}
