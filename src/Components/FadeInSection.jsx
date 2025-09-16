import React from 'react'
import  useInViewOnce from '../hooks/useInViewOnce.jsx'
const FadeInSection = ({ children, delay = 0 }) => {
    const { ref, visible } = useInViewOnce();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}


export default FadeInSection


