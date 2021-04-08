# Newifi

- [突破低性能路由器限制，大流量高并发ss透明代理实践](https://nepno.com/archives/110)

## 在路由器上跑golang

通过 `uname -m` 我们可以看出来，cpu架构为 `mpis` 。 我们查到 [golang支持](https://golang.org/doc/install/source)

我们写个 `hello world` 试一下。

```go
# file openwrt.go

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/hello", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("hello world"))
		return
	})

	fmt.Println("start listen")
	http.ListenAndServe(":12345", nil)
}
```

编译

```sh
$ GOOS=linux GOARCH=mipsle go build openwrt.go
```



## Reference

- [Newifi3实现低成本家庭级科学上网](https://razeencheng.com/post/start-use-newifi3)