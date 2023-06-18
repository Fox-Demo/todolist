import { ModalData } from "../interfaces/Modal";

export const setModalData = (
  isSuccess: boolean,
  content: string
): ModalData => {
  let result: ModalData;

  if (isSuccess) result = { content, status: "success" };
  else result = { content: "Error", status: "error" };

  return result;
};
