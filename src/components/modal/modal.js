import Modals from "../feedback/modal";
import ModalStyle from "./modal.style";
import WithDirection from "../../settings/withDirection";

const isoModal = ModalStyle(Modals);
const Modal = WithDirection(isoModal);

export default Modal;