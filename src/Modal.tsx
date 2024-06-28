
interface Modal{
    id?:string,
    header: JSX.Element|string,
    content: JSX.Element|string,
    footer: JSX.Element|string,
    onClose: () => void
}

const Modal = ({id,header,content,footer, onClose}:Modal) => {


  return (
    <div className="modal">
      <div id={id || 'Modal'}>
        <div><button onClick={onClose}>X</button></div>
        <div className="header">{header ? header: 'Header'}</div>
        <div className="content">{content ? content: 'Content Body'}</div>
        <div className="footer">{footer ? footer: 'Footer'}</div>
      </div>
    </div>
  )
}

export default Modal;
