# scss-to-tsx-autolinefixer README

本插件会帮助你在修改scss文件后自动对当前文件夹下的index.tsx文件更改,以触发热更新.

## 使用方法

修改scss样式文件时自动触发

## index.tsx文件更改逻辑

会获取文件最后的换行符数量.
如果在两个及两个以上会去掉尾部一个换行符, 否则会在末尾增加一个换行符.
0.0.3版本更新: 会先给文件增加一个换行再去掉换行,这样也能触发热更新,并且不会有多余的修改

## Release Notes

### 0.0.1
完成基础功能
### 0.0.2
增加插件icon
### 0.0.3
优化更改逻辑, 会先给文件增加一个换行再去掉换行,这样也能触发热更新,并且不会有多余的修改


## 发布流程

* 打包

```bash 
vsce package
 ```

* 登录

```bash 
vsce login <publisher name>
 ```

* 发布应用

```bash 
vsce publish
 ```





