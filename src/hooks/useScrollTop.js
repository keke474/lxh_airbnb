import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollTop () {
  const location = useLocation()
  useEffect(() => {
    // console.log('location名称变化，滑倒顶端');

    window.scrollTo(0, 0)
    // 当路径名称变化时，就滑倒顶部
  }, [location.pathname])
}