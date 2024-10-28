'use client'
import React, {useState} from "react";
import './Dropdown.css';

interface DropdownProps {
    label: string;
    selected: string;
    setSelected: (value: string) => void;
    variants: string[];
}

const Dropdown: React.FC<DropdownProps> = ({label, selected, setSelected, variants}) => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
            <small>{selected}</small>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path
                    d="M10.332 10.9993L14.1654 7.16602L15.332 8.33268L10.332 13.3327L5.33203 8.33268L6.4987 7.16602L10.332 10.9993Z"
                    fill="white"/>
            </svg>
            {isOpen && <div className="dropdown__select">
                {variants.map((variant, index) => (
                    <div className="w-full flex flex-row justify-between items-center" key={index} onClick={() => {
                        if (selected !== variant) {
                            setSelected(variant)
                        } else {
                            setSelected(label)
                        }
                    }}>
                        <small>
                            {variant}
                        </small>
                        {selected == variant &&
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"
                                 fill="none">
                                <path d="M20 6L9 17L4 12" stroke="#fff" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                            </svg>}
                    </div>))}
            </div>}
        </div>
    )

}
export default Dropdown