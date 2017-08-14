# Button 按钮

----- ButtonSize

## `size`?: 'small' | 'normal' | 'large' = 'normal'

尺寸

----- ButtonType

## `type`?: 'default' | 'basic' | 'primary' | 'success' | 'warning' | 'danger' | 'info' = 'default'

样式类型

----- ButtonIcon

## `icon`?: string

图标

需要额外引入`font-awesome`，图标名称请参考[font-awesome/icons](http://fontawesome.io/icons/)

----- ButtonDisabled

## `disabled`?: boolean = false

是否禁用

----- ButtonLoading

## `loading`?: boolean = false

是否加载中

----- ButtonFull

## `full`?: boolean = false

是否100%宽度

----- ButtonNativeType

## `nativeType` : 'button' | 'submit' | 'reset' = 'button'

原生类型

----- ButtonOnClick

## `onClick`?: (e) => Promise | void

点击时的回调函数
