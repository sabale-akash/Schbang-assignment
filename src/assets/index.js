import React from "react";

export const Images={
    Logo : require('./images/Logo.png'),
    Bag : require('./images/Bag.png'),
    Banner : require('./images/Banner.png'),
    Banner_2 : require('./images/Banner_2.png'),
    Logo_1 : require('./images/Logo_1.png'),
    Logo_2 : require('./images/Logo_2.png'),
    Logo_3 : require('./images/Logo_3.png'),
    Logo_4 : require('./images/Logo_4.png'),
    Logo_5 : require('./images/Logo_5.png'),
    Mail : require('./images/mail.png'),
    Play : require('./images/Play.png'),
    Twitter : require('./images/twitter.png'),
    Fb : require('./images/fb.png'),
    Insta : require('./images/insta.png'),
    Graphic: require('./images/Graphic.png'),
    ArrowsGroup :require('./images/ArrowsGroup.png'),
    Icon_1 :require('./images/Icon_1.png'),
    Icon_2 :require('./images/Icon_2.png'),
    Ticket :require('./images/ticket.png'),
    Rightimg :require('./images/rightimg.png'),
    
    
}


export function DashboardIcon({fillColor, ...restProps}) {
    return (  
      <>
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="none"
            viewBox="0 0 20 20"
            {...restProps}
            >
            <path
                    fill={fillColor}
                    d="M19.913 9.693A9.998 9.998 0 000 10.996a9.897 9.897 0 003.132 7.258 4.033 4.033 0 002.795 1.073h8.137a4.161 4.161 0 002.924-1.19 9.952 9.952 0 002.925-8.444zm-4.09 7.249a2.5 2.5 0 01-1.759.719H5.927a2.385 2.385 0 01-1.651-.617 8.249 8.249 0 01-2.61-6.049 8.344 8.344 0 012.782-6.213 8.233 8.233 0 015.539-2.118 8.327 8.327 0 015.837 14.283v-.005zm-9.318-2.376a.834.834 0 01-1.167 1.191 6.666 6.666 0 015.613-11.36.833.833 0 01.705.944.823.823 0 01-.944.707 5 5 0 00-4.207 8.518zm10.091-4.523a6.73 6.73 0 01-.45 3.538 6.606 6.606 0 01-1.489 2.177.834.834 0 11-1.166-1.193 4.984 4.984 0 001.453-4.284.834.834 0 111.65-.238h.002zm-4.993.526a1.694 1.694 0 11-1.178-1.178l3.15-3.15a.834.834 0 111.178 1.178l-3.15 3.15z"
            ></path>
            </svg> 
      </>
  );
}