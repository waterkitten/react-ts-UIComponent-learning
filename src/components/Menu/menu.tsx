import React, { FC, useState, createContext, CSSProperties } from 'react'
import classNames from 'classnames'

type MenuMode = 'horizontal' | 'vertical'
export interface MenuProps {
  /**默认 active 的菜单项的索引值 */
  defaultIndex?: number;
  className?: string;
  /**菜单类型 横向或者纵向 */
  mode?: MenuMode;
  style?: CSSProperties;
  /**点击菜单项触发的回掉函数 */
  onSelect?: (selectedIndex: number) => void;
}

interface IMenuContext{
    index:number;
    onSelect?:(selectedIndex:number)=>void;
    mode?:MenuMode;
}
//context 
export const MenuContext=createContext<IMenuContext>({index:0})

/**?
 * @description menu组件支持横向纵向两种模式
 */
export const Menu:FC<MenuProps>=(props)=>{
    const {className,mode,style,children,defaultIndex,onSelect}=props
    const [currentActive,setActive]=useState(defaultIndex)
    const classes = classNames('viking-menu', className, {
        'menu-vertical': mode === 'vertical',
        'menu-horizontal': mode !== 'vertical',
    })
    //处理事件点击时候切换样式
    const handleClick = (index: number) => {
        setActive(index)
        if(onSelect) {
          onSelect(index)
        }
    }
    const passedContext:IMenuContext={
        index:currentActive?currentActive:0,
        onSelect:handleClick,
        mode
    }
   return(
       <ul  className={classes} style={style} data-testid='test-menu'>
           {/* {children} */}
           <MenuContext.Provider value={passedContext}>  {children}</MenuContext.Provider>
       </ul>
   )
}
Menu.defaultProps = {
    defaultIndex:0,
    mode: 'horizontal',
}
export default Menu;