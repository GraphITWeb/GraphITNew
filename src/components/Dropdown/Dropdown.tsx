'use client'
import React, {useState} from "react";
import './Dropdown.css';

interface DropdownProps {
    label: string;
    selected: string[];
    setSelected: (value: string[]) => void;
    variants: string[];
}

const Dropdown: React.FC<DropdownProps> = ({label, selected, setSelected, variants}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
            <small>{selected.length>0?selected.join(', '):label}</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                    d="M10.332 10.9993L14.1654 7.16602L15.332 8.33268L10.332 13.3327L5.33203 8.33268L6.4987 7.16602L10.332 10.9993Z"
                    fill="white"/>
            </svg>
            {isOpen && <div className="dropdown__select">
                {variants.map((variant, index) => (
                    <div className="dropdown__select__item" key={index} onClick={() => {
                        if (selected.includes(variant)) {
                            setSelected(selected.filter(item => item !== variant));
                        } else {
                            setSelected([...selected, variant]);
                        }
                    }}>
                        {!selected.includes(variant)?
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                 fill="none">
                                <path
                                    d="M4.16667 18C3.70833 18 3.31597 17.8368 2.98958 17.5104C2.66319 17.184 2.5 16.7917 2.5 16.3333V4.66667C2.5 4.20833 2.66319 3.81597 2.98958 3.48958C3.31597 3.16319 3.70833 3 4.16667 3H15.8333C16.2917 3 16.684 3.16319 17.0104 3.48958C17.3368 3.81597 17.5 4.20833 17.5 4.66667V16.3333C17.5 16.7917 17.3368 17.184 17.0104 17.5104C16.684 17.8368 16.2917 18 15.8333 18H4.16667ZM4.16667 16.3333H15.8333V4.66667H4.16667V16.3333Z"
                                    fill="#F23704"/>
                            </svg>:
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="21" viewBox="0 0 20 21"
                                 fill="none">
                                <path
                                    d="M8.83333 14L14.7083 8.125L13.5417 6.95833L8.83333 11.6667L6.45833 9.29167L5.29167 10.4583L8.83333 14ZM4.16667 18C3.70833 18 3.31597 17.8368 2.98958 17.5104C2.66319 17.184 2.5 16.7917 2.5 16.3333V4.66667C2.5 4.20833 2.66319 3.81597 2.98958 3.48958C3.31597 3.16319 3.70833 3 4.16667 3H15.8333C16.2917 3 16.684 3.16319 17.0104 3.48958C17.3368 3.81597 17.5 4.20833 17.5 4.66667V16.3333C17.5 16.7917 17.3368 17.184 17.0104 17.5104C16.684 17.8368 16.2917 18 15.8333 18H4.16667Z"
                                    fill="#F23704"/>
                            </svg>}
                        <small>
                            {variant}
                        </small>
                    </div>))}
            </div>}
        </div>
    )

}
export default Dropdown