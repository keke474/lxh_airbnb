import { memo, Suspense } from 'react'
import { useRoutes } from "react-router-dom";
import routes from './router'
import AppHeader from "./components/app-header";
import AppFooter from "./components/app-footer";
import useScrollTop from '@/hooks/useScrollTop'

const App = memo(() => {
  // 滑倒顶端
  useScrollTop()
  return <div className="name">
    <AppHeader />
    {/* 解决控制台打印两次的问题 */}
    <Suspense fallback="loading">
      <div className="pages">
        {useRoutes(routes)}
      </div>
    </Suspense>
    <AppFooter />
  </div>
})

export default App;
