import React,{useState} from 'react';
import img1 from "../images/info-1.png"
import "../assets/css/style.scss"

const Ex1 = () => {
  const [isOpen, setMenu] = useState(false);  // 메뉴의 초기값을 false로 설정
  
  const toggleMenu = () => {
        setMenu(isOpen => !isOpen); // on,off 개념 boolean
    }
  return(
    <div className="header">
            <ul className="header-wrapper">
                <li><img width="45px" src={img1} onClick={()=>toggleMenu()}></img></li>
            </ul>
            <ul className={isOpen ? "show-menu" : "show-menu_hide"}> 
                    <li >1</li>
                    <li >2</li>
                    <li >3</li>
                    <li >4</li>
            </ul>
    </div>
)
};

export default Ex1;