# data sources

## data format

```json
{
    "results": [
        {
            "id": 1,
            "text": "Option 1",
            "selected": true
        },
        {
            "id": 2,
            "text": "Option 2",
            "disabled": true
        },
        {
            "id": 3,
            "text": "Option 3"
        }
    ],
    "pagination": {
        "more": true
    }
}
```

## ajax

```html
<select class="js-data-example-ajax"></select>
<script type="text/javascript">
    $(document).ready(function() {
        $('.js-data-example-ajax').select2({
            ajax: {
                url: 'https://api.github.com/search/repositories',
                dataType: 'json',
                delay: 250,
                data: function (params) {
                    var query = {
                        q: params.term,
                        page: params.page || 1,
                        per_page: 10
                    }
                    return query;
                },
                processResults: function (data, params) {
                    params.page = params.page || 1;
                    return {
                        results: data.items,
                        pagination: {
                            more: (params.page * 10) < data.total_count
                        }
                    };
                },
                cache: false
            },
            width: '300',
            placeholder: 'Search for a repository',
            minimumInputLength: 1,
            templateResult: function (repo) {
                return repo.full_name || repo.text;
            },
            templateSelection: function (repo) {
                return repo.full_name || repo.text;
            }
        });
    });
</script>
```

