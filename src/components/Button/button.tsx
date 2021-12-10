import React, { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react'
import classNames from 'classnames'

export type ButtonSize = 'lg' | 'sm'
export type ButtonType = 'primary' | 'default' | 'danger' | 'link'

interface BaseButtonProps{
    className?: string;
    /**设置 Button 的禁用 */
    disabled?: boolean;
    /**设置 Button 的尺寸 */
    size?: ButtonSize;
    /**设置 Button 的类型 */
    btnType?: ButtonType;
    children: React.ReactNode;
    href?: string;
}

//联合类型是A or B  ｜，交叉类型是把多个类型叠加为一个类型
type NativeButtonProps = BaseButtonProps & ButtonHTMLAttributes<HTMLElement>
//A标签
type AnchorButtonProps = BaseButtonProps & AnchorHTMLAttributes<HTMLElement>
// partial把两个都设为可选的 
export type ButtonProps = Partial<NativeButtonProps & AnchorButtonProps>

export const Button:FC<ButtonProps>=(props)=>{
    const { 
        btnType,
        className,
        disabled,
        size,
        children,
        href,
        ...restProps
        //restProps包含了 a标签和button标签内的所有属性
      } = props
       // btn, btn-lg, btn-primary
  const classes = classNames('btn', className, {
    [`btn-${btnType}`]: btnType,
    [`btn-${size}`]: size,
    'disabled': (btnType === 'link') && disabled
  })
  if (btnType === 'link' && href ) {
    return (
      <a
        className={classes}
        href={href}
        {...restProps}
      >
        {children}
      </a>
    )
  } else {
    return (
      <button
        className={classes}
        disabled={disabled}
        {...restProps}
      >
        {children}
      </button>
    )
  }
}

Button.defaultProps = {
    disabled: false,
    btnType: 'default'
  }
  
  export default Button;