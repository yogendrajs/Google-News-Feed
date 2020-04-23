import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { animateScroll as scroll } from "react-scroll";

export default function BackToTop({ title, pageYOffset }) {
	const scrollToTop = () => {
		scroll.scrollToTop();
	};

  
	return (
    <div>
      {pageYOffset > 40 && <FontAwesomeIcon
        title={title}
        className="back-to-top"
        icon={faChevronUp}
        onClick={scrollToTop}
      /> }
    </div>		
	);
}
