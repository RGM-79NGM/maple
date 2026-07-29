const Modal = ({ content }: any) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="rounded bg-white p-4 shadow">{content}</div>
    </div>
  );
};

export default Modal;
