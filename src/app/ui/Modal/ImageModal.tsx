import CarouselSingle from "../Carousel/component/CarouselSingle";

type ImageModalProps = {
  width: number;
  height: number;
  data: {
    id: string;
    id_before: string;
    id_after: string;
    src: string;
  };
};

const ImageModal: React.FC<ImageModalProps> = ({ width, height, data }) => {
  const openModal = () => {
    const dialog = document.getElementById(data.id);
    if (dialog instanceof HTMLDialogElement) {
      dialog.showModal();
    } else {
      console.error("Dialog element not found or incorrect element type");
    }
  };

  return (
    <div>
      <button className="btn" onClick={openModal}>
        open modal
      </button>
      <dialog id={data.id} className="modal">
        <div className="modal-box">
          <CarouselSingle width={width} height={height} data={data} />
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};
export default ImageModal;
