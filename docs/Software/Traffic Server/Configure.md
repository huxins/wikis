# Configure

## 配置URL映射规则

`records.config`

```
CONFIG proxy.config.http.server_ports STRING 80 443:ssl
CONFIG proxy.config.url_remap.pristine_host_hdr INT 1
```

`remap.config`

```
redirect http://test/ https://test/
map https://test/ https://hostloc.com/
reverse_map https://hostloc.com/ https://test/
map / https://hostloc.com/
```

## 配置缓存规则

`records.config`

```
CONFIG proxy.config.http.cache.http INT 1
CONFIG proxy.config.http.cache.ignore_client_cc_max_age INT 1
CONFIG proxy.config.http.normalize_ae_gzip INT 1
CONFIG proxy.config.http.cache.cache_responses_to_cookies INT 1
CONFIG proxy.config.http.cache.cache_urls_that_look_dynamic INT 1
CONFIG proxy.config.http.cache.when_to_revalidate INT 0
CONFIG proxy.config.http.cache.required_headers INT 2
CONFIG proxy.config.http.cache.ignore_client_no_cache INT 1
```

`storage.config`

```
var/trafficserver 2048M
```

## 配置SSL证书

`records.config`

```
CONFIG proxy.config.ssl.server.cert.path STRING /etc/trafficserver/ssl/
CONFIG proxy.config.ssl.server.private_key.path STRING /etc/trafficserver/ssl/
```

`ssl_multicert.config`

```
dest_ip=* ssl_cert_name=test.crt ssl_key_name=test.key
```

## 运行 Traffic Server

```bash
$ ldconfig
$ trafficserver start
$ traffic_ctl config reload
```

