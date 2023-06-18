export type ModalStatus = "success" | "error";

export interface ModalData {
  content: string;
  status: ModalStatus;
}
