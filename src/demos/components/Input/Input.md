# Input 输入框

----- InputType

## `type`?: 'text' | 'password' = 'text'

类型

----- InputValue

## `value`?: string

当前值

请配合`onChange`回调函数使用

----- InputPlaceholder

## `placeholder`?: string

占位字符串

----- InputSize

## `size`?: 'small' | 'normal' | 'large' = 'normal'

尺寸

----- InputDisabled

## `disabled`?: boolean = false

是否禁用

----- InputFull

## `full`?: boolean = false

是否100%宽度

----- InputPrefix

## `prefix`?: React.ReactNode

前缀元素

----- InputSuffix

## `suffix`?: React.ReactNode

后缀元素

----- InputAutoFocus

## `autoFocus`?: boolean

是否自动在组件绑定时获取焦点

----- InputOnChange

## `onChange`?: (e: any, value: string) => void

`value`发生改变时的回调函数

----- InputOnFocus

## `onFocus`?: (e) => void

获取到焦点时的回调函数

----- InputOnBlur

## `onBlur`?: (e) => void

失去焦点时的回调函数

----- InputOnKeyDown

## `onKeyDown`?: (e) => void

键盘按键时的回调函数
