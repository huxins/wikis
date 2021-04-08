# configuration

```html
<link href="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/css/select2.min.css" rel="stylesheet" />
<script src="https://cdn.staticfile.org/jquery/3.6.0/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/select2@4.1.0-rc.0/dist/js/select2.min.js"></script>

<form>
    <select class="js-example-basic-single" name="cars[]" multiple="multiple">
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="fiat" selected>Fiat</option>
        <option value="audi">Audi</option>
    </select>
</form>

<script type="text/javascript">
    $(document).ready(function() {
        $('.js-example-basic-single').select2({
            placeholder: 'Select an option',
            width: '300',
            tags: false,
            language : "zh-CN",
            allowClear: true,
            multiple: true,
            maximumSelectionLength: 1
        });
    });
</script>
```

