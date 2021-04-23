# modal

在 bootstrap modal 中，无法输入。参考 [Select2 doesn't work when embedded in a bootstrap modal](https://stackoverflow.com/questions/18487056/select2-doesnt-work-when-embedded-in-a-bootstrap-modal)

```javascript
$.fn.modal.Constructor.prototype.enforceFocus = function () {};
```

bootstrap3-dialog

```javascript
BootstrapDialog.show({
    onshown: function (dialogRef) {
        $("#"+dialogRef.getId()).removeAttr("tabindex");
    }
});
```

