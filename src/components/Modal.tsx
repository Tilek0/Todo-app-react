export const Modal = ({children}) => {
    const containerElement = useMemo(
        () => document.getElementById('modal-container'),
        []
    )
    return ReactDOM.createPortal(children, containerElement)
}