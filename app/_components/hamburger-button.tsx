import type React from "react"

interface HamburgerButtonProps {
  isOpen: boolean
  onClick: () => void
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ isOpen, onClick }) => {
  
  return (
    <button
      className="z-50 fixed top-4 right-8 w-10 h-10 flex focus:outline-none"
      onClick={onClick}
      aria-expanded={isOpen}
      aria-label="Toggle menu"
    >
      <span className="sr-only">Toggle menu</span>
      <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
        <span
          className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
            isOpen ? "w-0 opacity-50" : "w-10 delay-200 opacity-100"
          }`}
        ></span>
        <span
          className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${
            isOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
          }`}
        ></span>
      </div>
    </button>
  )
}

export default HamburgerButton

