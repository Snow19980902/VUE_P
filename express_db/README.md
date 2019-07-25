### 路由设计

| 请求方式 |     请求路径     | get参数 |          post参数          |     备注     |
|----------|------------------|---------|----------------------------|--------------|
| get      | /students        |         |                            | 渲染首页     |
| get      | /students/add    |         |                            | 渲染添加页面 |
| post     | /students/add    |         | name,age,gender,hobbies    | 处理添加请求 |
| get      | /students/edit   |         |                            | 渲染编辑页面 |
| post     | /students/edit   |         | id,name,age,gender,hobbies | 处理编辑请求 |
| get      | /students/delete | id      |                            | 处理删除请求 |


### API设计
- findAll 		查询所有数据
- save				保存数据
- findById		通过 ID 查询更新的数据
- updataById	通过 ID 更新数据
- deleteById	通过 ID 删除数据
