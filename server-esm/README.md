## node端esm

node端　webpack externals配置了node_modules，所以不支持引用node_modules下的esm

## node端模块解析

node端　webpack resolve mainFiles配置了优先使用package.json中的main字段进行解析，通常指向commonjs，所以无需编译。

## 解决

配置transpilePackages
