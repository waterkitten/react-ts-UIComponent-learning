import React,{FC, useContext, FunctionComponentElement } from 'react'
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
  
    const classes = classNames('menu-item submenu-item', className, {
      'is-active': context.index === index
    })
  
    const renderChildren = () => {
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
        <ul className='viking-submenu'>
          {childrenComponent}
        </ul>
      )
    }
  
    return (
      <li key={index} className={classes}>
        <div className="submenu-title">
          {title}
        </div>
        {renderChildren()}
      </li>
    )
  }
  

SubMenu.displayName='SubMenu'
export default SubMenu 