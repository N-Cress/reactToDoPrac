import { TbPencilPlus } from 'react-icons/tb'

// eslint-disable-next-line react/prop-types
function Header({ setPopUp }) {

    return(
        <>
        <div className="header">
            <div className="header-container">
                <p className="header-title">My Tasks</p>
                <div onClick={() => setPopUp(true)}className="header-add">
                <TbPencilPlus />
                </div>
            </div>
        </div>
        <hr  className="header-break"/>
      </>
    )
}

export default Header;