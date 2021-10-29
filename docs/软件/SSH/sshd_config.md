# sshd_config

| 配置                   | 说明                                            |
| ---------------------- | ----------------------------------------------- |
| PasswordAuthentication | 指定是否允许密码认证                            |
| PermitRootLogin        | 指定 root 是否可以使用 ssh 登录                 |
| RSAAuthentication      | 指定是否允许 RSA 身份验证（仅适用于协议版本 1） |
| PubkeyAuthentication   | 指定是否允许公钥认证                            |
| AuthorizedKeysFile     | 指定包含用于用户身份验证的公钥的文件            |
| GatewayPorts           | 指定是否允许远程主机连接到为客户端转发的端口    |

