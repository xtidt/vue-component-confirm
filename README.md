# imitate ios confirm popup 
> Suitable for mobile terminals

![img](http://i1.bvimg.com/671750/aa9471eb555e8540.png)

> How to use

### first import files

```html
<dialogConfirm 
  :show-dialog='showDialog' 
  :ok-text=''删除'' 
  :cancel-text=''取消'' 
  :content=''content'' 
  v-on:confirm='confirmFn' 
  v-on:cancel='cancelFn' 
  :hide-confirm='false'>
</dialogConfirm> 
```

### api
```js
/*
* show-dialog: {boolean} Whether to display the dialog box
* ok-text: text of Confirm button, default param is {good}
* cancel-text: text of Cancel button, default param is {cancel}
* hideConfirm: Whether to hide the delete button
* hideCancle Whether to hide the cancel button
* content: Dialog content text
* confirmFn: callback of OK button
* cancelFn: callback of Cancel button 
*/
```

> Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

