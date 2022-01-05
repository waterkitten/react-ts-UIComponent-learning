import React,{FC, useContext, FunctionComponentElement, useState } from 'react'
import classNames from 'classnames'
import { MenuContext } from './menu'
import { MenuItemProps } from './menuItem'

export interface SubMenuProps{
    index?: string;
    title: string;
    className?: string;
}

const SubMenu: FC<SubMenuProps> = (props) => {
    const { index, title, children, className } = props
    const context = useContext(MenuContext)
    // status value for the  childMenu Component
    const [menuOpen,setOpen]=useState(false)
    const classes = classNames('menu-item submenu-item', className, {
      'is-active': context.index === index,
      'is-opened': menuOpen
    })
    const handleClick=(e: React.MouseEvent)=>{
      e.preventDefault()
      setOpen(!menuOpen)
    }

    let timer:any
    const handleMouse=(e: React.MouseEvent,toggle: boolean)=>{
      clearTimeout(timer)
      e.preventDefault()
      timer = setTimeout(() => {
        setOpen(toggle)
      }, 300)
    }
  //垂直时候 是点击就 setOpen
  const clickEvents = context.mode === 'vertical' ? { onClick: handleClick } :{}
  //横向时候 就 hover 下拉
  const hoverEvents=context.mode!=='vertical'?{
    onMouseEnter:(e:React.MouseEvent)=>{handleMouse(e,true)},
    onMouseLeave:(e:React.MouseEvent)=>{handleMouse(e,false)}
  }:{}
    const renderChildren = () => {
      const subMenuClasses = classNames('viking-submenu', {
        'menu-opened': menuOpen
      })
      // 根据munu-opened来判断是否展开  display：block判断是否展开

      const childrenComponent = React.Children.map(children, (child, i) => {
        const childElement = child as FunctionComponentElement<MenuItemProps>
        if (childElement.type.displayName === 'MenuItem') {
          return React.cloneElement(childElement,{
            index:`${index}-${i}`
          })
        } else {
          console.error("Warning: SubMenu has a child which is not a MenuItem component")
        }
      })
      return (
        <ul className={subMenuClasses}>
          {childrenComponent}
        </ul>
      )
    }
  
    return (
      <li key={index} className={classes}{...hoverEvents}>
        <div className="submenu-title" {...clickEvents}>
          {title}
        </div>
        {renderChildren()}
      </li>
    )
  }
  

SubMenu.displayName='SubMenu'
export default SubMenu 