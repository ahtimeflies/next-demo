## treeshaking demo

页面1
```
import { test1 } from '@/utils'
test1()
```

页面2
```
import { test2 } from '@/utils'
test2()
```

输出
test1, test2 被同时打包进页面1和页面2
```
__webpack_require__.d(__webpack_exports__, {
  xB: () => test2,
  xc: () => test1
})

```