import React , {useState, useEffect} from ' react';

export default function SmoothScroll(){
  const[isVisible, setIsVisible] = useState(false);

  //top 0 takes us all the way upto the top of the
  //Behavior:Smooth keeps scrolling smooth

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() =>{
    const toggleVisibility = () => {
      if(window.pageYOffset > 500){
        setIsVisible(true);
      }else{
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return() => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  //scroll-to-top style: position-fixed, right:0, bottom:0
  return(
    <div className="scroll-to-top">
      {isVisible && (
        <div onCLick={scrollToTop}>
          <h3>Go to top</h3>
        </div>
      )}
    </div>
  );
}